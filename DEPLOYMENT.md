# Deployment Guide for PrivyQR to Cloudflare Pages

## Option 1: Direct Git Integration (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: PrivyQR project"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/privyqr.git
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages**:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to "Workers & Pages" → "Create application" → "Pages"
   - Connect to Git → Select your GitHub account
   - Choose the `privyqr` repository
   - Configure build settings:
     - Framework preset: `None`
     - Build command: `npm run build`
     - Build output directory: `dist`
     - Node version: `18` (in Environment variables)

3. **Deploy**:
   - Click "Save and Deploy"
   - Wait for the build to complete
   - Your site will be available at `https://privyqr.pages.dev`

## Option 2: Direct Upload (Quick Deploy)

1. **Build locally** (if npm install works):
   ```bash
   npm install
   npm run build
   ```

2. **Upload to Cloudflare Pages**:
   - Go to [Cloudflare Pages](https://pages.cloudflare.com/)
   - Click "Create a project" → "Direct Upload"
   - Upload the `dist` folder
   - Name your project: `privyqr`
   - Click "Deploy site"

## Option 3: Using Wrangler CLI

1. **Install Wrangler**:
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**:
   ```bash
   wrangler login
   ```

3. **Deploy**:
   ```bash
   # Build first
   npm run build
   
   # Deploy to Pages
   wrangler pages deploy dist --project-name=privyqr
   ```

## Option 4: Manual Build & Deploy

Since npm install is having issues, here's a manual approach:

1. **Create a new directory for clean install**:
   ```bash
   mkdir privyqr-deploy
   cd privyqr-deploy
   ```

2. **Copy essential files**:
   - Copy all files from `src/` directory
   - Copy `index.html`
   - Copy `package.json`
   - Copy `vite.config.ts`
   - Copy `tsconfig.json`
   - Copy `tailwind.config.ts`
   - Copy `postcss.config.js`
   - Copy `public/` directory

3. **Install with yarn (alternative)**:
   ```bash
   yarn install
   yarn build
   ```

4. **Or use pnpm**:
   ```bash
   pnpm install
   pnpm build
   ```

5. **Upload the `dist` folder to Cloudflare Pages**

## Custom Domain Setup

After deployment:

1. Go to your Cloudflare Pages project settings
2. Navigate to "Custom domains"
3. Add `privyqr.com` (or your domain)
4. Follow DNS configuration instructions

## Environment Variables

No environment variables are required for PrivyQR as it's a fully client-side application.

## Build Settings for Cloudflare Pages

```yaml
Build command: npm run build
Build output directory: dist
Root directory: /
Node version: 18
```

## Post-Deployment Checklist

- [ ] Verify QR scanning works from images
- [ ] Test webcam functionality
- [ ] Check PDF scanning
- [ ] Verify all result card types
- [ ] Test on mobile devices
- [ ] Check SEO pages load correctly
- [ ] Verify CSP headers are applied

## Troubleshooting

### If build fails on Cloudflare:

1. Check Node version is set to 18
2. Clear build cache and retry
3. Check for any missing dependencies in package.json

### If npm install fails locally:

1. Clear npm cache: `npm cache clean --force`
2. Delete `node_modules` and `package-lock.json`
3. Try with `npm install --legacy-peer-deps`
4. Or use yarn/pnpm as alternatives

## Support

For deployment issues, check:
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#cloudflare-pages)