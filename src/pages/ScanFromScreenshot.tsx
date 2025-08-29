import { Helmet } from 'react-helmet-async';
import Home from './Home';

export default function ScanFromScreenshot() {
  return (
    <>
      <Helmet>
        <title>Scan QR Code from Screenshot — Instant & Private | PrivyQR</title>
        <meta name="description" content="Paste screenshots directly to scan QR codes. Works with clipboard paste (Ctrl+V). Private browser-based scanning with no data uploads." />
        <meta name="keywords" content="scan QR code from screenshot, screenshot QR scanner, paste QR code, clipboard QR reader, private QR scanner" />
        <link rel="canonical" href="https://privyqr.com/scan-from-screenshot" />
      </Helmet>
      <Home />
    </>
  );
}