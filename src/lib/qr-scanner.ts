import { BrowserMultiFormatReader, NotFoundException, Result } from '@zxing/library';
import jsQR from 'jsqr';

export interface QRResult {
  text: string;
  format: string;
  type: QRType;
  metadata?: QRMetadata;
}

export type QRType = 'url' | 'wifi' | 'vcard' | 'email' | 'sms' | 'geo' | 'text';

export interface QRMetadata {
  // WiFi specific
  ssid?: string;
  password?: string;
  encryption?: string;
  hidden?: boolean;
  
  // URL specific
  domain?: string;
  protocol?: string;
  
  // vCard specific
  name?: string;
  phone?: string;
  email?: string;
  organization?: string;
  
  // Geo specific
  latitude?: number;
  longitude?: number;
  
  // SMS/Email specific
  recipient?: string;
  subject?: string;
  body?: string;
}

class QRScanner {
  private zxingReader: BrowserMultiFormatReader;

  constructor() {
    this.zxingReader = new BrowserMultiFormatReader();
  }

  async scanFromImage(imageFile: File): Promise<QRResult | null> {
    return new Promise((resolve) => {
      const reader = new FileReader();
      
      reader.onload = async (e) => {
        const imageSrc = e.target?.result as string;
        
        // Try ZXing first
        try {
          const result = await this.scanWithZXing(imageSrc);
          if (result) {
            resolve(result);
            return;
          }
        } catch (error) {
          console.log('ZXing failed, trying jsQR...', error);
        }
        
        // Fallback to jsQR
        try {
          const result = await this.scanWithJsQR(imageSrc);
          resolve(result);
        } catch (error) {
          console.error('Both scanners failed:', error);
          resolve(null);
        }
      };
      
      reader.readAsDataURL(imageFile);
    });
  }

  private async scanWithZXing(imageSrc: string): Promise<QRResult | null> {
    const img = new Image();
    img.src = imageSrc;
    
    await new Promise((resolve) => {
      img.onload = resolve;
    });
    
    try {
      const result = await this.zxingReader.decodeFromImage(img);
      return this.parseQRResult(result.getText());
    } catch (error) {
      if (error instanceof NotFoundException) {
        return null;
      }
      throw error;
    }
  }

  private async scanWithJsQR(imageSrc: string): Promise<QRResult | null> {
    const img = new Image();
    img.src = imageSrc;
    
    await new Promise((resolve) => {
      img.onload = resolve;
    });
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;
    
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const code = jsQR(imageData.data, imageData.width, imageData.height);
    
    if (code) {
      return this.parseQRResult(code.data);
    }
    
    return null;
  }

  async scanFromCanvas(canvas: HTMLCanvasElement): Promise<QRResult | null> {
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;
    
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const code = jsQR(imageData.data, imageData.width, imageData.height);
    
    if (code) {
      return this.parseQRResult(code.data);
    }
    
    return null;
  }

  private parseQRResult(text: string): QRResult {
    const type = this.detectQRType(text);
    const metadata = this.extractMetadata(text, type);
    
    return {
      text,
      format: 'QR_CODE',
      type,
      metadata
    };
  }

  private detectQRType(text: string): QRType {
    // URL detection
    if (/^https?:\/\//i.test(text) || /^www\./i.test(text)) {
      return 'url';
    }
    
    // WiFi detection
    if (/^WIFI:/i.test(text)) {
      return 'wifi';
    }
    
    // vCard detection
    if (/^BEGIN:VCARD/i.test(text)) {
      return 'vcard';
    }
    
    // Email detection
    if (/^mailto:/i.test(text) || /^MATMSG:/i.test(text)) {
      return 'email';
    }
    
    // SMS detection
    if (/^sms:/i.test(text) || /^SMSTO:/i.test(text)) {
      return 'sms';
    }
    
    // Geo location detection
    if (/^geo:/i.test(text)) {
      return 'geo';
    }
    
    // Default to text
    return 'text';
  }

  private extractMetadata(text: string, type: QRType): QRMetadata {
    const metadata: QRMetadata = {};
    
    switch (type) {
      case 'url':
        try {
          const url = new URL(text.startsWith('http') ? text : `http://${text}`);
          metadata.domain = url.hostname;
          metadata.protocol = url.protocol;
        } catch {
          // Invalid URL
        }
        break;
        
      case 'wifi':
        const wifiMatch = text.match(/WIFI:T:([^;]*);S:([^;]*);P:([^;]*);H:([^;]*)?;?/i);
        if (wifiMatch) {
          metadata.encryption = wifiMatch[1] || 'WPA';
          metadata.ssid = wifiMatch[2];
          metadata.password = wifiMatch[3];
          metadata.hidden = wifiMatch[4] === 'true';
        }
        break;
        
      case 'vcard':
        const nameMatch = text.match(/FN:([^\r\n]+)/);
        const phoneMatch = text.match(/TEL[^:]*:([^\r\n]+)/);
        const emailMatch = text.match(/EMAIL[^:]*:([^\r\n]+)/);
        const orgMatch = text.match(/ORG:([^\r\n]+)/);
        
        if (nameMatch) metadata.name = nameMatch[1];
        if (phoneMatch) metadata.phone = phoneMatch[1];
        if (emailMatch) metadata.email = emailMatch[1];
        if (orgMatch) metadata.organization = orgMatch[1];
        break;
        
      case 'geo':
        const geoMatch = text.match(/geo:([^,]+),([^,?]+)/);
        if (geoMatch) {
          metadata.latitude = parseFloat(geoMatch[1]);
          metadata.longitude = parseFloat(geoMatch[2]);
        }
        break;
        
      case 'email':
        if (text.startsWith('mailto:')) {
          const emailParts = text.substring(7).split('?');
          metadata.recipient = emailParts[0];
          
          const params = new URLSearchParams(emailParts[1] || '');
          metadata.subject = params.get('subject') || undefined;
          metadata.body = params.get('body') || undefined;
        } else if (text.startsWith('MATMSG:')) {
          const toMatch = text.match(/TO:([^;]+)/);
          const subMatch = text.match(/SUB:([^;]+)/);
          const bodyMatch = text.match(/BODY:([^;]+)/);
          
          if (toMatch) metadata.recipient = toMatch[1];
          if (subMatch) metadata.subject = subMatch[1];
          if (bodyMatch) metadata.body = bodyMatch[1];
        }
        break;
        
      case 'sms':
        const smsMatch = text.match(/^(?:sms|SMSTO):([^:?]+)(?:[?:](.*))?/i);
        if (smsMatch) {
          metadata.recipient = smsMatch[1];
          metadata.body = smsMatch[2];
        }
        break;
    }
    
    return metadata;
  }

  cleanup() {
    // Clean up ZXing reader
    this.zxingReader.reset();
  }
}

export default QRScanner;