import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FileImage, Camera, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface DropZoneProps {
  onFilesDropped: (files: File[]) => void;
  onWebcamClick: () => void;
  disabled?: boolean;
}

export default function DropZone({ onFilesDropped, onWebcamClick, disabled }: DropZoneProps) {
  const [isDragActive, setIsDragActive] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setIsDragActive(false);
    if (acceptedFiles.length > 0) {
      onFilesDropped(acceptedFiles);
    }
  }, [onFilesDropped]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.bmp', '.webp', '.svg'],
      'application/pdf': ['.pdf']
    },
    disabled,
    onDragEnter: () => setIsDragActive(true),
    onDragLeave: () => setIsDragActive(false),
  });

  // Handle paste events
  const handlePaste = useCallback((e: ClipboardEvent) => {
    const items = e.clipboardData?.items;
    if (!items) return;

    const files: File[] = [];
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.type.startsWith('image/')) {
        const file = item.getAsFile();
        if (file) files.push(file);
      }
    }

    if (files.length > 0) {
      onFilesDropped(files);
    }
  }, [onFilesDropped]);

  // Add paste event listener
  useState(() => {
    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  });

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div
        {...getRootProps()}
        className={cn(
          "relative border-2 border-dashed rounded-lg p-8 md:p-12 text-center cursor-pointer transition-all duration-200",
          isDragActive ? "border-primary bg-primary/5 drop-zone-active" : "border-border hover:border-primary/50",
          disabled && "opacity-50 cursor-not-allowed"
        )}
      >
        <input {...getInputProps()} />
        
        {isDragActive && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/80 rounded-lg">
            <div className="text-center">
              <Upload className="w-16 h-16 mx-auto mb-4 text-primary animate-bounce" />
              <p className="text-lg font-semibold">Drop your files here!</p>
            </div>
          </div>
        )}

        <div className="space-y-4">
          <div className="flex justify-center gap-4">
            <FileImage className="w-12 h-12 text-muted-foreground" />
            <FileText className="w-12 h-12 text-muted-foreground" />
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Drop images or PDFs with QR codes
            </h3>
            <p className="text-muted-foreground mb-4">
              or click to browse from your device
            </p>
            <p className="text-sm text-muted-foreground">
              Supports: JPG, PNG, GIF, WebP, PDF • Batch scanning • Paste from clipboard
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 pt-4">
            <div className="flex-1 h-px bg-border" />
            <span className="text-muted-foreground text-sm">or</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <Button
            variant="outline"
            size="lg"
            onClick={(e) => {
              e.stopPropagation();
              onWebcamClick();
            }}
            className="gap-2"
          >
            <Camera className="w-5 h-5" />
            Scan with Webcam
          </Button>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
          <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          100% Private • No uploads • All processing in your browser
        </p>
      </div>
    </div>
  );
}