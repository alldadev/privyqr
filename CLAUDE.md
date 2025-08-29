# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

PrivyQR - A privacy-first, in-browser QR code scanner and decoder. All QR decoding runs client-side with no server uploads, following the same architectural simplicity and privacy principles as QuickJPG.

## Core Architecture

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Routing**: Wouter (lightweight router)
- **QR Libraries**: 
  - @zxing/library for image QR scanning
  - jsQR as fallback scanner
  - pdfjs-dist for PDF QR extraction
- **Deployment**: Cloudflare Pages

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run check

# Lint
npm run lint
```

## Project Structure

```
/
├── src/
│   ├── components/     # React components
│   │   ├── ui/        # shadcn/ui components
│   │   ├── scanner/   # QR scanning components
│   │   └── results/   # Result card components
│   ├── lib/           # Utility functions
│   │   ├── qr-scanner.ts    # QR scanning logic
│   │   ├── pdf-scanner.ts   # PDF QR extraction
│   │   └── utils.ts         # Helper functions
│   ├── pages/         # Route pages
│   └── hooks/         # Custom React hooks
├── public/            # Static assets
└── dist/             # Build output
```

## Key Features

1. **Privacy-First**: All processing happens client-side
2. **Multiple Input Methods**: Image upload, webcam, PDF, clipboard paste
3. **Batch Processing**: Handle multiple images at once
4. **Smart Results**: Actionable cards for different QR types (URLs, WiFi, vCard, etc.)
5. **SEO Optimized**: Static pages for search visibility

## Deployment

Deploy to Cloudflare Pages:
```bash
npm run build
# Upload dist/ folder to Cloudflare Pages
```

## Performance Considerations

- Lazy load PDF.js only when needed
- Use Web Workers for heavy QR processing
- Implement service worker for offline support
- Bundle splitting for optimal loading