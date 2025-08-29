import * as pdfjsLib from 'pdfjs-dist';
import QRScanner, { QRResult } from './qr-scanner';

// Configure PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

export interface PDFQRResult {
  pageNumber: number;
  qrResults: QRResult[];
}

class PDFScanner {
  private qrScanner: QRScanner;

  constructor() {
    this.qrScanner = new QRScanner();
  }

  async scanPDF(file: File, onProgress?: (progress: number) => void): Promise<PDFQRResult[]> {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    const results: PDFQRResult[] = [];
    const totalPages = pdf.numPages;

    for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
      if (onProgress) {
        onProgress((pageNum / totalPages) * 100);
      }

      const page = await pdf.getPage(pageNum);
      const qrResults = await this.scanPage(page);
      
      if (qrResults.length > 0) {
        results.push({
          pageNumber: pageNum,
          qrResults
        });
      }
    }

    return results;
  }

  private async scanPage(page: pdfjsLib.PDFPageProxy): Promise<QRResult[]> {
    const viewport = page.getViewport({ scale: 2.0 }); // Higher scale for better QR detection
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    
    if (!context) {
      return [];
    }

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    await page.render({
      canvasContext: context,
      viewport: viewport
    }).promise;

    // Try to find QR codes in different regions of the page
    const results: QRResult[] = [];
    
    // Scan the full page first
    const fullPageResult = await this.qrScanner.scanFromCanvas(canvas);
    if (fullPageResult) {
      results.push(fullPageResult);
    }

    // If no QR found in full page, try scanning regions
    if (results.length === 0) {
      const regions = this.getPageRegions(canvas.width, canvas.height);
      
      for (const region of regions) {
        const regionCanvas = this.extractRegion(canvas, region);
        const regionResult = await this.qrScanner.scanFromCanvas(regionCanvas);
        
        if (regionResult && !this.isDuplicate(regionResult, results)) {
          results.push(regionResult);
        }
      }
    }

    return results;
  }

  private getPageRegions(width: number, height: number): Array<{x: number, y: number, width: number, height: number}> {
    const regions = [];
    const regionSize = Math.min(width, height) / 2;
    
    // Divide page into overlapping regions for better QR detection
    for (let y = 0; y < height - regionSize / 2; y += regionSize / 2) {
      for (let x = 0; x < width - regionSize / 2; x += regionSize / 2) {
        regions.push({
          x,
          y,
          width: Math.min(regionSize, width - x),
          height: Math.min(regionSize, height - y)
        });
      }
    }
    
    return regions;
  }

  private extractRegion(
    sourceCanvas: HTMLCanvasElement,
    region: {x: number, y: number, width: number, height: number}
  ): HTMLCanvasElement {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) {
      return canvas;
    }

    canvas.width = region.width;
    canvas.height = region.height;
    
    ctx.drawImage(
      sourceCanvas,
      region.x, region.y, region.width, region.height,
      0, 0, region.width, region.height
    );
    
    return canvas;
  }

  private isDuplicate(result: QRResult, existing: QRResult[]): boolean {
    return existing.some(r => r.text === result.text);
  }
}

export default PDFScanner;