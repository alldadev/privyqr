#!/usr/bin/env node

/**
 * PrivyQR Safe Deployment Script
 * 
 * This script ensures ALL public assets are properly copied during deployment.
 * Works on Windows, Mac, and Linux.
 * 
 * CRITICAL: Always use this script for deployment to avoid missing files!
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  magenta: '\x1b[35m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function logStep(step, total, message) {
  log(`\n[${step}/${total}] ${message}`, 'cyan');
}

function execCommand(command, description) {
  try {
    log(`   Running: ${description}`, 'yellow');
    execSync(command, { stdio: 'inherit' });
    return true;
  } catch (error) {
    log(`   ❌ Failed: ${description}`, 'red');
    return false;
  }
}

function copyFile(source, dest, filename) {
  const sourcePath = path.join(source, filename);
  const destPath = path.join(dest, filename);
  
  if (!fs.existsSync(sourcePath)) {
    log(`   ⚠️  ${filename} not found in ${source}`, 'yellow');
    return false;
  }
  
  try {
    fs.copyFileSync(sourcePath, destPath);
    log(`   ✅ Copied ${filename}`, 'green');
    return true;
  } catch (error) {
    log(`   ❌ Failed to copy ${filename}: ${error.message}`, 'red');
    return false;
  }
}

function copyDirectory(source, dest, dirname) {
  const sourcePath = path.join(source, dirname);
  const destPath = path.join(dest, dirname);
  
  if (!fs.existsSync(sourcePath)) {
    log(`   ⚠️  ${dirname}/ not found in ${source}`, 'yellow');
    return false;
  }
  
  try {
    // Create destination directory if it doesn't exist
    if (!fs.existsSync(destPath)) {
      fs.mkdirSync(destPath, { recursive: true });
    }
    
    // Copy all files recursively
    const copyRecursive = (src, dst) => {
      const files = fs.readdirSync(src);
      files.forEach(file => {
        const srcFile = path.join(src, file);
        const dstFile = path.join(dst, file);
        
        if (fs.statSync(srcFile).isDirectory()) {
          if (!fs.existsSync(dstFile)) {
            fs.mkdirSync(dstFile, { recursive: true });
          }
          copyRecursive(srcFile, dstFile);
        } else {
          fs.copyFileSync(srcFile, dstFile);
        }
      });
    };
    
    copyRecursive(sourcePath, destPath);
    
    // Count files for reporting
    const countFiles = (dir) => {
      let count = 0;
      const files = fs.readdirSync(dir);
      files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
          count += countFiles(filePath);
        } else {
          count++;
        }
      });
      return count;
    };
    
    const fileCount = countFiles(destPath);
    log(`   ✅ Copied ${dirname}/ (${fileCount} files)`, 'green');
    return true;
  } catch (error) {
    log(`   ❌ Failed to copy ${dirname}/: ${error.message}`, 'red');
    return false;
  }
}

async function deploy() {
  log('\n🔍 PrivyQR Safe Deployment Script', 'magenta');
  log('=' .repeat(50), 'magenta');
  
  const totalSteps = 8;
  let currentStep = 0;
  
  // Step 1: Build the project
  currentStep++;
  logStep(currentStep, totalSteps, 'Building PrivyQR...');
  
  if (!execCommand('npm run build', 'npm run build')) {
    log('\n❌ Build failed! Aborting deployment.', 'red');
    process.exit(1);
  }
  log('   ✅ Build successful', 'green');
  
  // Step 2: Copy critical files
  currentStep++;
  logStep(currentStep, totalSteps, 'Copying critical files that Vite doesn\'t copy...');
  
  const publicDir = 'public';
  const distDir = 'dist';
  
  // Files to copy
  const filesToCopy = [
    'sitemap.xml',
    'robots.txt',
    '_headers',
    '_redirects',
    'favicon.svg'
  ];
  
  // Directories to copy
  const dirsToCopy = [
    'blog-images'  // CRITICAL: Hero images for all blog posts
  ];
  
  let copySuccess = true;
  
  // Copy individual files
  for (const file of filesToCopy) {
    if (!copyFile(publicDir, distDir, file)) {
      if (file === 'sitemap.xml' || file === 'robots.txt') {
        copySuccess = false;  // These are critical
      }
    }
  }
  
  // Copy directories
  for (const dir of dirsToCopy) {
    if (!copyDirectory(publicDir, distDir, dir)) {
      if (dir === 'blog-images') {
        log('\n⚠️  WARNING: Blog images not copied! Blog posts will have broken images!', 'yellow');
      }
    }
  }
  
  if (!copySuccess) {
    log('\n❌ Critical files missing! Aborting deployment.', 'red');
    process.exit(1);
  }
  
  // Step 3: Verify critical files
  currentStep++;
  logStep(currentStep, totalSteps, 'Verifying critical files...');
  
  const criticalFiles = [
    path.join(distDir, 'index.html'),
    path.join(distDir, 'sitemap.xml'),
    path.join(distDir, 'robots.txt')
  ];
  
  let allFilesPresent = true;
  for (const file of criticalFiles) {
    if (fs.existsSync(file)) {
      log(`   ✅ ${path.basename(file)} present`, 'green');
    } else {
      log(`   ❌ ${path.basename(file)} MISSING!`, 'red');
      allFilesPresent = false;
    }
  }
  
  // Check directories
  const blogImagesDir = path.join(distDir, 'blog-images');
  if (fs.existsSync(blogImagesDir)) {
    const imageCount = fs.readdirSync(blogImagesDir).length;
    log(`   ✅ blog-images/ present (${imageCount} files)`, 'green');
  } else {
    log(`   ⚠️  blog-images/ directory missing - blog posts will have broken images!`, 'yellow');
  }
  
  if (!allFilesPresent) {
    log('\n❌ Critical files missing! Aborting deployment.', 'red');
    process.exit(1);
  }
  
  // Step 4: Deploy to Cloudflare Pages
  currentStep++;
  logStep(currentStep, totalSteps, 'Deploying to Cloudflare Pages...');
  
  if (!execCommand('wrangler pages deploy dist --project-name=privyqr --branch=main', 'Cloudflare deployment')) {
    log('\n❌ Deployment failed!', 'red');
    process.exit(1);
  }
  
  // Step 5: Wait for propagation
  currentStep++;
  logStep(currentStep, totalSteps, 'Waiting 30 seconds for propagation...');
  
  await new Promise(resolve => {
    let countdown = 30;
    const interval = setInterval(() => {
      process.stdout.write(`\r   ${countdown} seconds remaining...`);
      countdown--;
      if (countdown === 0) {
        clearInterval(interval);
        process.stdout.write('\r   ✅ Propagation complete!     \n');
        resolve();
      }
    }, 1000);
  });
  
  // Step 6: Verify deployment
  currentStep++;
  logStep(currentStep, totalSteps, 'Verifying deployment...');
  
  execCommand('curl -I https://privyqr.pages.dev | head -1', 'Site availability check');
  
  // Step 7: Run verification script
  currentStep++;
  logStep(currentStep, totalSteps, 'Running comprehensive verification...');
  
  if (fs.existsSync('verify-deployment.js')) {
    execCommand('node verify-deployment.js', 'Verification tests');
  } else {
    log('   ⚠️  verify-deployment.js not found, skipping...', 'yellow');
  }
  
  // Step 8: Submit to search engines
  currentStep++;
  logStep(currentStep, totalSteps, 'Submitting to search engines...');
  
  // Submit to Google Indexing API
  if (fs.existsSync(path.join('scripts', 'google-indexing-api.mjs'))) {
    execCommand('node scripts/google-indexing-api.mjs', 'Google indexing submission');
  } else {
    log('   ⚠️  google-indexing-api.mjs not found, skipping Google...', 'yellow');
  }
  
  // Submit to IndexNow (Bing, Yandex, Seznam)
  if (fs.existsSync('submit-indexnow.js')) {
    execCommand('node submit-indexnow.js', 'IndexNow submission (Bing/Yandex)');
  }
  
  // Success!
  log('\n' + '=' .repeat(50), 'green');
  log('🎉 Deployment Complete!', 'green');
  log('=' .repeat(50), 'green');
  
  log('\n📊 Deployment Summary:', 'cyan');
  log(`   • Site: https://privyqr.pages.dev`, 'cyan');
  log(`   • Production: https://privyqr.com (when DNS configured)`, 'cyan');
  
  if (fs.existsSync(blogImagesDir)) {
    const imageCount = fs.readdirSync(blogImagesDir).length;
    log(`   • Blog images: ${imageCount} files deployed`, 'cyan');
  }
  
  const totalSize = getDirSize(distDir);
  log(`   • Total size: ${formatBytes(totalSize)}`, 'cyan');
  
  log('\n📝 Post-deployment checklist:', 'yellow');
  log('   1. Check https://privyqr.pages.dev in browser', 'yellow');
  log('   2. Verify blog images are loading', 'yellow');
  log('   3. Test QR code scanning functionality', 'yellow');
  log('   4. Monitor Google Search Console in 24-48h', 'yellow');
  log('');
}

function getDirSize(dir) {
  let size = 0;
  
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      size += getDirSize(filePath);
    } else {
      size += stats.size;
    }
  });
  
  return size;
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Run deployment
deploy().catch(error => {
  log(`\n❌ Deployment failed: ${error.message}`, 'red');
  process.exit(1);
});