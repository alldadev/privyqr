import { Helmet } from 'react-helmet-async';
import { Link } from 'wouter';
import { Wifi, ArrowLeft, Lock, Users, Coffee, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';

export default function WiFiQRCodesGuide() {
  return (
    <Layout>
      <Helmet>
        <title>WiFi QR Codes: Share Your Network Securely | PrivyQR</title>
        <meta name="description" content="How to create and scan WiFi QR codes. Share your network password securely without typing. Works with WPA, WPA2, and hidden networks." />
        <link rel="canonical" href="https://privyqr.com/blog/wifi-qr-codes-guide" />
      </Helmet>

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Image */}
        <img 
          src="/blog-images/hero-wifi-qr.jpg" 
          alt="Modern coffee shop with WiFi QR code on table, customers connecting instantly with smartphones"
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
            <Wifi className="w-5 h-5" />
            <span className="text-sm font-medium">How-To</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            WiFi QR Codes: Share Your Network Securely
          </h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            <time>January 8, 2025</time>
            <span>•</span>
            <span>7 min read</span>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="lead text-xl text-muted-foreground">
            Stop spelling out complex WiFi passwords! Learn how to create and scan WiFi QR codes 
            that let guests connect instantly. Perfect for homes, offices, cafes, and events.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">What Are WiFi QR Codes?</h2>
          <p>
            WiFi QR codes contain your network credentials in a format that smartphones can 
            automatically read and connect to. When scanned, devices join your WiFi network 
            without typing passwords - it's instant, secure, and convenient.
          </p>

          <Card className="my-6 border-blue-500/20 bg-blue-50 dark:bg-blue-900/10">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Benefits of WiFi QR Codes</h3>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <ul className="space-y-2">
                  <li>✅ No typing complex passwords</li>
                  <li>✅ Instant connection for guests</li>
                  <li>✅ Works with all modern smartphones</li>
                </ul>
                <ul className="space-y-2">
                  <li>✅ More secure than written passwords</li>
                  <li>✅ Perfect for businesses and events</li>
                  <li>✅ Supports all WiFi security types</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold mt-8 mb-4">How WiFi QR Codes Work</h2>
          <p>
            WiFi QR codes use a standardized format that encodes your network information:
          </p>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto my-4">
            <code>WIFI:T:WPA;S:NetworkName;P:YourPassword;H:false;;</code>
          </pre>
          <p>Where:</p>
          <ul className="space-y-2 my-3">
            <li>• <strong>T:</strong> Security type (WPA/WPA2/WEP/nopass)</li>
            <li>• <strong>S:</strong> Network name (SSID)</li>
            <li>• <strong>P:</strong> Password</li>
            <li>• <strong>H:</strong> Hidden network (true/false)</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Creating WiFi QR Codes</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Method 1: Using Your Router</h3>
          <p>
            Many modern routers can generate WiFi QR codes directly:
          </p>
          <ol className="space-y-2 my-3">
            <li>1. Access your router's admin panel (usually 192.168.1.1)</li>
            <li>2. Look for "Guest Network" or "QR Code" options</li>
            <li>3. Generate and print the QR code</li>
          </ol>

          <h3 className="text-xl font-semibold mt-6 mb-3">Method 2: Online Generators</h3>
          <p>
            For privacy, use client-side generators that don't upload your password:
          </p>
          <ul className="space-y-2 my-3">
            <li>• Ensure the tool works offline</li>
            <li>• Verify no data is sent to servers</li>
            <li>• Use HTTPS websites only</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Method 3: Built-in Phone Features</h3>
          <div className="space-y-4 my-4">
            <div>
              <strong>Android (10+):</strong>
              <ol className="mt-2 ml-4 space-y-1">
                <li>1. Go to Settings → Network & Internet → WiFi</li>
                <li>2. Tap your connected network</li>
                <li>3. Tap "Share" and authenticate</li>
                <li>4. QR code appears for sharing</li>
              </ol>
            </div>
            <div>
              <strong>iPhone (iOS 11+):</strong>
              <ol className="mt-2 ml-4 space-y-1">
                <li>1. Use Shortcuts app</li>
                <li>2. Create shortcut with "Generate QR Code" action</li>
                <li>3. Input your WiFi details</li>
                <li>4. Save and share the QR code</li>
              </ol>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Scanning WiFi QR Codes with PrivyQR</h2>
          
          <p>
            PrivyQR not only scans WiFi QR codes but also displays the network details clearly:
          </p>
          <ol className="space-y-3 my-4">
            <li>
              <strong>1. Scan the Code:</strong> Upload an image or use your camera at privyqr.com
            </li>
            <li>
              <strong>2. View Details:</strong> See network name, security type, and password
            </li>
            <li>
              <strong>3. Connect:</strong> Use the decoded information to connect manually, or let your device auto-connect
            </li>
          </ol>

          <Card className="my-6 border-green-500/20 bg-green-50 dark:bg-green-900/10">
            <CardContent className="pt-6">
              <div className="flex gap-3">
                <Shield className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Security Best Practices</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Create separate guest networks with QR codes</li>
                    <li>• Regularly update WiFi passwords and QR codes</li>
                    <li>• Use WPA3 security when available</li>
                    <li>• Limit QR code distribution to trusted individuals</li>
                    <li>• Consider time-limited guest access</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold mt-8 mb-4">Use Cases and Ideas</h2>

          <div className="grid md:grid-cols-2 gap-4 my-6">
            <Card>
              <CardContent className="pt-6">
                <Coffee className="w-8 h-8 text-primary mb-2" />
                <h4 className="font-semibold mb-2">Cafes & Restaurants</h4>
                <p className="text-sm text-muted-foreground">
                  Display WiFi QR codes on tables, menus, or walls. Customers connect instantly 
                  without asking staff for passwords.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Users className="w-8 h-8 text-primary mb-2" />
                <h4 className="font-semibold mb-2">Events & Conferences</h4>
                <p className="text-sm text-muted-foreground">
                  Include WiFi QR codes on badges, programs, or signage. Attendees stay connected 
                  without network congestion at registration.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Lock className="w-8 h-8 text-primary mb-2" />
                <h4 className="font-semibold mb-2">Offices & Coworking</h4>
                <p className="text-sm text-muted-foreground">
                  Provide guest network access via QR codes in meeting rooms and reception areas 
                  while keeping main network secure.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Wifi className="w-8 h-8 text-primary mb-2" />
                <h4 className="font-semibold mb-2">Vacation Rentals</h4>
                <p className="text-sm text-muted-foreground">
                  Leave WiFi QR codes in welcome guides. Guests connect immediately upon arrival 
                  without searching for passwords.
                </p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Creative Display Ideas</h2>
          
          <ul className="space-y-3 my-4">
            <li>
              <strong>Picture Frames:</strong> Print and frame WiFi QR codes as modern art pieces 
              that serve a purpose.
            </li>
            <li>
              <strong>Coasters:</strong> Custom coasters with WiFi QR codes for cafes and bars.
            </li>
            <li>
              <strong>Wall Decals:</strong> Stylish wall stickers that blend with your decor.
            </li>
            <li>
              <strong>Table Tents:</strong> Standing cards for restaurants and waiting areas.
            </li>
            <li>
              <strong>Door Signs:</strong> Welcome signs with WiFi access for guests.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Troubleshooting Common Issues</h2>

          <h3 className="text-lg font-semibold mt-4 mb-2">QR Code Not Working?</h3>
          <ul className="space-y-2 my-2">
            <li>• Verify the network name and password are correct</li>
            <li>• Check if the network is currently active</li>
            <li>• Ensure the security type matches your router settings</li>
            <li>• For hidden networks, set H:true in the QR code</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-2">Device Won't Auto-Connect?</h3>
          <ul className="space-y-2 my-2">
            <li>• Some older devices require manual connection</li>
            <li>• iOS devices need camera app or QR scanner</li>
            <li>• Android needs Google Lens or camera app</li>
            <li>• Use PrivyQR to decode and connect manually</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Advanced Tips</h2>
          
          <h3 className="text-lg font-semibold mt-4 mb-2">Multiple Networks</h3>
          <p>
            Create different QR codes for different user groups:
          </p>
          <ul className="space-y-2 my-3">
            <li>• Staff network with full access</li>
            <li>• Guest network with limited bandwidth</li>
            <li>• IoT network for smart devices</li>
            <li>• Kids network with content filtering</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4 mb-2">Dynamic QR Codes</h3>
          <p>
            For businesses, consider dynamic QR codes that can be updated:
          </p>
          <ul className="space-y-2 my-3">
            <li>• Change passwords without reprinting codes</li>
            <li>• Track usage analytics</li>
            <li>• Set expiration dates</li>
            <li>• Redirect to captive portals</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
          <p>
            WiFi QR codes transform the guest connection experience from frustrating password 
            exchanges to instant, seamless access. Whether you're running a business, hosting 
            events, or just making life easier for house guests, WiFi QR codes are a simple 
            solution with powerful benefits. Use PrivyQR to scan and verify any WiFi QR code 
            securely, ensuring your network credentials stay private.
          </p>
        </div>
      </article>
    </Layout>
  );
}