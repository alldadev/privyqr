#!/usr/bin/env node

/**
 * Domain Status Checker for PrivyQR
 */

import https from 'https';
import dns from 'dns/promises';

async function checkDomain() {
  console.log('🔍 Checking privyqr.com status...\n');
  
  // Check DNS
  try {
    const records = await dns.resolveCname('privyqr.com');
    console.log('✅ DNS CNAME found:', records);
  } catch (e) {
    try {
      const records = await dns.resolve4('privyqr.com');
      console.log('⚠️  DNS A record found:', records);
      console.log('   → Should be CNAME to privyqr.pages.dev');
    } catch (e2) {
      console.log('❌ No DNS records found for privyqr.com');
    }
  }
  
  // Check HTTPS
  const checkHttps = (url) => new Promise((resolve) => {
    https.get(url, (res) => {
      resolve({ 
        status: res.statusCode,
        headers: res.headers
      });
    }).on('error', (err) => {
      resolve({ error: err.message });
    });
  });
  
  console.log('\n📡 Checking HTTPS connections...\n');
  
  // Check Pages URL
  const pagesResult = await checkHttps('https://privyqr.pages.dev');
  if (pagesResult.status === 200) {
    console.log('✅ privyqr.pages.dev is working');
  } else {
    console.log('❌ privyqr.pages.dev error:', pagesResult.error || pagesResult.status);
  }
  
  // Check custom domain
  const customResult = await checkHttps('https://privyqr.com');
  if (customResult.status === 200) {
    console.log('✅ privyqr.com is working!');
  } else {
    console.log('❌ privyqr.com not working:', customResult.error || customResult.status);
  }
  
  console.log('\n📋 Next Steps:');
  if (customResult.status !== 200) {
    console.log('1. Go to: https://dash.cloudflare.com');
    console.log('2. Select privyqr.com domain');
    console.log('3. Go to Pages → privyqr project');
    console.log('4. Add custom domain: privyqr.com');
    console.log('\nOR manually add DNS:');
    console.log('   Type: CNAME');
    console.log('   Name: @');
    console.log('   Content: privyqr.pages.dev');
  } else {
    console.log('🎉 Everything is working!');
  }
}

checkDomain().catch(console.error);