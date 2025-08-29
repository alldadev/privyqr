# 🚀 Deploy PrivyQR to Cloudflare Pages - Step by Step

## Prerequisites
- Cloudflare account (free at cloudflare.com)
- Git installed on your computer
- GitHub account (for easiest deployment)

## Option 1: Deploy via GitHub (Recommended) 

### Step 1: Push to GitHub
```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: PrivyQR - Privacy-first QR scanner"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/privyqr.git
git branch -M main
git push -u origin main
```

### Step 2: Connect to Cloudflare Pages
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Click "Workers & Pages" in the left sidebar
3. Click "Create application"
4. Choose "Pages" tab
5. Click "Connect to Git"
6. Authorize GitHub and select your `privyqr` repository
7. Configure build settings:
   - **Framework preset**: None
   - **Build command**: `npm install && npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: Leave blank
   - **Environment variables**: 
     - Add: `NODE_VERSION` = `18`

8. Click "Save and Deploy"
9. Wait 2-3 minutes for the build to complete
10. Your site will be live at: `https://privyqr.pages.dev`

## Option 2: Direct Upload (Quick Test)

### Step 1: Build Locally
Since npm install has issues on your machine, try this alternative:

```bash
# Use npx to run vite directly
npx vite build

# Or try with yarn
yarn install
yarn build

# Or with pnpm
pnpm install
pnpm build
```

### Step 2: Upload to Cloudflare
1. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
2. Click "Create a project"
3. Choose "Direct Upload" tab
4. Name your project: `privyqr`
5. Drag and drop the `dist` folder (or click to browse)
6. Click "Deploy site"
7. Your site will be live in ~30 seconds!

## Option 3: Using Wrangler CLI

### Step 1: Install Wrangler
```bash
npm install -g wrangler
```

### Step 2: Login
```bash
wrangler login
```

### Step 3: Deploy
```bash
# Build the project
npm run build

# Deploy to Cloudflare Pages
wrangler pages deploy dist --project-name=privyqr
```

## Custom Domain Setup (privyqr.com)

After deployment:

1. Go to your Cloudflare Pages project
2. Click on "Custom domains" tab
3. Click "Set up a custom domain"
4. Enter: `privyqr.com`
5. Follow the DNS instructions:
   - If domain is on Cloudflare: Auto-configured
   - If domain is elsewhere: Add CNAME record pointing to `privyqr.pages.dev`

## Post-Deployment Checklist

✅ **Test Core Features**:
- [ ] Image QR scanning works
- [ ] Webcam scanning works
- [ ] PDF scanning works
- [ ] Result cards show correctly
- [ ] All action buttons work

✅ **Test SEO Pages**:
- [ ] `/scan-from-image` loads
- [ ] `/scan-from-screenshot` loads
- [ ] `/scan-from-pdf` loads
- [ ] `/blog` loads
- [ ] Blog posts load

✅ **Test Performance**:
- [ ] Site loads in <3 seconds
- [ ] No console errors
- [ ] Mobile responsive

## Troubleshooting

### Build Fails on Cloudflare
- Check Node version is set to 18
- Try clearing build cache and redeploying
- Check build logs for specific errors

### Site Not Loading
- Wait 2-3 minutes after deployment
- Check if `dist/index.html` exists
- Verify build output directory is `dist`

### Domain Not Working
- DNS propagation can take up to 48 hours
- Verify CNAME record is correct
- Check SSL certificate status in Cloudflare

## Important Notes

⚠️ **Based on QuickJPG deployment rules**:
- ALWAYS test on staging first if possible
- NEVER deploy during peak hours
- ALWAYS verify the site works after deployment
- Keep the last working build backed up

## Emergency Rollback

If something goes wrong:
1. Go to Cloudflare Pages dashboard
2. Click on your project
3. Go to "Deployments" tab
4. Find the last working deployment
5. Click "..." menu → "Rollback to this deployment"

## Success! 🎉

Once deployed, your site will be available at:
- **Cloudflare URL**: `https://privyqr.pages.dev`
- **Custom domain**: `https://privyqr.com` (after DNS setup)

Share the privacy-first QR scanner with the world!