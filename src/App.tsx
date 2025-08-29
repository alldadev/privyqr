import { Switch, Route } from "wouter";
import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import Home from "@/pages/Home";

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

function App() {
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
          </Switch>
        </Suspense>
      </div>
    </HelmetProvider>
  );
}

export default App;