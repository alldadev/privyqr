import { Helmet } from 'react-helmet-async';
import Home from './Home';

export default function ScanFromImage() {
  return (
    <>
      <Helmet>
        <title>Scan QR Code from Image Online — Privacy First | PrivyQR</title>
        <meta name="description" content="Upload any image to scan QR codes instantly. Support for JPG, PNG, GIF, WebP. 100% private browser-based scanning. No uploads to servers." />
        <meta name="keywords" content="scan QR code from image, QR code reader online, image QR scanner, private QR decoder, browser QR scanner" />
        <link rel="canonical" href="https://privyqr.com/scan-from-image" />
      </Helmet>
      <Home />
    </>
  );
}