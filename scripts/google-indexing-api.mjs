#!/usr/bin/env node

import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import checkLimits, { recordSubmission } from './check-indexing-limits.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// URLs to submit for indexing - PrivyQR
const URLS_TO_INDEX = [
  // Main Pages
  'https://privyqr.com/',
  
  // Scanner Pages
  'https://privyqr.com/scan-from-image',
  'https://privyqr.com/scan-from-screenshot',
  'https://privyqr.com/scan-from-pdf',
  
  // Blog Posts
  'https://privyqr.com/blog',
  'https://privyqr.com/blog/qr-code-security-guide',
  'https://privyqr.com/blog/scan-qr-from-screenshot',
  'https://privyqr.com/blog/extract-qr-from-pdf',
  'https://privyqr.com/blog/wifi-qr-codes-guide',
  'https://privyqr.com/blog/qr-code-business-cards',
  'https://privyqr.com/blog/event-qr-codes',
  'https://privyqr.com/blog/restaurant-menu-qr-codes',
  'https://privyqr.com/blog/qr-codes-in-education',
  
  // Info Pages
  'https://privyqr.com/about',
  'https://privyqr.com/faq',
  'https://privyqr.com/contact',
  'https://privyqr.com/privacy',
  'https://privyqr.com/terms'
];

console.log('🚀 Google Indexing API - PrivyQR Submission');
console.log('==============================================\n');

// Check for credentials file
const credentialsPath = path.join(__dirname, 'google-credentials.json');
if (!fs.existsSync(credentialsPath)) {
  console.log('⚠️  No credentials found. Creating setup instructions...\n');
  
  const setupInstructions = `
# Google Indexing API Setup Instructions for PrivyQR

## Step 1: Enable the API
1. Go to: https://console.cloud.google.com/apis/library/indexing.googleapis.com
2. Click "Enable API"

## Step 2: Create Service Account
1. Go to: https://console.cloud.google.com/iam-admin/serviceaccounts
2. Click "Create Service Account"
3. Name: "privyqr-indexing"
4. Click "Create and Continue"
5. Skip optional steps, click "Done"

## Step 3: Create Credentials
1. Click on the service account you just created
2. Go to "Keys" tab
3. Click "Add Key" > "Create New Key"
4. Choose "JSON"
5. Save the file as: scripts/google-credentials.json

## Step 4: Add to Search Console
1. Go to: https://search.google.com/search-console
2. Select your property: privyqr.com
3. Go to Settings > Users and permissions
4. Click "Add user"
5. Add the service account email (from the JSON file)
6. Set permission to "Owner"

## Step 5: Run this script again
node scripts/google-indexing-api.mjs
`;

  fs.writeFileSync(path.join(__dirname, 'GOOGLE_INDEXING_SETUP.md'), setupInstructions);
  console.log('📝 Setup instructions saved to: scripts/GOOGLE_INDEXING_SETUP.md');
  console.log('\nPlease follow the instructions above to set up Google Indexing API.');
  process.exit(0);
}

async function submitToGoogle() {
  try {
    // Check rate limits first
    console.log('🔍 Checking Google API rate limits...\n');
    const canSubmit = checkLimits();
    
    if (!canSubmit) {
      console.log('\n❌ Cannot submit URLs due to rate limits.');
      console.log('   Please wait and try again later.');
      process.exit(1);
    }
    
    // Prompt for confirmation if multiple submissions today
    console.log('\n⚠️  Important: Only submit if content has actually changed!');
    console.log('   Google limits: 200 URLs/day, wait 24h between same URL submissions\n');
    
    // Load credentials
    const credentials = JSON.parse(fs.readFileSync(credentialsPath, 'utf8'));
    
    // Configure auth
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/indexing']
    });

    // Create indexing client
    const indexing = google.indexing({
      version: 'v3',
      auth
    });

    console.log('📋 Submitting ' + URLS_TO_INDEX.length + ' URLs to Google...\n');

    const results = [];
    
    for (const url of URLS_TO_INDEX) {
      try {
        console.log(`⏳ Submitting: ${url}`);
        
        const response = await indexing.urlNotifications.publish({
          requestBody: {
            url: url,
            type: 'URL_UPDATED'
          }
        });
        
        console.log(`✅ Success: ${url}`);
        results.push({
          url,
          status: 'success',
          response: response.data
        });
        
        // Small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 1000));
        
      } catch (error) {
        console.log(`❌ Failed: ${url} - ${error.message}`);
        results.push({
          url,
          status: 'failed',
          error: error.message
        });
      }
    }

    // Save results
    const timestamp = new Date().toISOString();
    const resultsData = {
      timestamp,
      total: URLS_TO_INDEX.length,
      successful: results.filter(r => r.status === 'success').length,
      failed: results.filter(r => r.status === 'failed').length,
      results
    };

    fs.writeFileSync(
      path.join(__dirname, 'indexing-results.json'),
      JSON.stringify(resultsData, null, 2)
    );

    // Record submission for rate limiting
    recordSubmission(URLS_TO_INDEX);

    console.log('\n' + '='.repeat(50));
    console.log('📊 SUMMARY:');
    console.log(`✅ Successful: ${resultsData.successful}`);
    console.log(`❌ Failed: ${resultsData.failed}`);
    console.log('\n💾 Results saved to: scripts/indexing-results.json');
    console.log('\n⏰ URLs will be indexed within 24-48 hours');
    console.log('📊 Check status in Google Search Console');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.log('\n💡 Tip: Make sure your credentials are valid and have the right permissions.');
  }
}

// Run if credentials exist
if (fs.existsSync(credentialsPath)) {
  submitToGoogle();
}