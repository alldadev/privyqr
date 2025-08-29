import { useEffect, useRef, useState } from 'react';
import { Camera, X, RotateCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import QRScanner, { QRResult } from '@/lib/qr-scanner';

interface WebcamScannerProps {
  onScanResult: (result: QRResult) => void;
  onClose: () => void;
}

export default function WebcamScanner({ onScanResult, onClose }: WebcamScannerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [currentCamera, setCurrentCamera] = useState<'user' | 'environment'>('environment');
  const scannerRef = useRef<QRScanner | null>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    scannerRef.current = new QRScanner();
    startCamera();

    return () => {
      stopCamera();
      if (scannerRef.current) {
        scannerRef.current.cleanup();
      }
    };
  }, [currentCamera]);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: currentCamera,
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setHasPermission(true);
        setIsScanning(true);
        startScanning();
      }
    } catch (error) {
      console.error('Camera access denied:', error);
      setHasPermission(false);
    }
  };

  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
    }
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    setIsScanning(false);
  };

  const startScanning = () => {
    const scan = async () => {
      if (!videoRef.current || !canvasRef.current || !scannerRef.current || !isScanning) {
        return;
      }

      const video = videoRef.current;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      if (ctx && video.readyState === video.HAVE_ENOUGH_DATA) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        try {
          const result = await scannerRef.current.scanFromCanvas(canvas);
          if (result) {
            // Play a success sound/vibration
            if (navigator.vibrate) {
              navigator.vibrate(200);
            }
            onScanResult(result);
            stopCamera();
            return;
          }
        } catch (error) {
          // Continue scanning
        }
      }

      animationFrameRef.current = requestAnimationFrame(scan);
    };

    scan();
  };

  const switchCamera = () => {
    setCurrentCamera(prev => prev === 'user' ? 'environment' : 'user');
  };

  if (hasPermission === false) {
    return (
      <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-card p-8 rounded-lg max-w-md text-center">
          <Camera className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-xl font-semibold mb-2">Camera Permission Required</h3>
          <p className="text-muted-foreground mb-4">
            Please allow camera access to scan QR codes
          </p>
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl">
        <div className="bg-card rounded-lg overflow-hidden shadow-xl">
          <div className="relative aspect-video bg-black">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover"
            />
            
            {/* Scanning overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 border-2 border-primary/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 relative">
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary" />
                  {isScanning && (
                    <div className="absolute inset-0 scan-animation" />
                  )}
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="absolute top-4 right-4 flex gap-2">
              <Button
                size="icon"
                variant="secondary"
                onClick={switchCamera}
                className="bg-background/80 backdrop-blur-sm"
              >
                <RotateCw className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="secondary"
                onClick={onClose}
                className="bg-background/80 backdrop-blur-sm"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="p-4 text-center">
            <p className="text-sm text-muted-foreground">
              {isScanning ? 'Point camera at QR code' : 'Initializing camera...'}
            </p>
          </div>
        </div>
        
        <canvas ref={canvasRef} className="hidden" />
      </div>
    </div>
  );
}