import { Helmet } from 'react-helmet-async';
import { Link } from 'wouter';
import { Shield, AlertTriangle, CheckCircle, ArrowLeft, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';

export default function QRCodeSecurityGuide() {
  return (
    <Layout>
      <Helmet>
        <title>QR Code Security: What You Need to Know in 2025 | PrivyQR</title>
        <meta name="description" content="Understanding QR code security risks and how to protect yourself from malicious codes. Learn about URL shorteners, phishing attempts, and safe scanning practices." />
        <link rel="canonical" href="https://privyqr.com/blog/qr-code-security-guide" />
        <meta property="og:title" content="QR Code Security: What You Need to Know in 2025" />
        <meta property="og:description" content="Complete guide to QR code security, malicious code detection, and safe scanning practices." />
      </Helmet>

        {/* Article */}
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Hero */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-primary mb-4">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">Security</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              QR Code Security: What You Need to Know in 2025
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <time>January 15, 2025</time>
              <span>•</span>
              <span>8 min read</span>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="lead text-xl text-muted-foreground">
              QR codes have become ubiquitous in our daily lives - from restaurant menus to payment systems. 
              But with their widespread adoption comes new security risks. This comprehensive guide will help 
              you understand and protect yourself from QR code threats.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">The Rising Threat of Malicious QR Codes</h2>
            <p>
              In 2025, cybercriminals have become increasingly sophisticated in their use of QR codes for 
              phishing attacks and malware distribution. According to recent security reports, QR code-based 
              attacks have increased by 300% since 2023.
            </p>

            <Card className="my-6 border-yellow-500/20 bg-yellow-50 dark:bg-yellow-900/10">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Warning Signs to Watch For</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• QR codes placed over existing ones (sticker bombing)</li>
                      <li>• Shortened URLs that hide the actual destination</li>
                      <li>• Requests for personal information after scanning</li>
                      <li>• Unexpected download prompts</li>
                      <li>• Misspelled domain names or suspicious URLs</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold mt-8 mb-4">Common QR Code Scams</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">1. Parking Meter Scams</h3>
            <p>
              Criminals place fake QR codes on parking meters, directing victims to fraudulent payment sites 
              that steal credit card information. Always verify the URL matches the official parking service.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">2. Restaurant Menu Hijacking</h3>
            <p>
              Fake QR codes at restaurants can redirect to phishing sites that mimic ordering platforms. 
              These sites collect payment information and personal data while appearing legitimate.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">3. Package Delivery Fraud</h3>
            <p>
              Scammers leave fake delivery notices with QR codes that lead to sites requesting "redelivery fees" 
              or personal information to "confirm" your identity.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">How to Scan QR Codes Safely</h2>

            <Card className="my-6 border-green-500/20 bg-green-50 dark:bg-green-900/10">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Best Practices for Safe Scanning</h3>
                    <ol className="space-y-3 text-sm">
                      <li>
                        <strong>1. Preview Before Visiting:</strong> Use a QR scanner that shows the URL 
                        before opening it. PrivyQR displays all URLs with safety warnings for suspicious links.
                      </li>
                      <li>
                        <strong>2. Check for Physical Tampering:</strong> Look for stickers placed over 
                        existing QR codes or signs of alteration.
                      </li>
                      <li>
                        <strong>3. Verify Domains:</strong> Ensure the domain matches the organization. 
                        Watch for misspellings like "arnazon.com" instead of "amazon.com".
                      </li>
                      <li>
                        <strong>4. Avoid App Downloads:</strong> Be suspicious of QR codes that prompt 
                        you to download apps, especially from unknown sources.
                      </li>
                      <li>
                        <strong>5. Use Browser-Based Scanners:</strong> Tools like PrivyQR run in your 
                        browser without requiring app permissions or access to your device.
                      </li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold mt-8 mb-4">The Danger of URL Shorteners</h2>
            <p>
              URL shorteners like bit.ly or tinyurl can hide malicious destinations. While legitimate 
              businesses use them, criminals exploit them to disguise harmful links. PrivyQR automatically 
              flags shortened URLs with warnings.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Why Privacy-First Scanning Matters</h2>
            <p>
              Many QR scanner apps request extensive permissions - camera, contacts, location, and storage. 
              These permissions can be exploited if the app is compromised. Browser-based scanners like 
              PrivyQR operate without these risks:
            </p>
            
            <ul className="space-y-2 my-4">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span>No app installation required</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span>No device permissions needed</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span>No data collection or tracking</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span>All processing happens locally in your browser</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">What to Do If You've Scanned a Malicious QR Code</h2>
            <ol className="space-y-3 my-4">
              <li><strong>1. Don't Enter Any Information:</strong> If redirected to a suspicious site, close it immediately.</li>
              <li><strong>2. Check Your Downloads:</strong> Delete any files that were downloaded without your consent.</li>
              <li><strong>3. Change Passwords:</strong> If you entered credentials, change those passwords immediately.</li>
              <li><strong>4. Monitor Accounts:</strong> Watch for unauthorized transactions or account access.</li>
              <li><strong>5. Report the Scam:</strong> Notify the legitimate business and local authorities.</li>
            </ol>

            <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
            <p>
              QR codes are incredibly useful, but like any technology, they can be exploited. By following 
              these security practices and using privacy-focused tools like PrivyQR, you can enjoy the 
              convenience of QR codes while protecting yourself from threats.
            </p>
            
            <p>
              Remember: when in doubt, don't scan. It's better to type a URL manually than to fall victim 
              to a QR code scam.
            </p>
          </div>

          {/* CTA */}
          <Card className="mt-12 bg-gradient-to-br from-primary/10 to-transparent">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Scan QR Codes Safely with PrivyQR</h3>
              <p className="text-muted-foreground mb-4">
                Preview URLs before visiting • Automatic safety warnings • No app required • 100% private
              </p>
              <div className="flex gap-4">
                <Link href="/">
                  <a className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                    Try PrivyQR Now <ExternalLink className="w-4 h-4" />
                  </a>
                </Link>
                <Link href="/blog">
                  <a className="inline-flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-secondary transition-colors">
                    Read More Articles
                  </a>
                </Link>
              </div>
            </CardContent>
          </Card>
        </article>
    </Layout>
  );
}