#!/usr/bin/env node

/**
 * PrivyQR Deployment Verification Script
 * Verifies that the production deployment is working correctly
 */

import https from 'https';

const SITE_URL = 'https://privyqr.com';
const STAGING_URL = 'https://privyqr.pages.dev';
const TIMEOUT = 10000; // 10 seconds

// URLs to test
const URLS_TO_TEST = [
  '/',
  '/scan-from-image',
  '/scan-from-screenshot',
  '/scan-from-pdf',
  '/blog',
  '/blog/qr-code-security-guide',
  '/blog/scan-qr-from-screenshot',
  '/blog/extract-qr-from-pdf',
  '/blog/wifi-qr-codes-guide',
  '/blog/qr-code-business-cards',
  '/blog/event-qr-codes',
  '/blog/restaurant-menu-qr-codes',
  '/blog/qr-codes-in-education',
  '/about',
  '/faq',
  '/contact',
  '/privacy',
  '/terms'
];

// Critical files that must exist
const CRITICAL_FILES = [
  '/robots.txt',
  '/sitemap.xml',
  '/favicon.svg'
];

let failedTests = 0;
let passedTests = 0;

function testUrl(baseUrl, path) {
  return new Promise((resolve) => {
    const url = `${baseUrl}${path}`;
    
    https.get(url, { timeout: TIMEOUT }, (res) => {
      if (res.statusCode === 200 || res.statusCode === 304) {
        console.log(`✅ ${path} - Status: ${res.statusCode}`);
        passedTests++;
      } else if (res.statusCode === 301 || res.statusCode === 302) {
        console.log(`⚠️  ${path} - Redirect: ${res.statusCode}`);
        passedTests++;
      } else {
        console.log(`❌ ${path} - Status: ${res.statusCode}`);
        failedTests++;
      }
      
      // Consume response data
      res.on('data', () => {});
      resolve();
    }).on('error', (err) => {
      console.log(`❌ ${path} - Error: ${err.message}`);
      failedTests++;
      resolve();
    }).on('timeout', () => {
      console.log(`❌ ${path} - Timeout after ${TIMEOUT}ms`);
      failedTests++;
      resolve();
    });
  });
}

async function checkContentType(baseUrl, path) {
  return new Promise((resolve) => {
    const url = `${baseUrl}${path}`;
    
    https.get(url, { timeout: TIMEOUT }, (res) => {
      const contentType = res.headers['content-type'];
      
      if (path === '/' || path.endsWith('.html') || path.startsWith('/blog')) {
        if (contentType && contentType.includes('text/html')) {
          console.log(`✅ ${path} - Content-Type: ${contentType}`);
          passedTests++;
        } else {
          console.log(`❌ ${path} - Wrong Content-Type: ${contentType} (expected text/html)`);
          failedTests++;
        }
      } else if (path.endsWith('.xml')) {
        if (contentType && (contentType.includes('application/xml') || contentType.includes('text/xml'))) {
          console.log(`✅ ${path} - Content-Type: ${contentType}`);
          passedTests++;
        } else {
          console.log(`⚠️  ${path} - Content-Type: ${contentType} (expected xml)`);
          passedTests++;
        }
      } else if (path.endsWith('.txt')) {
        console.log(`✅ ${path} - Content-Type: ${contentType}`);
        passedTests++;
      }
      
      // Consume response data
      res.on('data', () => {});
      resolve();
    }).on('error', (err) => {
      console.log(`❌ ${path} - Error: ${err.message}`);
      failedTests++;
      resolve();
    });
  });
}

async function runTests(isProduction = true) {
  const baseUrl = isProduction ? SITE_URL : STAGING_URL;
  
  console.log(`🚀 PrivyQR Deployment Verification - ${isProduction ? 'PRODUCTION' : 'STAGING'}`);
  console.log(`🌐 Testing: ${baseUrl}`);
  console.log('=====================================\n');
  
  console.log('📄 Testing pages...');
  for (const url of URLS_TO_TEST) {
    await testUrl(baseUrl, url);
  }
  
  console.log('\n📁 Testing critical files...');
  for (const file of CRITICAL_FILES) {
    await testUrl(baseUrl, file);
  }
  
  console.log('\n🔍 Checking content types...');
  await checkContentType(baseUrl, '/');
  await checkContentType(baseUrl, '/robots.txt');
  await checkContentType(baseUrl, '/sitemap.xml');
  
  console.log('\n=====================================');
  console.log(`✅ Passed: ${passedTests}`);
  console.log(`❌ Failed: ${failedTests}`);
  
  if (failedTests === 0) {
    console.log('\n🎉 ALL TESTS PASSED! Deployment successful.');
    console.log('📊 Site is live and responding correctly.');
    return true;
  } else {
    console.log('\n⚠️  SOME TESTS FAILED! Please investigate.');
    console.log('💡 Check deployment logs and Cloudflare Pages dashboard.');
    return false;
  }
}

// Parse command line arguments
const args = process.argv.slice(2);
const testStaging = args.includes('--staging');

// Run the tests
runTests(!testStaging).then(success => {
  process.exit(success ? 0 : 1);
}).catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});