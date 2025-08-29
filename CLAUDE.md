# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 🚨 CRITICAL: PRODUCTION DEPLOYMENT RULES
**THIS SITE IS LIVE - ZERO TOLERANCE FOR DOWNTIME**

### ✅ ALWAYS USE THE SAFE DEPLOYMENT SCRIPTS:
```bash
# PREFERRED METHOD:
npm run deploy

# Alternative:
node deploy-safe.cjs
```

**NEVER deploy manually without these scripts!**

### MANDATORY BEFORE ANY DEPLOYMENT:
1. **Build locally first**: `npm run build`
2. **Verify build output**: Check dist/ folder (MUST see index.html, assets/, robots.txt, sitemap.xml)
3. **Deploy to staging first**: `wrangler pages deploy dist --project-name=privyqr --branch=staging`
4. **Test staging URL**: Wait 30 seconds, verify it loads
5. **Deploy to production**: `wrangler pages deploy dist --project-name=privyqr --branch=main`
6. **VERIFY IMMEDIATELY**: `curl -I https://privyqr.com` (MUST return HTTP 200)

### IF SITE GOES DOWN:
- **IMMEDIATE ROLLBACK**: `npm run build && wrangler pages deploy dist --project-name=privyqr --branch=main`
- **Verify restoration**: `curl -I https://privyqr.com`

## 🔥 CRITICAL BUG FIXES AND LESSONS LEARNED

### HTML Rendering Issue (2025-08-28)
**Problem**: Site showed raw HTML text instead of rendered page (blank page or broken display)
**Root Cause**: Using Tailwind CDN incorrectly or deploying source files instead of built files
**Permanent Fix**: 
1. **ALWAYS use inline styles for emergency fixes** - Never rely on external CDN for critical deployments
2. **Create standalone HTML with all CSS inline** when npm build fails
3. **Test locally first**: Open index.html directly in browser before deploying
4. **Proper file structure in dist/**:
   - index.html (with inline styles or proper build)
   - _headers (security headers)
   - _redirects (URL redirects)
   - favicon.svg
   - robots.txt
   - sitemap.xml

**Emergency Recovery HTML Template**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PrivyQR - Scan QR Codes Privately</title>
    <style>
        /* ALL STYLES MUST BE INLINE - NO EXTERNAL DEPENDENCIES */
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: system-ui, -apple-system, sans-serif; }
        /* Full styles inline... */
    </style>
</head>
<body>
    <!-- HTML content with inline styles only -->
</body>
</html>
```

**Verification Steps**:
1. Check live site: `curl https://privyqr.pages.dev/` (should see HTML, not raw text)
2. Check headers: `curl -I https://privyqr.pages.dev/` (should return 200 OK)
3. Visual check: Open in browser, should see styled page, not raw HTML

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

### DEPLOYMENT COMMAND (COPY THIS EXACTLY):
```bash
npm run build && wrangler pages deploy dist --project-name=privyqr --branch=main && sleep 30 && curl -I https://privyqr.com
```

### Cloudflare Pages Configuration:
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Node version**: `18`
- **Project name**: `privyqr`

## ⚠️ CRITICAL: Blog Publishing Checklist
**MANDATORY when publishing new blog posts:**
1. Create the blog post file in `src/pages/blog-posts/`
2. Add route in `src/App.tsx`
3. **ADD TO BLOG LISTING PAGE**: Update `src/pages/Blog.tsx` with the new post
4. Add URL to `public/sitemap.xml`
5. Run deployment

**NEVER publish a blog post without adding it to the blog listing page!**

## 🖼️ Hero Image Generation Rules

When generating hero images with Leonardo.ai:
1. **NEVER INCLUDE TEXT** - Leonardo.ai garbles text badly. Use only visual elements
2. Add negative prompts: "text, words, letters, numbers, writing, typography, labels"
3. Use photorealistic style for professional appearance
4. Maintain 16:9 aspect ratio (1024x576)
5. Include relevant QR code visual elements (patterns, not readable codes)
6. Keep consistent lighting and quality across all images
7. Use cinematic composition for visual appeal
8. Focus on abstract representations and symbolic imagery

**Model Options**:
- Leonardo Phoenix (current): Best for photorealistic, no text
- Leonardo Kino XL: Alternative for cinematic style
- Leonardo Diffusion XL: Alternative for artistic style

## Performance Considerations

- Lazy load PDF.js only when needed
- Use Web Workers for heavy QR processing
- Implement service worker for offline support
- Bundle splitting for optimal loading
- All QR processing happens client-side (privacy-first)

## Critical Production Files
Always verify these files exist in deployments:
- **robots.txt**: For search engine crawling
- **sitemap.xml**: For SEO
- **_headers**: Cloudflare security headers
- **_redirects**: URL routing rules
- **favicon.svg**: Brand identity

NEVER deploy without these files!

## Emergency Response Protocol
When critical production failure occurs:
1. IMMEDIATELY deploy last known working version
2. Include ALL critical files (robots.txt, sitemap.xml, etc.)
3. Use standalone HTML with inline JavaScript if necessary
4. Fix root cause AFTER service is restored

## Deployment Verification
After any deployment:
1. ALWAYS wait 30 seconds for propagation
2. Test the deployed URL in a browser
3. Check for:
   - Console errors
   - Missing resources (404s)
   - Core functionality (can users scan QR codes?)
4. If ANY issues found, immediately rollback

## 🎨 Blog Hero Images with Leonardo.ai

### Leonardo.ai Configuration:
- **API Key**: `ef6d0af2-e738-4aff-b735-3a1dd493891c`
- **Model**: Leonardo Phoenix (`6b645e3a-d64f-4341-a6d8-7a3690fbf042`)
- **Settings**: 1024x576, CINEMATIC preset, no prompt magic/alchemy

### Hero Image Requirements:
- **Size**: 1024x576 (16:9 aspect ratio)
- **Format**: JPG for optimal loading
- **Location**: `/public/blog-images/`
- **Naming**: `hero-[blog-slug].jpg`

### CRITICAL Hero Image Rules:
1. **VARIETY IS KEY**: Don't use same theme repeatedly (e.g., ALL desktop computers)
2. **MIX IT UP**: Use diverse concepts - abstract art, nature metaphors, scientific visualizations
3. **PHOTOREALISTIC**: All hero images should be photorealistic, not cartoonish
4. **NO TEXT IN IMAGES**: Avoid text in images as AI often misspells
5. **QR CODE THEME**: Include QR code elements where relevant

### Blog Post Hero Image Template:
```tsx
{/* Hero Image */}
<div className="mb-8 animate-on-scroll">
  <img 
    src="/blog-images/hero-[blog-slug].jpg" 
    alt="[Detailed photorealistic description]" 
    className="w-full rounded-lg shadow-lg"
    loading="eager"
  />
</div>
```

### Prompt Templates for PrivyQR:
```javascript
// QR Security Theme
`Photorealistic image of digital security shield with QR code patterns, 
blue and purple gradient lighting, modern tech aesthetic, 
cinematic composition, high detail`

// QR Business Theme  
`Professional business setting with QR codes integrated naturally,
modern office environment, clean minimalist design,
photorealistic lighting, 1024x576`

// QR Technology Theme
`Abstract technological visualization of QR code data streams,
purple and blue color scheme, futuristic aesthetic,
photorealistic 3D rendering, cinematic quality`
```

### Deployment with Images:
When deploying with new hero images:
```bash
npm run build && cp -r public/blog-images dist/ && wrangler pages deploy dist --project-name=privyqr --branch=main
```