import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Zap, FileSearch, Camera, Globe, Lock } from 'lucide-react';
import DropZone from '@/components/scanner/DropZone';
import WebcamScanner from '@/components/scanner/WebcamScanner';
import ResultCard from '@/components/results/ResultCard';
import QRScanner, { QRResult } from '@/lib/qr-scanner';
import PDFScanner, { PDFQRResult } from '@/lib/pdf-scanner';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [results, setResults] = useState<QRResult[]>([]);
  const [pdfResults, setPdfResults] = useState<PDFQRResult[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showWebcam, setShowWebcam] = useState(false);
  const [processedFiles, setProcessedFiles] = useState(0);
  const [totalFiles, setTotalFiles] = useState(0);

  const handleFilesDropped = async (files: File[]) => {
    setIsProcessing(true);
    setTotalFiles(files.length);
    setProcessedFiles(0);
    
    const scanner = new QRScanner();
    const pdfScanner = new PDFScanner();
    const newResults: QRResult[] = [];
    const newPdfResults: PDFQRResult[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      setProcessedFiles(i + 1);

      if (file.type === 'application/pdf') {
        const pdfQRs = await pdfScanner.scanPDF(file);
        newPdfResults.push(...pdfQRs);
      } else {
        const result = await scanner.scanFromImage(file);
        if (result) {
          newResults.push(result);
        }
      }
    }

    scanner.cleanup();
    
    setResults(prev => [...prev, ...newResults]);
    setPdfResults(prev => [...prev, ...newPdfResults]);
    setIsProcessing(false);
  };

  const handleWebcamResult = (result: QRResult) => {
    setResults(prev => [...prev, result]);
    setShowWebcam(false);
  };

  const clearResults = () => {
    setResults([]);
    setPdfResults([]);
    setProcessedFiles(0);
    setTotalFiles(0);
  };

  // Flatten PDF results for display
  const allResults = [
    ...results,
    ...pdfResults.flatMap(pdf => 
      pdf.qrResults.map(qr => ({
        ...qr,
        format: `PDF Page ${pdf.pageNumber} - ${qr.format}`
      }))
    )
  ];

  return (
    <>
      <Helmet>
        <title>PrivyQR - Scan QR Codes Privately in Your Browser</title>
        <meta name="description" content="Scan QR codes from images, webcam, screenshots, and PDFs instantly in your browser. 100% private - no uploads required. Batch scan multiple QR codes free." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
        {/* Header */}
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <FileSearch className="w-6 h-6 text-primary-foreground" />
                </div>
                <h1 className="text-2xl font-bold gradient-text">PrivyQR</h1>
              </div>
              <nav className="hidden md:flex items-center gap-6">
                <a href="/scan-from-image" className="text-sm hover:text-primary transition-colors">
                  Scan from Image
                </a>
                <a href="/scan-from-screenshot" className="text-sm hover:text-primary transition-colors">
                  Screenshot Scanner
                </a>
                <a href="/scan-from-pdf" className="text-sm hover:text-primary transition-colors">
                  PDF Scanner
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Scan QR codes privately — <span className="gradient-text">right in your browser</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              No uploads, no tracking, no ads. All QR code scanning happens locally on your device.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 p-4 bg-card rounded-lg border">
              <Shield className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold">100% Private</h3>
                <p className="text-sm text-muted-foreground">No server uploads</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-card rounded-lg border">
              <Zap className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Lightning Fast</h3>
                <p className="text-sm text-muted-foreground">Instant results</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-card rounded-lg border">
              <FileSearch className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold">PDF Support</h3>
                <p className="text-sm text-muted-foreground">Scan multi-page PDFs</p>
              </div>
            </div>
          </div>

          {/* Drop Zone */}
          <DropZone
            onFilesDropped={handleFilesDropped}
            onWebcamClick={() => setShowWebcam(true)}
            disabled={isProcessing}
          />

          {/* Processing indicator */}
          {isProcessing && (
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg">
                <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                <span className="text-sm">
                  Processing {processedFiles} of {totalFiles} files...
                </span>
              </div>
            </div>
          )}

          {/* Results */}
          {allResults.length > 0 && (
            <div className="mt-12">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold">
                  Found {allResults.length} QR {allResults.length === 1 ? 'code' : 'codes'}
                </h3>
                <Button variant="outline" onClick={clearResults}>
                  Clear All
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {allResults.map((result, index) => (
                  <ResultCard key={index} result={result} index={index} />
                ))}
              </div>
            </div>
          )}
        </section>

        {/* How it Works */}
        <section className="container mx-auto px-4 py-16 border-t">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">How it Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">1. Upload or Scan</h4>
                <p className="text-sm text-muted-foreground">
                  Drop images, PDFs, or use your webcam to scan QR codes
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">2. Local Processing</h4>
                <p className="text-sm text-muted-foreground">
                  All decoding happens in your browser. Nothing is uploaded.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">3. Smart Results</h4>
                <p className="text-sm text-muted-foreground">
                  Get actionable cards for URLs, WiFi, contacts, and more
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t bg-muted/50">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center text-sm text-muted-foreground">
              <p>© 2024 PrivyQR. All processing happens in your browser.</p>
              <p className="mt-2">
                Built with privacy in mind. No tracking, no cookies, no ads.
              </p>
            </div>
          </div>
        </footer>
      </div>

      {/* Webcam Scanner Modal */}
      {showWebcam && (
        <WebcamScanner
          onScanResult={handleWebcamResult}
          onClose={() => setShowWebcam(false)}
        />
      )}
    </>
  );
}