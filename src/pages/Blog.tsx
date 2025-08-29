import { Helmet } from 'react-helmet-async';
import { Link } from 'wouter';
import { Calendar, ArrowRight, Shield, Smartphone, FileText, Wifi, Briefcase, Ticket, UtensilsCrossed, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';

const blogPosts = [
  {
    id: 1,
    title: "QR Code Security: What You Need to Know in 2025",
    excerpt: "Understanding QR code security risks and how to protect yourself from malicious codes. Learn about URL shorteners, phishing attempts, and safe scanning practices.",
    date: "2025-01-20",
    slug: "qr-code-security-guide",
    icon: Shield,
    category: "Security"
  },
  {
    id: 2,
    title: "QR Codes in Education: Transforming Modern Learning",
    excerpt: "Revolutionize education with QR codes. Create interactive lessons, streamline attendance, share resources instantly, and engage students.",
    date: "2025-01-18",
    slug: "qr-codes-in-education",
    icon: GraduationCap,
    category: "Education"
  },
  {
    id: 3,
    title: "Restaurant QR Code Menus: Complete Implementation Guide",
    excerpt: "Transform your restaurant with QR code menus. Reduce costs, update instantly, track popular items, and improve safety.",
    date: "2025-01-17",
    slug: "restaurant-menu-qr-codes",
    icon: UtensilsCrossed,
    category: "Restaurant"
  },
  {
    id: 4,
    title: "Event QR Codes: Streamline Check-ins and Boost Engagement",
    excerpt: "Transform event management with QR codes. Speed up check-ins, track attendance, engage attendees, and gather insights.",
    date: "2025-01-16",
    slug: "event-qr-codes",
    icon: Ticket,
    category: "Events"
  },
  {
    id: 5,
    title: "Digital Business Cards with QR Codes: The Complete Guide",
    excerpt: "Transform networking with QR code business cards. Share contact info instantly, track connections, and go paperless.",
    date: "2025-01-15",
    slug: "qr-code-business-cards",
    icon: Briefcase,
    category: "Professional"
  },
  {
    id: 6,
    title: "How to Scan QR Codes from Screenshots on Any Device",
    excerpt: "Complete guide to scanning QR codes from screenshots on iPhone, Android, Windows, and Mac. No apps needed - use PrivyQR directly in your browser.",
    date: "2025-01-12",
    slug: "scan-qr-from-screenshot",
    icon: Smartphone,
    category: "Tutorial"
  },
  {
    id: 7,
    title: "Extract QR Codes from PDF Documents: Complete Guide",
    excerpt: "Learn how to scan multiple QR codes from PDF files, including multi-page documents. Perfect for tickets, invoices, and digital documents.",
    date: "2025-01-10",
    slug: "extract-qr-from-pdf",
    icon: FileText,
    category: "Tutorial"
  },
  {
    id: 8,
    title: "WiFi QR Codes: Share Your Network Securely",
    excerpt: "How to create and scan WiFi QR codes. Share your network password securely without typing. Works with WPA, WPA2, and hidden networks.",
    date: "2025-01-08",
    slug: "wifi-qr-codes-guide",
    icon: Wifi,
    category: "How-To"
  }
];

export default function Blog() {
  return (
    <Layout>
      <Helmet>
        <title>QR Code Blog - Tips, Security & Guides | PrivyQR</title>
        <meta name="description" content="Learn about QR code security, scanning tips, and best practices. Expert guides on WiFi QR codes, vCards, PDF scanning, and privacy-focused solutions." />
        <link rel="canonical" href="https://privyqr.com/blog" />
      </Helmet>

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
    </Layout>
  );
}