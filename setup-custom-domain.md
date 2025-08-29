# Setting up privyqr.com Custom Domain

## Quick Setup via Cloudflare Dashboard

### Step 1: Add Custom Domain to Pages
```bash
wrangler pages deployment create-alias --project-name=privyqr --alias=privyqr.com
```

### Step 2: Configure DNS in Cloudflare
You need to add these DNS records in your Cloudflare DNS dashboard:

1. **CNAME Record** (Recommended):
   - Type: CNAME
   - Name: @ (or privyqr.com)
   - Target: privyqr.pages.dev
   - Proxy status: Proxied (orange cloud ON)

   OR

2. **A Record** (Alternative):
   - Type: A
   - Name: @
   - Value: 192.0.2.1 (Cloudflare Pages IP)
   - Proxy status: Proxied (orange cloud ON)

3. **www subdomain** (Optional):
   - Type: CNAME
   - Name: www
   - Target: privyqr.pages.dev
   - Proxy status: Proxied (orange cloud ON)

## Manual Setup Instructions

### Via Cloudflare Dashboard:
1. Go to https://dash.cloudflare.com
2. Select your domain (privyqr.com)
3. Go to "Pages" in the left sidebar
4. Click on "privyqr" project
5. Go to "Custom domains" tab
6. Click "Set up a custom domain"
7. Enter: privyqr.com
8. Follow the DNS configuration instructions

### Via Command Line:
```bash
# Add the custom domain
wrangler pages deployment create-alias --project-name=privyqr --alias=privyqr.com

# If you need to add www subdomain
wrangler pages deployment create-alias --project-name=privyqr --alias=www.privyqr.com
```

## Verification

After setup, verify with:
```bash
# Check DNS resolution
nslookup privyqr.com

# Test the site
curl -I https://privyqr.com

# Should return HTTP 200 OK
```

## Troubleshooting

### If site doesn't load:
1. **Check DNS propagation**: Can take up to 48 hours
2. **Verify SSL**: Cloudflare automatically provides SSL
3. **Clear cache**: In Cloudflare dashboard, go to Caching > Configuration > Purge Everything

### Common Issues:
- **Error 522**: Origin server timeout - Check if Pages deployment is active
- **Error 521**: Web server is down - Redeploy the Pages project
- **Error 1001**: DNS resolution error - Check DNS records

## Current Status
- Pages URL: https://privyqr.pages.dev ✅
- Custom Domain: https://privyqr.com (needs configuration)
- SSL: Automatic via Cloudflare ✅