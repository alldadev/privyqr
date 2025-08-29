import { Copy, ExternalLink, Download, Wifi, MapPin, Mail, MessageSquare, User, AlertTriangle, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { QRResult } from '@/lib/qr-scanner';
import { useState } from 'react';

interface ResultCardProps {
  result: QRResult;
  index: number;
}

export default function ResultCard({ result, index }: ResultCardProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getIcon = () => {
    switch (result.type) {
      case 'url': return <ExternalLink className="w-5 h-5" />;
      case 'wifi': return <Wifi className="w-5 h-5" />;
      case 'vcard': return <User className="w-5 h-5" />;
      case 'email': return <Mail className="w-5 h-5" />;
      case 'sms': return <MessageSquare className="w-5 h-5" />;
      case 'geo': return <MapPin className="w-5 h-5" />;
      default: return null;
    }
  };

  const getTypeLabel = () => {
    switch (result.type) {
      case 'url': return 'Website';
      case 'wifi': return 'Wi-Fi Network';
      case 'vcard': return 'Contact Card';
      case 'email': return 'Email';
      case 'sms': return 'SMS';
      case 'geo': return 'Location';
      default: return 'Text';
    }
  };

  const isShortUrl = (url: string) => {
    const shortUrlDomains = ['bit.ly', 'tinyurl.com', 'goo.gl', 'ow.ly', 't.co', 'short.link'];
    try {
      const domain = new URL(url).hostname;
      return shortUrlDomains.some(d => domain.includes(d));
    } catch {
      return false;
    }
  };

  const downloadVCard = () => {
    const vCardData = result.text;
    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `contact-${Date.now()}.vcf`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const renderContent = () => {
    switch (result.type) {
      case 'url':
        const isSuspicious = isShortUrl(result.text);
        return (
          <div className="space-y-3">
            {isSuspicious && (
              <div className="flex items-center gap-2 p-2 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 rounded-md">
                <AlertTriangle className="w-4 h-4" />
                <span className="text-sm">Short URL detected - verify before clicking</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Domain:</span>
              <span className="font-medium">{result.metadata?.domain || 'Unknown'}</span>
            </div>
            <div className="flex gap-2">
              <Button
                variant="default"
                size="sm"
                className="flex-1"
                onClick={() => window.open(result.text, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Open in New Tab
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(result.text)}
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        );

      case 'wifi':
        return (
          <div className="space-y-3">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Network:</span>
                <span className="font-medium">{result.metadata?.ssid || 'Unknown'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Password:</span>
                <span className="font-mono bg-muted px-2 py-1 rounded">
                  {result.metadata?.password || 'No password'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Security:</span>
                <span>{result.metadata?.encryption || 'WPA'}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(result.metadata?.ssid || '')}
              >
                Copy Network Name
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(result.metadata?.password || '')}
              >
                Copy Password
              </Button>
            </div>
          </div>
        );

      case 'vcard':
        return (
          <div className="space-y-3">
            <div className="space-y-2">
              {result.metadata?.name && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Name:</span>
                  <span className="font-medium">{result.metadata.name}</span>
                </div>
              )}
              {result.metadata?.phone && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Phone:</span>
                  <span>{result.metadata.phone}</span>
                </div>
              )}
              {result.metadata?.email && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Email:</span>
                  <span>{result.metadata.email}</span>
                </div>
              )}
              {result.metadata?.organization && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Organization:</span>
                  <span>{result.metadata.organization}</span>
                </div>
              )}
            </div>
            <Button
              variant="default"
              size="sm"
              className="w-full"
              onClick={downloadVCard}
            >
              <Download className="w-4 h-4 mr-2" />
              Download Contact (.vcf)
            </Button>
          </div>
        );

      case 'geo':
        const lat = result.metadata?.latitude;
        const lng = result.metadata?.longitude;
        const mapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
        return (
          <div className="space-y-3">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Latitude:</span>
                <span className="font-mono">{lat}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Longitude:</span>
                <span className="font-mono">{lng}</span>
              </div>
            </div>
            <Button
              variant="default"
              size="sm"
              className="w-full"
              onClick={() => window.open(mapsUrl, '_blank')}
            >
              <MapPin className="w-4 h-4 mr-2" />
              Open in Google Maps
            </Button>
          </div>
        );

      case 'email':
        const mailtoUrl = `mailto:${result.metadata?.recipient}?subject=${encodeURIComponent(result.metadata?.subject || '')}&body=${encodeURIComponent(result.metadata?.body || '')}`;
        return (
          <div className="space-y-3">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">To:</span>
                <span>{result.metadata?.recipient}</span>
              </div>
              {result.metadata?.subject && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Subject:</span>
                  <span>{result.metadata.subject}</span>
                </div>
              )}
              {result.metadata?.body && (
                <div>
                  <span className="text-sm text-muted-foreground">Message:</span>
                  <p className="mt-1 text-sm bg-muted p-2 rounded">{result.metadata.body}</p>
                </div>
              )}
            </div>
            <Button
              variant="default"
              size="sm"
              className="w-full"
              onClick={() => window.open(mailtoUrl, '_blank')}
            >
              <Mail className="w-4 h-4 mr-2" />
              Open Email Client
            </Button>
          </div>
        );

      case 'sms':
        const smsUrl = `sms:${result.metadata?.recipient}?body=${encodeURIComponent(result.metadata?.body || '')}`;
        return (
          <div className="space-y-3">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">To:</span>
                <span>{result.metadata?.recipient}</span>
              </div>
              {result.metadata?.body && (
                <div>
                  <span className="text-sm text-muted-foreground">Message:</span>
                  <p className="mt-1 text-sm bg-muted p-2 rounded">{result.metadata.body}</p>
                </div>
              )}
            </div>
            <Button
              variant="default"
              size="sm"
              className="w-full"
              onClick={() => window.open(smsUrl, '_blank')}
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Open SMS
            </Button>
          </div>
        );

      default:
        return (
          <div className="space-y-3">
            <div className="bg-muted p-3 rounded-md">
              <p className="text-sm font-mono break-all">{result.text}</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="w-full"
              onClick={() => copyToClipboard(result.text)}
            >
              {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
              {copied ? 'Copied!' : 'Copy Text'}
            </Button>
          </div>
        );
    }
  };

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {getIcon()}
            <CardTitle className="text-lg">{getTypeLabel()}</CardTitle>
          </div>
          <span className="text-sm text-muted-foreground">#{index + 1}</span>
        </div>
        <CardDescription>
          Scanned from {result.format.replace('_', ' ').toLowerCase()}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {renderContent()}
      </CardContent>
    </Card>
  );
}