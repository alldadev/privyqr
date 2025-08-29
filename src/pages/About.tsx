import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import { Shield, Zap, Globe, Heart } from 'lucide-react';
import { Link } from 'wouter';

export default function About() {
  return (
    <Layout>
      <Helmet>
        <title>About PrivyQR - Privacy-First QR Code Scanner</title>
        <meta name="description" content="Learn about PrivyQR's mission to provide secure, private QR code scanning. 100% client-side processing, no data collection." />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">PrivyQR</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your privacy is not just a feature, it's our foundation.
          </p>
        </div>

        {/* Mission Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-card rounded-lg p-8 border">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-4">
              In a world where data privacy is increasingly rare, PrivyQR stands as a beacon of digital autonomy. 
              We believe that scanning a QR code shouldn't mean sacrificing your privacy. That's why we built a 
              QR scanner that processes everything locally in your browser - no uploads, no tracking, no compromises.
            </p>
            <p className="text-muted-foreground">
              Every line of code we write, every feature we add, is guided by a simple principle: 
              your data belongs to you, and only you.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">0</div>
            <p className="text-sm text-muted-foreground">Data Collected</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">100%</div>
            <p className="text-sm text-muted-foreground">Client-Side</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">∞</div>
            <p className="text-sm text-muted-foreground">Privacy Guaranteed</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
            <p className="text-sm text-muted-foreground">Always Available</p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-lg p-6 border text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Privacy First</h3>
              <p className="text-sm text-muted-foreground">
                Your data never leaves your device. All QR processing happens locally.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 border text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground">
                No server round-trips mean instant results. Scan and decode in milliseconds.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 border text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Universally Accessible</h3>
              <p className="text-sm text-muted-foreground">
                Works on any device with a modern browser. No app downloads required.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 border text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Forever Free</h3>
              <p className="text-sm text-muted-foreground">
                Core features will always be free. No hidden costs or premium gatekeeping.
              </p>
            </div>
          </div>
        </div>

        {/* Technology Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">The Technology</h2>
          <p className="text-center text-muted-foreground mb-6">
            PrivyQR leverages cutting-edge web technologies to deliver a secure, private scanning experience:
          </p>
          <div className="bg-card rounded-lg p-8 border">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <div>
                  <strong>WebAssembly:</strong> High-performance QR decoding in your browser
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <div>
                  <strong>Web Workers:</strong> Background processing without UI freezing
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <div>
                  <strong>FileReader API:</strong> Direct file access without uploads
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <div>
                  <strong>MediaDevices API:</strong> Secure camera access for live scanning
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <div>
                  <strong>PDF.js:</strong> Client-side PDF processing for embedded QR codes
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Have Questions?</h2>
          <p className="text-muted-foreground mb-6">
            We'd love to hear from you!
          </p>
          <Link href="/contact">
            <a className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Get in Touch
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}