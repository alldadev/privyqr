import { Helmet } from 'react-helmet-async';
import { Link } from 'wouter';
import { FileText, ArrowLeft, Upload, FileCheck, Layers, Download } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';

export default function ExtractQRFromPDF() {
  return (
    <Layout>
      <Helmet>
        <title>Extract QR Codes from PDF Documents: Complete Guide | PrivyQR</title>
        <meta name="description" content="Learn how to scan multiple QR codes from PDF files, including multi-page documents. Perfect for tickets, invoices, and digital documents." />
        <link rel="canonical" href="https://privyqr.com/blog/extract-qr-from-pdf" />
      </Helmet>

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Image */}
        <img 
          src="/blog-images/hero-pdf-extract.jpg" 
          alt="Person extracting QR codes from PDF document on tablet with digital workflow visualization"
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
            <FileText className="w-5 h-5" />
            <span className="text-sm font-medium">Tutorial</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Extract QR Codes from PDF Documents: Complete Guide
          </h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            <time>January 10, 2025</time>
            <span>•</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="lead text-xl text-muted-foreground">
            PDFs often contain QR codes for tickets, invoices, certificates, and more. Learn how 
            to extract and scan all QR codes from PDF documents quickly and securely, even from 
            multi-page files.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Why Extract QR Codes from PDFs?</h2>
          <p>
            Modern digital documents increasingly use QR codes to link physical and digital 
            information. From event tickets to shipping labels, QR codes in PDFs provide quick 
            access to important data.
          </p>

          <Card className="my-6 border-purple-500/20 bg-purple-50 dark:bg-purple-900/10">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Common PDF QR Code Uses</h3>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div>
                  <strong>Business Documents:</strong>
                  <ul className="mt-1 space-y-1">
                    <li>• Invoices with payment links</li>
                    <li>• Contracts with verification codes</li>
                    <li>• Reports with data sources</li>
                  </ul>
                </div>
                <div>
                  <strong>Personal Documents:</strong>
                  <ul className="mt-1 space-y-1">
                    <li>• Event and travel tickets</li>
                    <li>• Certificates and credentials</li>
                    <li>• Shipping labels and receipts</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold mt-8 mb-4">How to Extract QR Codes with PrivyQR</h2>
          
          <ol className="space-y-6 my-6">
            <li>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <strong className="text-lg">Open PrivyQR PDF Scanner</strong>
                  <p className="mt-1">Navigate to privyqr.com and look for the PDF scanner option or drag your PDF directly onto the page.</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <strong className="text-lg">Upload Your PDF</strong>
                  <p className="mt-1">Click "Select Files" or drag and drop your PDF. PrivyQR supports PDFs up to 50MB with unlimited pages.</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <strong className="text-lg">Automatic Extraction</strong>
                  <p className="mt-1">PrivyQR automatically scans every page and extracts all QR codes found, displaying them with page numbers.</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <strong className="text-lg">View Results</strong>
                  <p className="mt-1">Each QR code is decoded and displayed with its content, page location, and actionable options.</p>
                </div>
              </div>
            </li>
          </ol>

          <h2 className="text-2xl font-bold mt-8 mb-4">Advanced Features</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">Multi-Page Processing</h3>
          <p>
            PrivyQR processes all pages simultaneously, perfect for documents like:
          </p>
          <ul className="space-y-2 my-3">
            <li>• Multi-ticket bookings (concerts, flights, events)</li>
            <li>• Batch shipping labels</li>
            <li>• Educational materials with QR-linked resources</li>
            <li>• Product catalogs with QR codes for each item</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Batch Export</h3>
          <p>
            After scanning, you can export all QR code data in various formats:
          </p>
          <ul className="space-y-2 my-3">
            <li>• <strong>CSV:</strong> For spreadsheet analysis</li>
            <li>• <strong>JSON:</strong> For developers and automation</li>
            <li>• <strong>Text:</strong> Simple list of all decoded content</li>
          </ul>

          <Card className="my-6 border-green-500/20 bg-green-50 dark:bg-green-900/10">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-green-600 dark:text-green-400" />
                100% Private Processing
              </h3>
              <p className="text-sm">
                Your PDF never leaves your device. All QR code extraction and decoding happens 
                locally in your browser using WebAssembly technology. No uploads, no server 
                processing, no data retention - complete privacy guaranteed.
              </p>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold mt-8 mb-4">Technical Details</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">Supported QR Code Types</h3>
          <p>PrivyQR extracts and decodes all standard QR formats from PDFs:</p>
          <ul className="space-y-2 my-3">
            <li>• URLs and web links</li>
            <li>• Plain text and structured data</li>
            <li>• WiFi credentials</li>
            <li>• Contact information (vCard)</li>
            <li>• Calendar events</li>
            <li>• Email addresses and SMS</li>
            <li>• Cryptocurrency addresses</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Performance</h3>
          <p>
            Processing speed depends on your device, but typical performance is:
          </p>
          <ul className="space-y-2 my-3">
            <li>• Single-page PDF: Under 1 second</li>
            <li>• 10-page document: 2-3 seconds</li>
            <li>• 100-page document: 10-15 seconds</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Common Use Cases</h2>

          <div className="grid md:grid-cols-2 gap-4 my-6">
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">Event Management</h4>
                <p className="text-sm text-muted-foreground">
                  Extract all ticket QR codes from multi-page booking confirmations for easy 
                  check-in at venues.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">Shipping & Logistics</h4>
                <p className="text-sm text-muted-foreground">
                  Process batch shipping labels to extract tracking codes and destination 
                  information quickly.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">Digital Certificates</h4>
                <p className="text-sm text-muted-foreground">
                  Verify authenticity of certificates by scanning embedded QR codes that 
                  link to verification databases.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">Financial Documents</h4>
                <p className="text-sm text-muted-foreground">
                  Extract payment QR codes from invoices for quick payment processing 
                  without manual data entry.
                </p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Tips for Best Results</h2>
          <ul className="space-y-3 my-4">
            <li>
              <strong>PDF Quality:</strong> Higher resolution PDFs yield better scanning results. 
              Aim for at least 150 DPI for embedded QR codes.
            </li>
            <li>
              <strong>QR Code Size:</strong> QR codes should be at least 1 inch (2.5 cm) square 
              in the PDF for optimal detection.
            </li>
            <li>
              <strong>Clear Contrast:</strong> Ensure QR codes have good contrast against their 
              background - black on white works best.
            </li>
            <li>
              <strong>File Size:</strong> Compress large PDFs before scanning if they exceed 50MB 
              to ensure smooth processing.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
          <p>
            Extracting QR codes from PDFs doesn't have to be complicated or compromise your 
            privacy. With PrivyQR, you can quickly scan all QR codes from any PDF document, 
            regardless of length, while keeping your data completely private. Try it now with 
            your next PDF containing QR codes - it's free, fast, and secure.
          </p>
        </div>
      </article>
    </Layout>
  );
}