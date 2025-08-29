#!/usr/bin/env node

/**
 * Google Indexing API Rate Limit Checker for PrivyQR
 * Ensures compliance with Google's indexing guidelines
 * 
 * GUIDELINES:
 * - Maximum 200 requests per day
 * - Don't resubmit same URL within 24 hours unless content changed
 * - Primary use is for JobPosting/BroadcastEvent (but other content allowed)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const HISTORY_FILE = path.join(__dirname, 'indexing-history.json');
const RESULTS_FILE = path.join(__dirname, 'indexing-results.json');

// Google's limits
const DAILY_LIMIT = 200;
const MIN_HOURS_BETWEEN_SUBMISSIONS = 24;

function loadHistory() {
  if (!fs.existsSync(HISTORY_FILE)) {
    return { submissions: [] };
  }
  return JSON.parse(fs.readFileSync(HISTORY_FILE, 'utf8'));
}

function saveHistory(history) {
  fs.writeFileSync(HISTORY_FILE, JSON.stringify(history, null, 2));
}

function checkLimits() {
  const history = loadHistory();
  const now = new Date();
  const twentyFourHoursAgo = new Date(now - 24 * 60 * 60 * 1000);
  
  // Count submissions in last 24 hours
  const recentSubmissions = history.submissions.filter(sub => 
    new Date(sub.timestamp) > twentyFourHoursAgo
  );
  
  const submissionCount = recentSubmissions.reduce((sum, sub) => 
    sum + (sub.urls ? sub.urls.length : 0), 0
  );
  
  // Check last submission time
  let lastSubmission = null;
  if (fs.existsSync(RESULTS_FILE)) {
    const results = JSON.parse(fs.readFileSync(RESULTS_FILE, 'utf8'));
    lastSubmission = new Date(results.timestamp);
  }
  
  const hoursSinceLastSubmission = lastSubmission 
    ? (now - lastSubmission) / (1000 * 60 * 60)
    : Infinity;
  
  console.log('📊 Google Indexing API Limit Check - PrivyQR');
  console.log('=====================================');
  console.log(`📅 Current time: ${now.toISOString()}`);
  console.log(`📈 Submissions in last 24h: ${submissionCount}/${DAILY_LIMIT}`);
  console.log(`⏱️  Hours since last submission: ${hoursSinceLastSubmission.toFixed(1)}h`);
  console.log('');
  
  // Warnings and recommendations
  if (submissionCount >= DAILY_LIMIT) {
    console.log('❌ DAILY LIMIT REACHED!');
    console.log('   Wait until tomorrow before submitting more URLs.');
    return false;
  } else if (submissionCount >= DAILY_LIMIT * 0.8) {
    console.log('⚠️  WARNING: Approaching daily limit (80% used)');
    console.log('   Consider waiting unless this is critical.');
  }
  
  if (hoursSinceLastSubmission < 1) {
    console.log('⚠️  WARNING: Last submission was less than 1 hour ago');
    console.log('   Only submit if content has actually changed.');
  } else if (hoursSinceLastSubmission < MIN_HOURS_BETWEEN_SUBMISSIONS) {
    console.log('ℹ️  NOTE: Last submission was less than 24 hours ago');
    console.log('   Make sure content has been updated before resubmitting.');
  }
  
  const remainingQuota = DAILY_LIMIT - submissionCount;
  console.log(`✅ Remaining quota today: ${remainingQuota} URLs`);
  console.log('');
  
  // Best practices reminder
  console.log('📋 Best Practices:');
  console.log('   • Only submit after content changes');
  console.log('   • Batch submissions when possible');
  console.log('   • Wait 24h between resubmissions of same URL');
  console.log('   • Monitor Search Console for indexing status');
  
  return remainingQuota > 0;
}

// Add submission to history
export function recordSubmission(urls) {
  const history = loadHistory();
  history.submissions.push({
    timestamp: new Date().toISOString(),
    urls: urls,
    count: urls.length
  });
  
  // Keep only last 7 days of history
  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  history.submissions = history.submissions.filter(sub =>
    new Date(sub.timestamp) > sevenDaysAgo
  );
  
  saveHistory(history);
}

// Run check if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  checkLimits();
}

export default checkLimits;