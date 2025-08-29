#!/usr/bin/env node

/**
 * SAFE DEPLOYMENT SCRIPT FOR PRIVYQR
 * Based on QuickJPG deployment rules
 * NEVER deploy without running this script first!
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting PrivyQR Safe Deployment Process...\n');

// Step 1: Build locally
console.log('📦 Step 1: Building project locally...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build completed successfully\n');
} catch (error) {
  console.error('❌ Build failed! Aborting deployment.');
  process.exit(1);
}

// Step 2: Verify build output
console.log('🔍 Step 2: Verifying build output...');
const distPath = path.join(__dirname, 'dist');
const requiredFiles = ['index.html', 'assets', 'robots.txt', 'sitemap.xml'];
const missingFiles = [];

requiredFiles.forEach(file => {
  const filePath = path.join(distPath, file);
  if (!fs.existsSync(filePath)) {
    missingFiles.push(file);
  }
});

if (missingFiles.length > 0) {
  console.error(`❌ Missing required files in dist/: ${missingFiles.join(', ')}`);
  console.error('Build output is incomplete. Aborting deployment.');
  process.exit(1);
}
console.log('✅ Build output verified\n');

// Step 3: Deploy to staging
console.log('🌐 Step 3: Deploying to staging...');
console.log('Run this command manually:');
console.log('wrangler pages deploy dist --project-name=privyqr --branch=staging\n');
console.log('After staging deployment:');
console.log('1. Test the staging URL: https://staging.privyqr.pages.dev');
console.log('2. Verify QR scanning works');
console.log('3. Test webcam functionality');
console.log('4. Check PDF scanning\n');

// Step 4: Production deployment instructions
console.log('🚀 Step 4: Production Deployment');
console.log('ONLY after staging verification, run:');
console.log('wrangler pages deploy dist --project-name=privyqr --branch=main\n');

// Step 5: Verification script
console.log('✅ Step 5: After deployment, verify with:');
console.log('curl -I https://privyqr.com');
console.log('Expected: HTTP/1.1 200 OK\n');

console.log('📋 Manual Deployment Checklist:');
console.log('[ ] Build completed successfully');
console.log('[ ] All required files present in dist/');
console.log('[ ] Deployed to staging');
console.log('[ ] Tested staging thoroughly');
console.log('[ ] Deployed to production');
console.log('[ ] Verified production with curl');
console.log('[ ] Tested live site functionality\n');

console.log('⚠️  REMEMBER: Never skip staging deployment!');
console.log('⚠️  REMEMBER: Always verify production after deployment!');