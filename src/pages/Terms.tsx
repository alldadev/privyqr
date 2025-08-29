import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import { FileText, Scale, AlertTriangle, CheckCircle } from 'lucide-react';

export default function Terms() {
  return (
    <Layout>
      <Helmet>
        <title>Terms of Service - PrivyQR</title>
        <meta name="description" content="PrivyQR terms of service. Understand your rights and responsibilities when using our privacy-first QR code scanner." />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Simple, fair terms for using PrivyQR
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Effective Date: January 15, 2025
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 border mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold">Agreement Overview</h2>
            </div>
            <p className="text-muted-foreground">
              By using PrivyQR ("the Service"), you agree to these Terms of Service ("Terms"). 
              If you don't agree with these Terms, please don't use our Service. We've tried to 
              make these Terms as clear and fair as possible.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-primary" />
                1. Service Description
              </h2>
              <p className="text-muted-foreground mb-4">
                PrivyQR is a free, browser-based QR code scanning service that processes images entirely 
                on your device. We provide tools to:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                  <span>Scan QR codes from uploaded images</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                  <span>Extract QR codes from PDF documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                  <span>Scan QR codes using your device's camera</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                  <span>Decode and display QR code contents</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Acceptable Use</h2>
              <p className="text-muted-foreground mb-4">
                You agree to use PrivyQR only for lawful purposes. You will not:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-500 mt-1" />
                  <span>Use the Service to scan or process illegal content</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-500 mt-1" />
                  <span>Attempt to reverse engineer or modify the Service</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-500 mt-1" />
                  <span>Use the Service to harm, harass, or deceive others</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-500 mt-1" />
                  <span>Overwhelm our servers with automated requests</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-500 mt-1" />
                  <span>Violate any applicable laws or regulations</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Privacy and Data</h2>
              <p className="text-muted-foreground mb-4">
                Your privacy is paramount to us:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>All QR code processing happens in your browser</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>We don't upload, store, or have access to your images or QR data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>We don't require registration or collect personal information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Please review our Privacy Policy for more details</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
              <p className="text-muted-foreground mb-4">
                <strong>Our Content:</strong> The PrivyQR website, design, and original content are owned by us 
                and protected by copyright laws.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Your Content:</strong> You retain all rights to images and QR codes you scan. Since we 
                don't upload or store your content, you maintain complete control over it.
              </p>
              <p className="text-muted-foreground">
                <strong>Open Source:</strong> PrivyQR uses open-source libraries. We acknowledge and respect 
                the licenses of these projects.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Disclaimers and Limitations</h2>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-4">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  Important Disclaimers
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• PrivyQR is provided "as is" without warranties of any kind</li>
                  <li>• We don't guarantee 100% accuracy in QR code scanning</li>
                  <li>• We're not responsible for the content of QR codes you scan</li>
                  <li>• We're not liable for any damages arising from your use of the Service</li>
                  <li>• Some jurisdictions don't allow limitation of liability, so these may not apply to you</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Third-Party Links</h2>
              <p className="text-muted-foreground">
                QR codes may contain links to third-party websites. We're not responsible for the content, 
                privacy practices, or security of these external sites. Always verify URLs before visiting them, 
                especially from QR codes from unknown sources.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Service Availability</h2>
              <p className="text-muted-foreground">
                While we strive to keep PrivyQR available 24/7, we don't guarantee uninterrupted access. 
                The Service may be temporarily unavailable due to maintenance, updates, or factors beyond 
                our control. We're not liable for any inconvenience this may cause.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Modifications to Service</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify, update, or discontinue PrivyQR at any time. While we'll 
                try to provide notice of significant changes, we're not obligated to do so. Continued use 
                of the Service after changes constitutes acceptance of those changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Indemnification</h2>
              <p className="text-muted-foreground">
                You agree to indemnify and hold PrivyQR harmless from any claims, damages, or expenses 
                arising from your use of the Service, violation of these Terms, or infringement of any 
                third-party rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms are governed by the laws of the United States, without regard to conflict of 
                law principles. Any disputes will be resolved in the courts of the United States.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Severability</h2>
              <p className="text-muted-foreground">
                If any provision of these Terms is found to be unenforceable, the remaining provisions will 
                continue in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">12. Entire Agreement</h2>
              <p className="text-muted-foreground">
                These Terms, along with our Privacy Policy, constitute the entire agreement between you and 
                PrivyQR regarding the use of our Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">13. Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                If you have questions about these Terms, please contact us:
              </p>
              <div className="bg-card rounded-lg p-6 border">
                <p className="font-semibold mb-2">PrivyQR Legal</p>
                <p className="text-muted-foreground">Email: legal@privyqr.com</p>
                <p className="text-muted-foreground">Website: privyqr.com</p>
              </div>
            </section>
          </div>

          <div className="mt-12 p-6 bg-primary/10 rounded-lg border border-primary/20">
            <h3 className="font-semibold mb-2">Thank You</h3>
            <p className="text-sm text-muted-foreground">
              Thank you for taking the time to read our Terms of Service. We've tried to make them as 
              clear and fair as possible. If you have any questions or concerns, please don't hesitate 
              to contact us.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}