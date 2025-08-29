import { Helmet } from 'react-helmet-async';
import Home from './Home';

export default function ScanFromPDF() {
  return (
    <>
      <Helmet>
        <title>Scan QR Codes from PDF — All Pages, Private & Fast | PrivyQR</title>
        <meta name="description" content="Extract all QR codes from PDF documents. Scan multiple pages at once. 100% private browser-based processing with no server uploads." />
        <meta name="keywords" content="scan QR code from PDF, PDF QR scanner, extract QR from PDF, multi-page QR scanner, private PDF scanner" />
        <link rel="canonical" href="https://privyqr.com/scan-from-pdf" />
      </Helmet>
      <Home />
    </>
  );
}