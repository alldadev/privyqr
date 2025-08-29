# 🚨 URGENT: Fix privyqr.com - Quick Steps

## Option 1: Via Cloudflare Dashboard (EASIEST - 2 minutes)

1. **Open Cloudflare Dashboard**:
   - Go to: https://dash.cloudflare.com
   - Log in to your account

2. **Navigate to Pages**:
   - Select `privyqr.com` domain
   - Click "Pages" in left sidebar
   - You should see your `privyqr` project

3. **Add Custom Domain**:
   - Click on the `privyqr` project
   - Go to "Custom domains" tab
   - Click "Set up a custom domain" button
   - Type: `privyqr.com`
   - Click "Continue"
   - Cloudflare will automatically set up the DNS

## Option 2: Manual DNS Setup (If Option 1 doesn't work)

1. **Go to DNS settings**:
   - https://dash.cloudflare.com
   - Select `privyqr.com`
   - Click "DNS" in sidebar

2. **Delete any existing A or CNAME records for @**

3. **Add new CNAME record**:
   - Type: `CNAME`
   - Name: `@` (this represents privyqr.com)
   - Target: `privyqr.pages.dev`
   - Proxy status: `Proxied` (orange cloud ON)
   - TTL: `Auto`
   - Click "Save"

4. **Add www redirect** (optional):
   - Type: `CNAME`
   - Name: `www`
   - Target: `privyqr.pages.dev`
   - Proxy status: `Proxied` (orange cloud ON)
   - Click "Save"

## Verify It's Working

After 1-2 minutes, test:
```bash
curl -I https://privyqr.com
```

Should return: `HTTP/1.1 200 OK`

## Current Status:
- ✅ Site is LIVE at: https://privyqr.pages.dev
- ❌ Custom domain not configured: https://privyqr.com
- ✅ All content deployed and working
- ✅ SEO submitted to Google & Bing

## If Still Not Working:

Check if DNS is propagating:
- https://www.whatsmydns.net/#CNAME/privyqr.com
- Should show: `privyqr.pages.dev`

If you see the site but get SSL errors:
- Wait 5 minutes (Cloudflare is generating SSL)
- Or go to SSL/TLS > Overview > Set to "Full"

Need the direct link for Pages custom domain setup?
https://dash.cloudflare.com/?to=/:account/pages/view/privyqr/domains