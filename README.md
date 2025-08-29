# PrivyQR - Privacy-First QR Code Scanner

A modern, privacy-focused QR code scanner that runs entirely in your browser. No uploads, no tracking, no ads - just pure client-side QR code scanning.

## 🌟 Features

- **100% Private**: All processing happens in your browser - no server uploads
- **Multiple Input Methods**: 
  - Drag & drop images
  - Webcam scanning
  - PDF scanning (multi-page support)
  - Clipboard paste
  - Batch processing
- **Smart Results**: Actionable cards for different QR types:
  - URLs with domain preview and safety warnings
  - WiFi credentials with copy buttons
  - vCards with download option
  - Geo locations with Google Maps integration
  - Email/SMS with direct action buttons
- **Modern Tech Stack**: React, TypeScript, Vite, Tailwind CSS
- **Lightning Fast**: Instant results with no server round-trips

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/privyqr.git
cd privyqr

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:3000`

### Building for Production

```bash
# Build the app
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment

### Cloudflare Pages

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to Cloudflare Pages:
   - Connect your GitHub repository to Cloudflare Pages
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Environment variables: None required

### Manual Deployment

Upload the contents of the `dist` folder to any static hosting service (Netlify, Vercel, AWS S3, etc.)

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **QR Libraries**: 
  - @zxing/library - Primary QR decoder
  - jsQR - Fallback decoder
  - pdfjs-dist - PDF processing
- **Routing**: Wouter
- **Icons**: Lucide React

## 📁 Project Structure

```
src/
├── components/     # React components
│   ├── ui/        # shadcn/ui components
│   ├── scanner/   # QR scanning components
│   └── results/   # Result card components
├── lib/           # Utility functions
│   ├── qr-scanner.ts    # QR scanning logic
│   ├── pdf-scanner.ts   # PDF QR extraction
│   └── utils.ts         # Helper functions
├── pages/         # Route pages
└── App.tsx        # Main app component
```

## 🔒 Privacy & Security

- **No Server Communication**: All QR code processing happens locally
- **No Cookies**: No tracking or analytics cookies
- **No User Data Storage**: Nothing is saved or transmitted
- **Content Security Policy**: Strict CSP headers prevent XSS attacks
- **HTTPS Only**: Enforced secure connections

## 📝 License

MIT License - feel free to use this project for any purpose.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🐛 Bug Reports

If you find a bug, please open an issue with:
- Steps to reproduce
- Expected behavior
- Actual behavior
- Browser and OS information

## 🎯 Roadmap

- [ ] PWA support for offline scanning
- [ ] QR code generation
- [ ] History of scanned codes (local storage)
- [ ] Dark mode toggle
- [ ] Export results to CSV/JSON
- [ ] Support for more barcode formats

## 💡 Acknowledgments

- Built with privacy in mind, inspired by QuickJPG's architecture
- Uses open-source QR scanning libraries
- UI components from shadcn/ui

---

**PrivyQR** - Scan QR codes with confidence, knowing your data stays yours.