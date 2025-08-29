import { Helmet } from 'react-helmet-async';
import { Link } from 'wouter';
import { Smartphone, ArrowLeft, Camera, Monitor, Copy, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';

export default function ScanQRFromScreenshot() {
  return (
    <Layout>
      <Helmet>
        <title>How to Scan QR Codes from Screenshots on Any Device | PrivyQR</title>
        <meta name="description" content="Complete guide to scanning QR codes from screenshots on iPhone, Android, Windows, and Mac. No apps needed - use PrivyQR directly in your browser." />
        <link rel="canonical" href="https://privyqr.com/blog/scan-qr-from-screenshot" />
      </Helmet>

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Image */}
        <img 
          src="/blog-images/hero-screenshot-scan.jpg" 
          alt="Scan QR codes from screenshots - Split screen showing smartphone QR scanning"
          className="w-full h-auto rounded-lg shadow-lg mb-8"
          loading="lazy"
        />
        
        <div className="mb-8">
          <Link href="/blog">
            <a className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-4">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </a>
          </Link>
          <div className="flex items-center gap-2 text-primary mb-4">
            <Smartphone className="w-5 h-5" />
            <span className="text-sm font-medium">Tutorial</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            How to Scan QR Codes from Screenshots on Any Device
          </h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            <time>January 12, 2025</time>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="lead text-xl text-muted-foreground">
            Found a QR code in an email, website, or document? Learn how to scan QR codes from 
            screenshots on any device without downloading special apps. PrivyQR makes it simple 
            and secure.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Why Scan QR Codes from Screenshots?</h2>
          <p>
            QR codes appear everywhere online - in emails, PDFs, websites, and digital documents. 
            Traditional QR scanners require pointing your camera at a physical code, but what if 
            the QR code is already on your screen? That's where screenshot scanning becomes essential.
          </p>

          <Card className="my-6 border-blue-500/20 bg-blue-50 dark:bg-blue-900/10">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Common Use Cases</h3>
              <ul className="space-y-2 text-sm">
                <li>• QR codes in email confirmations and tickets</li>
                <li>• Digital event invitations with QR codes</li>
                <li>• QR codes in PDF documents and presentations</li>
                <li>• Website QR codes for mobile app downloads</li>
                <li>• Virtual meeting QR codes for quick joining</li>
              </ul>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold mt-8 mb-4">Method 1: Using PrivyQR (Easiest)</h2>
          
          <ol className="space-y-4 my-4">
            <li>
              <strong>Step 1: Take a Screenshot</strong>
              <ul className="mt-2 ml-4 space-y-1">
                <li>• <strong>Windows:</strong> Win + Shift + S or Print Screen</li>
                <li>• <strong>Mac:</strong> Cmd + Shift + 4</li>
                <li>• <strong>iPhone:</strong> Side button + Volume Up</li>
                <li>• <strong>Android:</strong> Power + Volume Down</li>
              </ul>
            </li>
            <li>
              <strong>Step 2: Open PrivyQR</strong>
              <p>Visit privyqr.com in any browser - no app installation needed.</p>
            </li>
            <li>
              <strong>Step 3: Upload Your Screenshot</strong>
              <p>Click "Select Files" or drag and drop your screenshot directly onto the page.</p>
            </li>
            <li>
              <strong>Step 4: Get Instant Results</strong>
              <p>PrivyQR instantly decodes the QR code and displays the content safely.</p>
            </li>
          </ol>

          <h2 className="text-2xl font-bold mt-8 mb-4">Method 2: Copy and Paste (Even Faster)</h2>
          <p>
            PrivyQR supports direct clipboard pasting - perfect for quick scanning:
          </p>
          <ol className="space-y-3 my-4">
            <li>1. Take a screenshot (it's automatically copied to your clipboard)</li>
            <li>2. Go to privyqr.com</li>
            <li>3. Press Ctrl+V (Windows) or Cmd+V (Mac) anywhere on the page</li>
            <li>4. The QR code is instantly scanned!</li>
          </ol>

          <h2 className="text-2xl font-bold mt-8 mb-4">Platform-Specific Tips</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">iPhone/iPad</h3>
          <p>
            iOS 15+ has built-in QR detection in Photos, but it requires saving screenshots 
            and doesn't work with all QR types. PrivyQR handles all QR formats and doesn't 
            require saving files.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Android</h3>
          <p>
            Google Lens can scan screenshots, but requires the Google app and uploads your 
            images to Google's servers. PrivyQR processes everything locally for complete privacy.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Windows</h3>
          <p>
            The Snipping Tool (Win + Shift + S) makes capturing QR codes easy. Copy the 
            screenshot and paste directly into PrivyQR - no need to save files.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Mac</h3>
          <p>
            Use Cmd + Shift + 4 to capture a specific area. The screenshot is automatically 
            copied to your clipboard for instant pasting into PrivyQR.
          </p>

          <Card className="my-6 border-green-500/20 bg-green-50 dark:bg-green-900/10">
            <CardContent className="pt-6">
              <div className="flex gap-3">
                <Shield className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Privacy Advantage</h3>
                  <p className="text-sm">
                    Unlike mobile apps that require camera permissions and can access your photos, 
                    PrivyQR runs entirely in your browser. Your screenshots never leave your device - 
                    all processing happens locally. No uploads, no tracking, no privacy concerns.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold mt-8 mb-4">Troubleshooting Common Issues</h2>
          
          <h3 className="text-lg font-semibold mt-4 mb-2">QR Code Not Detected?</h3>
          <ul className="space-y-2 my-2">
            <li>• Ensure the entire QR code is visible in the screenshot</li>
            <li>• Avoid blurry or low-resolution screenshots</li>
            <li>• Make sure there's some white space around the QR code</li>
            <li>• Try cropping the screenshot to focus on the QR code</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-2">Multiple QR Codes?</h3>
          <p>
            PrivyQR can detect and scan multiple QR codes in a single screenshot. Each code 
            will be displayed separately with its decoded content.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
          <p>
            Scanning QR codes from screenshots doesn't require special apps or complicated 
            procedures. With PrivyQR, you can quickly and privately scan any QR code from 
            your screen, whether it's in an email, document, or website. Try it now - it's 
            free, private, and works on any device with a browser.
          </p>
        </div>
      </article>
    </Layout>
  );
}