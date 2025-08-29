import { Switch, Route } from "wouter";
import { lazy, Suspense, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { useLocation } from "wouter";
import Home from "@/pages/Home";
import { initializeAnalytics, trackPageView } from "@/config/analytics";

// Lazy load non-critical pages
const ScanFromImage = lazy(() => import("@/pages/ScanFromImage"));
const ScanFromScreenshot = lazy(() => import("@/pages/ScanFromScreenshot"));
const ScanFromPDF = lazy(() => import("@/pages/ScanFromPDF"));
const Blog = lazy(() => import("@/pages/Blog"));
const About = lazy(() => import("@/pages/About"));
const FAQ = lazy(() => import("@/pages/FAQ"));
const Contact = lazy(() => import("@/pages/Contact"));
const Privacy = lazy(() => import("@/pages/Privacy"));
const Terms = lazy(() => import("@/pages/Terms"));
const QRCodeSecurityGuide = lazy(() => import("@/pages/blog-posts/QRCodeSecurityGuide"));
const ScanQRFromScreenshot = lazy(() => import("@/pages/blog-posts/ScanQRFromScreenshot"));
const ExtractQRFromPDF = lazy(() => import("@/pages/blog-posts/ExtractQRFromPDF"));
const WiFiQRCodesGuide = lazy(() => import("@/pages/blog-posts/WiFiQRCodesGuide"));
const QRCodeBusinessCards = lazy(() => import("@/pages/blog-posts/QRCodeBusinessCards"));
const EventQRCodes = lazy(() => import("@/pages/blog-posts/EventQRCodes"));
const RestaurantMenuQRCodes = lazy(() => import("@/pages/blog-posts/RestaurantMenuQRCodes"));
const QRCodesInEducation = lazy(() => import("@/pages/blog-posts/QRCodesInEducation"));

function App() {
  const [location] = useLocation();
  
  // Initialize Google Analytics on mount
  useEffect(() => {
    initializeAnalytics();
  }, []);
  
  // Track page views on route change
  useEffect(() => {
    trackPageView(location);
  }, [location]);
  
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-background">
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/scan-from-image" component={ScanFromImage} />
            <Route path="/scan-from-screenshot" component={ScanFromScreenshot} />
            <Route path="/scan-from-pdf" component={ScanFromPDF} />
            <Route path="/about" component={About} />
            <Route path="/faq" component={FAQ} />
            <Route path="/contact" component={Contact} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/terms" component={Terms} />
            <Route path="/blog" component={Blog} />
            <Route path="/blog/qr-code-security-guide" component={QRCodeSecurityGuide} />
            <Route path="/blog/scan-qr-from-screenshot" component={ScanQRFromScreenshot} />
            <Route path="/blog/extract-qr-from-pdf" component={ExtractQRFromPDF} />
            <Route path="/blog/wifi-qr-codes-guide" component={WiFiQRCodesGuide} />
            <Route path="/blog/qr-code-business-cards" component={QRCodeBusinessCards} />
            <Route path="/blog/event-qr-codes" component={EventQRCodes} />
            <Route path="/blog/restaurant-menu-qr-codes" component={RestaurantMenuQRCodes} />
            <Route path="/blog/qr-codes-in-education" component={QRCodesInEducation} />
          </Switch>
        </Suspense>
      </div>
    </HelmetProvider>
  );
}

export default App;