import { Helmet } from 'react-helmet-async';
import { Link } from 'wouter';
import { Briefcase, ArrowLeft, Users, Mail, Phone, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';

export default function QRCodeBusinessCards() {
  return (
    <Layout>
      <Helmet>
        <title>Digital Business Cards with QR Codes: The Complete Guide | PrivyQR</title>
        <meta name="description" content="Transform networking with QR code business cards. Share contact info instantly, track connections, and go paperless. Perfect for professionals and businesses." />
        <link rel="canonical" href="https://privyqr.com/blog/qr-code-business-cards" />
      </Helmet>

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Image */}
        <img 
          src="/blog-images/hero-business-cards.jpg" 
          alt="Professional networking scene with digital business card QR code being scanned, modern office environment"
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
            <Briefcase className="w-5 h-5" />
            <span className="text-sm font-medium">Professional</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Digital Business Cards with QR Codes: The Complete Guide
          </h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            <time>January 15, 2025</time>
            <span>•</span>
            <span>8 min read</span>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="lead text-xl text-muted-foreground">
            Say goodbye to stacks of paper business cards. QR code business cards revolutionize 
            professional networking with instant contact sharing, real-time updates, and analytics. 
            Perfect for the modern professional.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Why Digital Business Cards?</h2>
          <p>
            Traditional business cards have served professionals well for decades, but they come 
            with limitations: they're easily lost, quickly outdated, and environmentally wasteful. 
            QR code business cards solve all these problems while adding powerful new capabilities.
          </p>

          <Card className="my-6 border-blue-500/20 bg-blue-50 dark:bg-blue-900/10">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Benefits Over Traditional Cards</h3>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div>
                  <strong>Digital Advantages:</strong>
                  <ul className="mt-1 space-y-1">
                    <li>• Update info without reprinting</li>
                    <li>• Include multimedia content</li>
                    <li>• Track engagement analytics</li>
                    <li>• Unlimited sharing</li>
                  </ul>
                </div>
                <div>
                  <strong>Professional Benefits:</strong>
                  <ul className="mt-1 space-y-1">
                    <li>• Always have your card ready</li>
                    <li>• Share via screen or print</li>
                    <li>• Eco-friendly networking</li>
                    <li>• Stand out from competition</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold mt-8 mb-4">What to Include in Your QR Business Card</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Essential Information</h3>
          <ul className="space-y-2 my-3">
            <li>• <strong>Full Name</strong>: Professional name as you want to be addressed</li>
            <li>• <strong>Job Title</strong>: Current position and department</li>
            <li>• <strong>Company</strong>: Organization name and logo</li>
            <li>• <strong>Phone</strong>: Direct business line or mobile</li>
            <li>• <strong>Email</strong>: Professional email address</li>
            <li>• <strong>Website</strong>: Company or personal portfolio</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Advanced Content</h3>
          <ul className="space-y-2 my-3">
            <li>• <strong>LinkedIn Profile</strong>: Direct link to professional network</li>
            <li>• <strong>Calendar Link</strong>: Allow instant meeting scheduling</li>
            <li>• <strong>Portfolio</strong>: Showcase your work samples</li>
            <li>• <strong>Video Introduction</strong>: Personal greeting or pitch</li>
            <li>• <strong>Social Media</strong>: Professional accounts only</li>
            <li>• <strong>Location</strong>: Office address or service area</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Creating Your QR Business Card</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Method 1: vCard Format</h3>
          <p>
            The vCard format is universally supported and automatically adds contacts to phones:
          </p>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto my-4">
            <code>{`BEGIN:VCARD
VERSION:3.0
FN:John Smith
ORG:ABC Corporation
TEL:+1-555-0123
EMAIL:john@abc.com
URL:https://abc.com
END:VCARD`}</code>
          </pre>

          <h3 className="text-xl font-semibold mt-6 mb-3">Method 2: Dynamic QR Codes</h3>
          <p>
            Use a service that creates updateable QR codes linking to a digital business card:
          </p>
          <ul className="space-y-2 my-3">
            <li>• Update information without changing the QR code</li>
            <li>• Track scans and engagement metrics</li>
            <li>• A/B test different card designs</li>
            <li>• Add interactive elements like forms</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Method 3: Landing Page</h3>
          <p>
            Create a personal landing page with all your professional information:
          </p>
          <ul className="space-y-2 my-3">
            <li>• Full control over design and content</li>
            <li>• Include portfolio and testimonials</li>
            <li>• Integrate scheduling and contact forms</li>
            <li>• SEO benefits for personal branding</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Design Best Practices</h2>

          <div className="grid md:grid-cols-2 gap-4 my-6">
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">Physical Card Design</h4>
                <ul className="text-sm space-y-2">
                  <li>• Place QR code prominently (1 inch minimum)</li>
                  <li>• Include call-to-action ("Scan for contact")</li>
                  <li>• Maintain brand consistency</li>
                  <li>• Test scanning before printing</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">Digital Display</h4>
                <ul className="text-sm space-y-2">
                  <li>• Save QR code to phone for quick sharing</li>
                  <li>• Add to email signature</li>
                  <li>• Include in presentations</li>
                  <li>• Display on conference badges</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Industry-Specific Applications</h2>

          <h3 className="text-lg font-semibold mt-4 mb-2">Real Estate Agents</h3>
          <ul className="space-y-2 my-2">
            <li>• Include property listings and virtual tours</li>
            <li>• Add mortgage calculator links</li>
            <li>• Integrate scheduling for viewings</li>
            <li>• Showcase client testimonials</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-2">Consultants & Freelancers</h3>
          <ul className="space-y-2 my-2">
            <li>• Link to portfolio and case studies</li>
            <li>• Include service packages and pricing</li>
            <li>• Add booking calendar for consultations</li>
            <li>• Integrate payment options</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-2">Sales Professionals</h3>
          <ul className="space-y-2 my-2">
            <li>• Product catalogs and demos</li>
            <li>• Instant quote generators</li>
            <li>• CRM integration for lead capture</li>
            <li>• Follow-up automation triggers</li>
          </ul>

          <Card className="my-6 border-green-500/20 bg-green-50 dark:bg-green-900/10">
            <CardContent className="pt-6">
              <div className="flex gap-3">
                <Users className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Networking Tips</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Practice your QR code pitch - explain the benefits quickly</li>
                    <li>• Offer to scan their traditional card in return</li>
                    <li>• Follow up within 24-48 hours while connection is fresh</li>
                    <li>• Use analytics to prioritize high-engagement contacts</li>
                    <li>• Keep both digital and physical cards for flexibility</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold mt-8 mb-4">Analytics and Tracking</h2>
          
          <p>
            Dynamic QR codes provide valuable insights into your networking effectiveness:
          </p>
          <ul className="space-y-2 my-3">
            <li>• <strong>Scan Count</strong>: Track total and unique scans</li>
            <li>• <strong>Location Data</strong>: See where connections are made</li>
            <li>• <strong>Time Analytics</strong>: Identify peak engagement periods</li>
            <li>• <strong>Device Types</strong>: Understand how contacts access your info</li>
            <li>• <strong>Conversion Tracking</strong>: Measure follow-through actions</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Privacy and Security</h2>
          
          <ul className="space-y-3 my-4">
            <li>
              <strong>Control Your Information:</strong> Only share professional details, 
              avoid personal addresses or private phone numbers.
            </li>
            <li>
              <strong>Use Professional Platforms:</strong> Stick to business-focused 
              platforms and avoid linking personal social media.
            </li>
            <li>
              <strong>Regular Updates:</strong> Review and update your digital card 
              regularly, removing outdated information.
            </li>
            <li>
              <strong>Secure Hosting:</strong> If using a landing page, ensure it's 
              hosted securely with HTTPS.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Future of Digital Business Cards</h2>
          
          <p>
            The evolution of digital business cards continues with emerging technologies:
          </p>
          <ul className="space-y-2 my-3">
            <li>• <strong>NFC Integration</strong>: Tap-to-share without scanning</li>
            <li>• <strong>AR Business Cards</strong>: Interactive 3D experiences</li>
            <li>• <strong>Blockchain Verification</strong>: Authenticated credentials</li>
            <li>• <strong>AI Networking</strong>: Smart connection recommendations</li>
            <li>• <strong>Virtual Reality Meetings</strong>: Instant VR room access</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
          <p>
            QR code business cards represent the future of professional networking. They're 
            eco-friendly, always up-to-date, and provide powerful analytics that traditional 
            cards can't match. Whether you're a seasoned executive or just starting your career, 
            adopting digital business cards puts you ahead of the curve. Start creating your 
            QR business card today and transform how you connect professionally.
          </p>
        </div>
      </article>
    </Layout>
  );
}