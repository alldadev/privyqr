// Google Analytics Configuration for PrivyQR
export const GA_CONFIG = {
  // Replace with your actual GA4 Measurement ID when ready
  measurementId: 'G-XXXXXXXXXX', // TODO: Add your GA4 ID here
  
  // Privacy-friendly configuration
  settings: {
    // Don't send data if Do Not Track is enabled
    respectDoNotTrack: true,
    
    // Anonymize IP addresses
    anonymizeIp: true,
    
    // Disable advertising features by default
    allowAdFeatures: false,
    
    // Debug mode in development
    debug: import.meta.env.DEV
  }
};

// Initialize Google Analytics
export function initializeAnalytics() {
  if (typeof window === 'undefined') return;
  
  // Skip if no measurement ID configured
  if (GA_CONFIG.measurementId === 'G-XXXXXXXXXX') {
    console.log('Google Analytics not configured. Add your GA4 ID to analytics.ts');
    return;
  }
  
  // Check for Do Not Track
  if (GA_CONFIG.settings.respectDoNotTrack && navigator.doNotTrack === '1') {
    console.log('Google Analytics disabled - Do Not Track enabled');
    return;
  }
  
  // Load Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_CONFIG.measurementId}`;
  document.head.appendChild(script);
  
  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  window.gtag = gtag;
  
  gtag('js', new Date());
  gtag('config', GA_CONFIG.measurementId, {
    anonymize_ip: GA_CONFIG.settings.anonymizeIp,
    allow_ad_personalization_signals: GA_CONFIG.settings.allowAdFeatures
  });
}

// Track custom events
export function trackEvent(eventName: string, parameters?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
}

// Track page views (for SPA)
export function trackPageView(pagePath: string, pageTitle?: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_title: pageTitle || document.title
    });
  }
}

// Track QR code scans
export function trackQRScan(source: 'camera' | 'image' | 'pdf' | 'screenshot', success: boolean) {
  trackEvent('qr_scan', {
    scan_source: source,
    scan_success: success,
    event_category: 'engagement',
    event_label: `qr_scan_${source}`
  });
}

// Track QR code types
export function trackQRType(type: string) {
  trackEvent('qr_type_detected', {
    qr_type: type,
    event_category: 'engagement',
    event_label: `qr_type_${type}`
  });
}

// Track batch processing
export function trackBatchProcess(fileCount: number, successCount: number) {
  trackEvent('batch_process', {
    file_count: fileCount,
    success_count: successCount,
    success_rate: Math.round((successCount / fileCount) * 100),
    event_category: 'engagement',
    event_label: 'batch_qr_scan'
  });
}

// Track feature usage
export function trackFeatureUse(feature: string) {
  trackEvent('feature_use', {
    feature_name: feature,
    event_category: 'engagement',
    event_label: `feature_${feature}`
  });
}

// Declare gtag on window
declare global {
  interface Window {
    gtag: any;
    dataLayer: any[];
  }
}