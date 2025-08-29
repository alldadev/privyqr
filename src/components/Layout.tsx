import { Link } from 'wouter';
import { QrCode, Menu, X, Shield, Zap, FileSearch } from 'lucide-react';
import { useState } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <a className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center shadow-md">
                  <QrCode className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">
                  Privy<span className="text-purple-600">QR</span>
                </span>
              </a>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/">
                <a className="text-sm font-medium hover:text-purple-600 transition-colors">Home</a>
              </Link>
              <Link href="/about">
                <a className="text-sm font-medium hover:text-purple-600 transition-colors">About</a>
              </Link>
              <Link href="/faq">
                <a className="text-sm font-medium hover:text-purple-600 transition-colors">FAQ</a>
              </Link>
              <Link href="/blog">
                <a className="text-sm font-medium hover:text-purple-600 transition-colors">Blog</a>
              </Link>
              <Link href="/contact">
                <a className="text-sm font-medium hover:text-purple-600 transition-colors">Contact</a>
              </Link>
            </nav>

            {/* Desktop Quick Links */}
            <div className="hidden md:flex items-center gap-4">
              <Link href="/scan-from-image">
                <a className="text-sm text-purple-600 hover:text-purple-700 font-medium">
                  Scan from Image
                </a>
              </Link>
              <Link href="/scan-from-screenshot">
                <a className="text-sm text-purple-600 hover:text-purple-700 font-medium">
                  Screenshot Scanner
                </a>
              </Link>
              <Link href="/scan-from-pdf">
                <a className="text-sm text-purple-600 hover:text-purple-700 font-medium">
                  PDF Scanner
                </a>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 space-y-2">
              <Link href="/">
                <a className="block py-2 text-sm hover:text-purple-600 transition-colors">Home</a>
              </Link>
              <Link href="/about">
                <a className="block py-2 text-sm hover:text-purple-600 transition-colors">About</a>
              </Link>
              <Link href="/faq">
                <a className="block py-2 text-sm hover:text-purple-600 transition-colors">FAQ</a>
              </Link>
              <Link href="/blog">
                <a className="block py-2 text-sm hover:text-purple-600 transition-colors">Blog</a>
              </Link>
              <Link href="/contact">
                <a className="block py-2 text-sm hover:text-purple-600 transition-colors">Contact</a>
              </Link>
              <div className="border-t pt-2 mt-2">
                <Link href="/scan-from-image">
                  <a className="block py-2 text-sm text-purple-600 hover:text-purple-700">Scan from Image</a>
                </Link>
                <Link href="/scan-from-screenshot">
                  <a className="block py-2 text-sm text-purple-600 hover:text-purple-700">Screenshot Scanner</a>
                </Link>
                <Link href="/scan-from-pdf">
                  <a className="block py-2 text-sm text-purple-600 hover:text-purple-700">PDF Scanner</a>
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t bg-muted/50 mt-auto">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {/* Product */}
            <div>
              <h3 className="font-semibold mb-4 text-purple-600">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/">
                    <a className="text-sm text-muted-foreground hover:text-purple-600 transition-colors">
                      QR Scanner
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/scan-from-image">
                    <a className="text-sm text-muted-foreground hover:text-purple-600 transition-colors">
                      Scan from Image
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/scan-from-screenshot">
                    <a className="text-sm text-muted-foreground hover:text-purple-600 transition-colors">
                      Screenshot Scanner
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/scan-from-pdf">
                    <a className="text-sm text-muted-foreground hover:text-purple-600 transition-colors">
                      PDF Scanner
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold mb-4 text-purple-600">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog">
                    <a className="text-sm text-muted-foreground hover:text-purple-600 transition-colors">
                      Blog
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/faq">
                    <a className="text-sm text-muted-foreground hover:text-purple-600 transition-colors">
                      FAQ
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/how-to">
                    <a className="text-sm text-muted-foreground hover:text-purple-600 transition-colors">
                      Tutorials
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/use-cases">
                    <a className="text-sm text-muted-foreground hover:text-purple-600 transition-colors">
                      Use Cases
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold mb-4 text-purple-600">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about">
                    <a className="text-sm text-muted-foreground hover:text-purple-600 transition-colors">
                      About Us
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a className="text-sm text-muted-foreground hover:text-purple-600 transition-colors">
                      Contact
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/privacy">
                    <a className="text-sm text-muted-foreground hover:text-purple-600 transition-colors">
                      Privacy Policy
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/terms">
                    <a className="text-sm text-muted-foreground hover:text-purple-600 transition-colors">
                      Terms of Service
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Compare */}
            <div>
              <h3 className="font-semibold mb-4 text-purple-600">Compare</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/vs-qr-reader">
                    <a className="text-sm text-muted-foreground hover:text-purple-600 transition-colors">
                      vs QR Code Reader
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/vs-google-lens">
                    <a className="text-sm text-muted-foreground hover:text-purple-600 transition-colors">
                      vs Google Lens
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/vs-mobile-apps">
                    <a className="text-sm text-muted-foreground hover:text-purple-600 transition-colors">
                      vs Mobile Apps
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/best-qr-scanner">
                    <a className="text-sm text-muted-foreground hover:text-purple-600 transition-colors">
                      Best QR Scanner 2025
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Features Grid */}
          <div className="border-t border-b py-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <Shield className="w-10 h-10 text-purple-600" />
                <div>
                  <h4 className="font-semibold">100% Private</h4>
                  <p className="text-sm text-muted-foreground">No data leaves your browser</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-10 h-10 text-purple-600" />
                <div>
                  <h4 className="font-semibold">Lightning Fast</h4>
                  <p className="text-sm text-muted-foreground">Instant QR code scanning</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FileSearch className="w-10 h-10 text-purple-600" />
                <div>
                  <h4 className="font-semibold">Multiple Formats</h4>
                  <p className="text-sm text-muted-foreground">Images, PDFs, screenshots</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 PrivyQR. All rights reserved. Made with ❤️ for privacy.</p>
            <p className="mt-2">
              100% client-side processing. Your data never leaves your device.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}