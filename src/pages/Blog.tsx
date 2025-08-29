import { Helmet } from 'react-helmet-async';
import { Link } from 'wouter';
import { Calendar, ArrowRight, Shield, Smartphone, FileText, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const blogPosts = [
  {
    id: 1,
    title: "QR Code Security: What You Need to Know in 2025",
    excerpt: "Understanding QR code security risks and how to protect yourself from malicious codes. Learn about URL shorteners, phishing attempts, and safe scanning practices.",
    date: "2025-01-15",
    slug: "qr-code-security-guide",
    icon: Shield,
    category: "Security"
  },
  {
    id: 2,
    title: "How to Scan QR Codes from Screenshots on Any Device",
    excerpt: "Complete guide to scanning QR codes from screenshots on iPhone, Android, Windows, and Mac. No apps needed - use PrivyQR directly in your browser.",
    date: "2025-01-12",
    slug: "scan-qr-from-screenshot",
    icon: Smartphone,
    category: "Tutorial"
  },
  {
    id: 3,
    title: "Extract QR Codes from PDF Documents: Complete Guide",
    excerpt: "Learn how to scan multiple QR codes from PDF files, including multi-page documents. Perfect for tickets, invoices, and digital documents.",
    date: "2025-01-10",
    slug: "extract-qr-from-pdf",
    icon: FileText,
    category: "Tutorial"
  },
  {
    id: 4,
    title: "WiFi QR Codes: Share Your Network Securely",
    excerpt: "How to create and scan WiFi QR codes. Share your network password securely without typing. Works with WPA, WPA2, and hidden networks.",
    date: "2025-01-08",
    slug: "wifi-qr-codes-guide",
    icon: Zap,
    category: "How-To"
  },
  {
    id: 5,
    title: "QR Codes vs Barcodes: Understanding the Difference",
    excerpt: "Detailed comparison of QR codes and traditional barcodes. Learn about capacity, error correction, and use cases for each format.",
    date: "2025-01-05",
    slug: "qr-codes-vs-barcodes",
    icon: Shield,
    category: "Education"
  },
  {
    id: 6,
    title: "Privacy-First QR Scanning: Why It Matters",
    excerpt: "Discover why browser-based QR scanning protects your privacy better than apps. No permissions, no tracking, no data collection.",
    date: "2025-01-03",
    slug: "privacy-first-qr-scanning",
    icon: Shield,
    category: "Privacy"
  },
  {
    id: 7,
    title: "Business Card QR Codes: The Complete vCard Guide",
    excerpt: "How to create and scan vCard QR codes for instant contact sharing. Perfect for networking events and digital business cards.",
    date: "2024-12-28",
    slug: "vcard-qr-codes-guide",
    icon: Smartphone,
    category: "Business"
  },
  {
    id: 8,
    title: "QR Code Best Practices for Businesses",
    excerpt: "Essential tips for businesses using QR codes. Learn about sizing, placement, testing, and tracking for maximum engagement.",
    date: "2024-12-25",
    slug: "qr-code-business-best-practices",
    icon: Zap,
    category: "Business"
  },
  {
    id: 9,
    title: "How to Verify Suspicious QR Codes Before Scanning",
    excerpt: "Learn how to identify potentially malicious QR codes and verify URLs before visiting them. Essential security tips for safe scanning.",
    date: "2024-12-22",
    slug: "verify-suspicious-qr-codes",
    icon: Shield,
    category: "Security"
  },
  {
    id: 10,
    title: "The History and Future of QR Codes",
    excerpt: "From Japanese automotive parts to global adoption - the fascinating evolution of QR codes and what's coming next.",
    date: "2024-12-20",
    slug: "history-future-qr-codes",
    icon: FileText,
    category: "Education"
  }
];

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>QR Code Blog - Tips, Security & Guides | PrivyQR</title>
        <meta name="description" content="Learn about QR code security, scanning tips, and best practices. Expert guides on WiFi QR codes, vCards, PDF scanning, and privacy-focused solutions." />
        <link rel="canonical" href="https://privyqr.com/blog" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
        {/* Header */}
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/">
                <a className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-2xl font-bold gradient-text">PrivyQR</span>
                </a>
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <Link href="/">
                  <a className="text-sm hover:text-primary transition-colors">Home</a>
                </Link>
                <Link href="/blog">
                  <a className="text-sm text-primary font-medium">Blog</a>
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              QR Code <span className="gradient-text">Knowledge Hub</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert guides on QR code scanning, security, and best practices. 
              Learn how to use QR codes safely and effectively.
            </p>
          </div>

          {/* Featured Post */}
          <Card className="mb-8 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardHeader>
              <div className="flex items-center gap-2 text-primary mb-2">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium">Featured</span>
              </div>
              <CardTitle className="text-2xl">
                <Link href={`/blog/${blogPosts[0].slug}`}>
                  <a className="hover:text-primary transition-colors">
                    {blogPosts[0].title}
                  </a>
                </Link>
              </CardTitle>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                <Calendar className="w-4 h-4" />
                <time>{new Date(blogPosts[0].date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</time>
                <span className="mx-2">•</span>
                <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs">
                  {blogPosts[0].category}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {blogPosts[0].excerpt}
              </p>
              <Link href={`/blog/${blogPosts[0].slug}`}>
                <a className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all">
                  Read more <ArrowRight className="w-4 h-4" />
                </a>
              </Link>
            </CardContent>
          </Card>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post) => {
              const Icon = post.icon;
              return (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Icon className="w-5 h-5 text-primary" />
                      <span className="text-xs bg-secondary px-2 py-1 rounded-md">
                        {post.category}
                      </span>
                    </div>
                    <CardTitle className="text-lg">
                      <Link href={`/blog/${post.slug}`}>
                        <a className="hover:text-primary transition-colors">
                          {post.title}
                        </a>
                      </Link>
                    </CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <time>{new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}</time>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Link href={`/blog/${post.slug}`}>
                      <a className="inline-flex items-center gap-1 text-sm text-primary hover:gap-2 transition-all">
                        Read more <ArrowRight className="w-3 h-3" />
                      </a>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="container mx-auto px-4 py-16 border-t">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-6">
              Get the latest QR code security tips and scanning guides delivered to your inbox.
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border rounded-lg bg-background"
              />
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t bg-muted/50">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center text-sm text-muted-foreground">
              <p>© 2024 PrivyQR. All QR code scanning happens in your browser.</p>
              <p className="mt-2">
                <Link href="/">
                  <a className="hover:text-primary">Home</a>
                </Link>
                {' • '}
                <Link href="/blog">
                  <a className="hover:text-primary">Blog</a>
                </Link>
                {' • '}
                <Link href="/scan-from-image">
                  <a className="hover:text-primary">Scan from Image</a>
                </Link>
                {' • '}
                <Link href="/scan-from-pdf">
                  <a className="hover:text-primary">PDF Scanner</a>
                </Link>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}