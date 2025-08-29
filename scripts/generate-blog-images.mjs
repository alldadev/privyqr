#!/usr/bin/env node

/**
 * Automated Blog Image Generation for PrivyQR
 * Uses Leonardo.ai API for hero images
 */

import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ============= CONFIGURATION =============
const LEONARDO_API_KEY = process.env.LEONARDO_API_KEY || 'ef6d0af2-e738-4aff-b735-3a1dd493891c';
const LEONARDO_API_URL = 'https://cloud.leonardo.ai/api/rest/v1';

// ============= LEONARDO.AI FUNCTIONS =============

/**
 * Generate hero image with Leonardo.ai
 */
async function generateHeroImage(prompt, blogTitle) {
  console.log('🎨 Generating hero image with Leonardo.ai...');
  
  const response = await fetch(`${LEONARDO_API_URL}/generations`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${LEONARDO_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      prompt: prompt,
      modelId: '6b645e3a-d64f-4341-a6d8-7a3690fbf042', // Leonardo Phoenix
      width: 1024,
      height: 576, // 16:9 aspect ratio
      num_images: 1,
      guidance_scale: 7,
      num_inference_steps: 20,
      public: false,
      promptMagic: false,
      alchemy: false,
      photoReal: false,
      presetStyle: 'CINEMATIC',
      sd_version: 'PHOENIX'
    })
  });

  const data = await response.json();
  
  if (!response.ok) {
    console.error('API Error:', data);
    throw new Error(`API Error: ${data.error || data.message || 'Unknown error'}`);
  }
  
  if (data.sdGenerationJob) {
    console.log(`✅ Generation started: ${data.sdGenerationJob.generationId}`);
    return await pollForCompletion(data.sdGenerationJob.generationId);
  }
  
  throw new Error('Failed to start generation');
}

/**
 * Poll Leonardo.ai for image completion
 */
async function pollForCompletion(generationId, maxAttempts = 30) {
  for (let i = 0; i < maxAttempts; i++) {
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const response = await fetch(`${LEONARDO_API_URL}/generations/${generationId}`, {
      headers: {
        'Authorization': `Bearer ${LEONARDO_API_KEY}`
      }
    });
    
    const data = await response.json();
    
    if (data.generations_by_pk?.status === 'COMPLETE') {
      const imageUrl = data.generations_by_pk.generated_images[0].url;
      console.log(`✅ Image ready: ${imageUrl}`);
      return imageUrl;
    }
    
    console.log(`⏳ Waiting... (${i + 1}/${maxAttempts})`);
  }
  
  throw new Error('Generation timeout');
}

/**
 * Download image from URL
 */
async function downloadImage(url, filename) {
  const response = await fetch(url);
  const buffer = await response.buffer();
  
  const outputPath = path.join(__dirname, '..', 'public', 'blog-images', filename);
  
  // Create directory if it doesn't exist
  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  fs.writeFileSync(outputPath, buffer);
  console.log(`💾 Saved: ${outputPath}`);
  console.log(`\n⚠️  IMPORTANT: Please QA the image for:`);
  console.log(`  • Text spelling errors (AI often garbles text)`);
  console.log(`  • Image quality and relevance`);
  console.log(`  • Appropriate colors and style`);
  console.log(`  • No inappropriate content\n`);
  return outputPath;
}

// ============= PRIVYQR BLOG IMAGE PROMPTS =============

const blogImagePrompts = {
  'qr-code-security-guide': {
    hero: 'Photorealistic image of digital security shield with holographic QR code patterns floating around it, blue and purple gradient lighting, cyber security theme, modern tech aesthetic, cinematic composition, high detail, no text',
    filename: 'hero-qr-security.jpg'
  },
  
  'scan-qr-from-screenshot': {
    hero: 'Photorealistic split screen showing smartphone screen with QR code on left, scanning interface on right, modern device mockup, clean tech design, blue accent lighting, professional product photography style',
    filename: 'hero-screenshot-scan.jpg'
  },
  
  'extract-qr-from-pdf': {
    hero: 'Photorealistic visualization of PDF document pages floating in 3D space with QR codes being extracted and highlighted, modern office environment background, professional lighting, tech innovation theme',
    filename: 'hero-pdf-extract.jpg'
  },
  
  'wifi-qr-codes-guide': {
    hero: 'Photorealistic modern cafe interior with elegant QR code display on table, WiFi signal visualization, warm ambient lighting, lifestyle photography style, cozy atmosphere',
    filename: 'hero-wifi-qr.jpg'
  },
  
  'qr-code-business-cards': {
    hero: 'Photorealistic premium business cards with embedded QR codes, professional office desk setting, elegant minimalist design, soft studio lighting, luxury branding aesthetic',
    filename: 'hero-business-cards.jpg'
  },
  
  'event-qr-codes': {
    hero: 'Photorealistic concert venue entrance with digital QR code ticket scanning, crowd atmosphere, dynamic lighting, event excitement, modern technology integration',
    filename: 'hero-event-qr.jpg'
  },
  
  'restaurant-menu-qr-codes': {
    hero: 'Photorealistic upscale restaurant table setting with elegant QR code menu display, ambient restaurant lighting, fine dining atmosphere, modern hospitality tech',
    filename: 'hero-restaurant-menu.jpg'
  },
  
  'qr-codes-in-education': {
    hero: 'Photorealistic modern classroom with interactive QR codes on smart board, students with tablets, bright educational environment, technology in learning theme',
    filename: 'hero-education-qr.jpg'
  }
};

// ============= AUTOMATION WORKFLOW =============

async function generateBlogImages(blogSlug) {
  console.log(`\n🚀 Generating images for blog: ${blogSlug}\n`);
  
  const config = blogImagePrompts[blogSlug];
  if (!config) {
    console.error(`❌ No prompts defined for: ${blogSlug}`);
    console.log('Available blogs:', Object.keys(blogImagePrompts));
    return;
  }
  
  try {
    const heroUrl = await generateHeroImage(config.hero, blogSlug);
    await downloadImage(heroUrl, config.filename);
    console.log(`\n✅ Hero image generated for: ${blogSlug}`);
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

// ============= BATCH PROCESSING =============

async function generateAllBlogImages() {
  const blogs = Object.keys(blogImagePrompts);
  
  for (const blog of blogs) {
    await generateBlogImages(blog);
    await new Promise(resolve => setTimeout(resolve, 3000)); // Rate limiting
  }
}

// ============= CLI USAGE =============

const args = process.argv.slice(2);

if (args[0] === '--all') {
  generateAllBlogImages();
} else if (args[0]) {
  generateBlogImages(args[0]);
} else {
  console.log(`
📸 PrivyQR Blog Image Generator
================================

Usage:
  node scripts/generate-blog-images.mjs <blog-slug>     Generate images for specific blog
  node scripts/generate-blog-images.mjs --all           Generate for all blogs
  
Available blogs:
${Object.keys(blogImagePrompts).map(b => `  - ${b}`).join('\n')}

Setup:
1. Leonardo.ai API key is already configured
2. Run this script to generate hero images
3. Images will be saved to public/blog-images/
  `);
}

export { generateHeroImage, generateBlogImages };