import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import { Shield, Lock, Eye, Database, Globe, AlertCircle } from 'lucide-react';

export default function Privacy() {
  return (
    <Layout>
      <Helmet>
        <title>Privacy Policy - PrivyQR</title>
        <meta name="description" content="PrivyQR's privacy policy. Learn how we protect your data with our client-side QR code scanner that never uploads your information." />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Your privacy is our top priority. Here's how we protect it.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Last updated: January 15, 2025
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 border mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold">Our Privacy Commitment</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              PrivyQR is built on a foundation of privacy. We believe that scanning QR codes shouldn't 
              require sacrificing your personal data. That's why we've designed our service to work 
              entirely in your browser, without uploading any of your images or data to our servers.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-primary/10 rounded-lg p-4">
                <Lock className="w-6 h-6 text-primary mb-2" />
                <h3 className="font-semibold mb-1">No Uploads</h3>
                <p className="text-sm text-muted-foreground">
                  Your images never leave your device
                </p>
              </div>
              <div className="bg-primary/10 rounded-lg p-4">
                <Eye className="w-6 h-6 text-primary mb-2" />
                <h3 className="font-semibold mb-1">No Tracking</h3>
                <p className="text-sm text-muted-foreground">
                  We don't track individual users
                </p>
              </div>
              <div className="bg-primary/10 rounded-lg p-4">
                <Database className="w-6 h-6 text-primary mb-2" />
                <h3 className="font-semibold mb-1">No Storage</h3>
                <p className="text-sm text-muted-foreground">
                  We don't store your QR data
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Information We Don't Collect</h2>
              <p className="text-muted-foreground mb-4">
                Unlike traditional QR code scanners, PrivyQR processes everything locally in your browser. 
                This means we never receive or have access to:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Images you upload or scan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>QR code contents or data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>PDFs or documents you process</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Camera feeds from webcam scanning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Personal information of any kind</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Analytics and Cookies</h2>
              <p className="text-muted-foreground mb-4">
                We use minimal, privacy-respecting analytics to understand how our service is used:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Page Views:</strong> We track which pages are visited (not who visits them)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Feature Usage:</strong> We track which features are used (scan from image, PDF, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>No Personal Data:</strong> We don't collect IP addresses, device IDs, or user identifiers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>No Tracking Cookies:</strong> We don't use cookies to track users across sites</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Third-Party Services</h2>
              <p className="text-muted-foreground mb-4">
                PrivyQR uses the following third-party services:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Cloudflare Pages:</strong> For hosting our website (they may collect basic access logs)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Google Fonts:</strong> For typography (can be blocked without affecting functionality)</span>
                </li>
              </ul>
              <p className="text-muted-foreground mt-4">
                These services have their own privacy policies. However, none of them have access to your 
                QR codes or uploaded images, as this data never leaves your browser.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
              <p className="text-muted-foreground mb-4">
                Since we don't collect or store your data, there's nothing for us to secure on our servers. 
                However, we take several measures to ensure your privacy:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>All processing happens locally in your browser using JavaScript</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>We serve our site over HTTPS to prevent tampering</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Our code is regularly reviewed for security vulnerabilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>We don't use external APIs that could compromise your data</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                Since we don't collect personal data, traditional data rights (like GDPR's right to deletion) 
                don't apply. However, you always have the right to:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Use our service anonymously without any account or login</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Verify our privacy claims using your browser's developer tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Block any third-party services (like fonts) without losing core functionality</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Contact us with any privacy concerns or questions</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Children's Privacy</h2>
              <p className="text-muted-foreground">
                PrivyQR doesn't knowingly collect any information from anyone, including children under 13. 
                Since we don't collect personal data, our service is safe for users of all ages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this privacy policy from time to time. Any changes will be posted on this page 
                with an updated revision date. Since we don't collect user data, we can't notify you directly 
                of changes, so please review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Open Source Commitment</h2>
              <p className="text-muted-foreground">
                We believe in transparency. Our QR scanning technology is based on open-source libraries, 
                and you can verify our privacy claims by examining the code in your browser's developer tools.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this privacy policy or our practices, please contact us:
              </p>
              <div className="bg-card rounded-lg p-6 border">
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-primary" />
                    <span>Website: privyqr.com</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-primary" />
                    <span>Email: privacy@privyqr.com</span>
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-12 p-6 bg-primary/10 rounded-lg border border-primary/20">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              Privacy by Design
            </h3>
            <p className="text-sm text-muted-foreground">
              PrivyQR was built from the ground up with privacy as the core principle. We don't just promise 
              privacy; our architecture makes data collection impossible. Your QR codes are your business, not ours.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}