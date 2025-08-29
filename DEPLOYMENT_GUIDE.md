# PrivyQR Deployment & SEO Guide

## 🚀 Quick Deployment

### Production Deployment (Recommended)
```bash
npm run deploy
```
This runs the safe deployment script that:
1. Builds the project
2. Copies all critical files (sitemap, robots.txt, blog images)
3. Deploys to Cloudflare Pages
4. Verifies deployment
5. Submits to search engines automatically

### Quick Deployment (Manual)
```bash
npm run deploy:quick
```
Direct deployment without safety checks (use with caution).

## 📊 Search Engine Optimization

### Google Indexing (Instant)
```bash
npm run index:google
```
- Submits all URLs to Google for immediate indexing
- Uses service account: alldadev@darby-402921.iam.gserviceaccount.com
- Rate limited to 200 URLs/day
- Results appear in 24-48 hours

### Bing/Yandex Indexing (IndexNow)
```bash
npm run index
```
- Submits to Bing, Yandex, Seznam, and Yep
- Uses IndexNow protocol for instant notification
- Key: ef6d0af2e7384affb7353a1dd493891c

## 🖼️ Hero Images

### Generate All Blog Images
```bash
npm run generate:images
```
- Uses Leonardo.ai API (Phoenix model)
- Generates 1024x576 hero images (16:9 aspect)
- Saves to `public/blog-images/`
- All 8 blog posts now have hero images

### Generate Single Blog Image
```bash
node scripts/generate-blog-images.mjs <blog-slug>
```
Example: `node scripts/generate-blog-images.mjs qr-code-security-guide`

## ✅ Deployment Verification

### Verify Production
```bash
npm run verify
```
Tests all pages and critical files on privyqr.com

### Verify Staging
```bash
npm run verify:staging
```
Tests privyqr.pages.dev before promoting to production

## 📈 Google Analytics

Analytics is configured but needs your GA4 Measurement ID:

1. Get your GA4 ID from Google Analytics
2. Update `src/config/analytics.ts`:
   ```typescript
   measurementId: 'G-YOUR-ID-HERE'
   ```
3. Analytics will automatically track:
   - Page views
   - QR scan events
   - Feature usage
   - Batch processing

## 🎯 Complete Deployment Workflow

### For New Blog Posts or Major Updates:
```bash
# 1. Generate hero images for new blog posts
npm run generate:images

# 2. Build and deploy with all safety checks
npm run deploy

# 3. Submit to Google for instant indexing
npm run index:google

# 4. Submit to Bing/Yandex
npm run index

# 5. Verify deployment
npm run verify
```

## 📝 Blog Post Management

### Current Blog Posts (8 total):
1. QR Code Security Guide
2. Scan QR from Screenshot
3. Extract QR from PDF
4. WiFi QR Codes Guide
5. QR Code Business Cards
6. Event QR Codes
7. Restaurant Menu QR Codes
8. QR Codes in Education

### Adding New Blog Posts:
1. Create component in `src/pages/blog-posts/`
2. Add route in `src/App.tsx`
3. Update blog listing in `src/pages/Blog.tsx`
4. Add URL to `public/sitemap.xml`
5. Add to indexing scripts:
   - `submit-indexnow.js`
   - `scripts/google-indexing-api.mjs`
6. Generate hero image:
   ```bash
   node scripts/generate-blog-images.mjs <new-blog-slug>
   ```

## 🔧 Configuration Files

### Critical Files (Always Deployed):
- `public/robots.txt` - Search engine crawling rules
- `public/sitemap.xml` - Site structure for SEO
- `public/_headers` - Cloudflare security headers
- `public/_redirects` - URL routing rules
- `public/favicon.svg` - Site icon
- `public/blog-images/` - All hero images
- `public/ef6d0af2e7384affb7353a1dd493891c.txt` - IndexNow verification

### Service Accounts:
- **Google Indexing**: alldadev@darby-402921.iam.gserviceaccount.com
- **Leonardo.ai API**: ef6d0af2-e738-4aff-b735-3a1dd493891c

## 🚨 Emergency Procedures

### If Site Goes Down:
```bash
# Immediate restore
npm run build && npm run deploy:quick

# Verify restoration
curl -I https://privyqr.com
```

### If Build Fails:
1. Check `dist/` folder for missing files
2. Ensure all critical files are present
3. Use `deploy-safe.cjs` for automatic file copying

## 📊 Monitoring

### Check Indexing Status:
- **Google**: Search Console → privyqr.com
- **Bing**: Webmaster Tools → privyqr.com

### Check Analytics:
- **Google Analytics**: View real-time and historical data
- **Cloudflare**: Pages dashboard for deployment status

## 🎉 Success Checklist

After deployment, verify:
- [ ] Site loads at privyqr.com
- [ ] All blog posts have hero images
- [ ] QR scanner works
- [ ] Blog navigation works
- [ ] Sitemap accessible at /sitemap.xml
- [ ] Robots.txt accessible at /robots.txt
- [ ] Google indexing submitted
- [ ] Bing/Yandex indexing submitted

## 📚 Resources

- **Cloudflare Pages**: https://pages.cloudflare.com
- **Google Search Console**: https://search.google.com/search-console
- **Bing Webmaster**: https://www.bing.com/webmasters
- **Leonardo.ai**: https://leonardo.ai
- **IndexNow**: https://www.indexnow.org