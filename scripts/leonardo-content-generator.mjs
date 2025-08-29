#!/usr/bin/env node
/**
 * Leonardo.ai Content Generator for PrivyQR
 * Generates images and animations for website engagement
 */

import fetch from 'node-fetch';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const CONFIG = {
  API_KEY: process.env.LEONARDO_API_KEY || 'ef6d0af2-e738-4aff-b735-3a1dd493891c',
  
  // Model IDs from Leonardo.ai
  MODELS: {
    LIGHTNING_XL: 'b24e16ff-06e3-43eb-8d33-4416c2d75876', // Fast, cost-effective
    PHOENIX: '6b645e3a-d64f-4341-a6d8-7a3690fbf042', // High quality
    KINO_XL: 'aa77f04e-3eec-4034-9c07-d0f619684628', // Cinematic
    VISION_XL: '5c232a9e-9061-4777-980a-ddc8e65647c6', // Photorealistic
  },
  
  // PrivyQR Brand Guidelines
  BRAND: {
    colors: 'purple gradient, dark mode, privacy-focused aesthetic',
    mood: 'secure, private, trustworthy, modern',
    elements: 'QR codes, shield icons, privacy locks, scanning animations',
    avoid: 'tracking symbols, cloud icons, server imagery'
  },
  
  // Content dimensions
  DIMENSIONS: {
    BLOG_HERO: { width: 1024, height: 576 },
    FEATURE_SQUARE: { width: 512, height: 512 },
    SOCIAL_MEDIA: { width: 1200, height: 630 },
    THUMBNAIL: { width: 400, height: 300 },
    LOGO: { width: 512, height: 512 }
  }
};

// Prompt templates for consistency
const PROMPTS = {
  blogHero: (title) => 
    `Professional blog hero image for article titled '${title}', 
    dark mode privacy-focused aesthetic with purple gradients, 
    QR code scanning theme, shield and lock symbols for security,
    clean minimalist design, high quality graphics, no text`,
  
  logo: () =>
    `Modern logo design for PrivyQR app, minimalist QR code combined with privacy shield,
    purple and dark colors, scalable vector style, app icon suitable,
    professional tech branding, no text, geometric and clean`,
  
  feature: (feature) =>
    `Feature illustration for '${feature}', dark mode interface,
    purple accent colors, privacy and security focused,
    QR code scanning visualization, modern tech aesthetic,
    clean vector graphics, no text`,
  
  social: (campaign) =>
    `Social media graphic for '${campaign}', privacy-first messaging,
    QR code scanner app promotion, dark theme with purple highlights,
    trust and security symbols, modern design, no text`
};

// Leonardo.ai API wrapper
class LeonardoAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = 'https://cloud.leonardo.ai/api/rest/v1';
  }

  async generateImage(prompt, options = {}) {
    const response = await fetch(`${this.baseURL}/generations`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt,
        modelId: options.modelId || CONFIG.MODELS.LIGHTNING_XL,
        width: options.width || 512,
        height: options.height || 512,
        num_images: options.numImages || 1,
        guidance_scale: options.guidanceScale || 7,
        num_inference_steps: options.inferenceSteps || 30,
        scheduler: options.scheduler || 'LEONARDO',
        public: false,
        tiling: false,
        ...options.extra
      })
    });

    if (!response.ok) {
      throw new Error(`Leonardo API error: ${response.statusText}`);
    }

    return response.json();
  }

  async getGeneration(generationId) {
    const response = await fetch(`${this.baseURL}/generations/${generationId}`, {
      headers: {
        'Authorization': `Bearer ${this.apiKey}`
      }
    });

    if (!response.ok) {
      throw new Error(`Leonardo API error: ${response.statusText}`);
    }

    return response.json();
  }

  async waitForGeneration(generationId, maxWait = 60000) {
    const startTime = Date.now();
    
    while (Date.now() - startTime < maxWait) {
      const generation = await this.getGeneration(generationId);
      
      if (generation.generations_by_pk?.status === 'COMPLETE') {
        return generation.generations_by_pk;
      }
      
      if (generation.generations_by_pk?.status === 'FAILED') {
        throw new Error('Generation failed');
      }
      
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
    
    throw new Error('Generation timeout');
  }

  async downloadImage(url, filepath) {
    const response = await fetch(url);
    const buffer = await response.buffer();
    await fs.writeFile(filepath, buffer);
    return filepath;
  }
}

// Content generation functions
async function generateLogo() {
  const api = new LeonardoAPI(CONFIG.API_KEY);
  
  console.log('🎨 Generating PrivyQR logo...');
  
  const generation = await api.generateImage(PROMPTS.logo(), {
    modelId: CONFIG.MODELS.PHOENIX,
    ...CONFIG.DIMENSIONS.LOGO,
    numImages: 4
  });
  
  const result = await api.waitForGeneration(generation.sdGenerationJob.generationId);
  
  const outputDir = path.join(__dirname, '..', 'public', 'branding');
  await fs.mkdir(outputDir, { recursive: true });
  
  for (let i = 0; i < result.generated_images.length; i++) {
    const image = result.generated_images[i];
    const filepath = path.join(outputDir, `logo-option-${i + 1}.png`);
    await api.downloadImage(image.url, filepath);
    console.log(`✅ Saved logo option ${i + 1}: ${filepath}`);
  }
}

async function generateBlogHero(title, slug) {
  const api = new LeonardoAPI(CONFIG.API_KEY);
  
  console.log(`📝 Generating blog hero for: ${title}`);
  
  const generation = await api.generateImage(PROMPTS.blogHero(title), {
    modelId: CONFIG.MODELS.LIGHTNING_XL,
    ...CONFIG.DIMENSIONS.BLOG_HERO
  });
  
  const result = await api.waitForGeneration(generation.sdGenerationJob.generationId);
  
  const outputDir = path.join(__dirname, '..', 'public', 'blog', 'heroes');
  await fs.mkdir(outputDir, { recursive: true });
  
  const image = result.generated_images[0];
  const filepath = path.join(outputDir, `${slug}.jpg`);
  await api.downloadImage(image.url, filepath);
  
  console.log(`✅ Saved blog hero: ${filepath}`);
  return filepath;
}

async function generateFeatureGraphics() {
  const api = new LeonardoAPI(CONFIG.API_KEY);
  
  const features = [
    'PDF QR Scanning',
    'Webcam Scanner',
    'Batch Processing',
    'Privacy Shield',
    'Instant Results',
    'No Upload Required'
  ];
  
  const outputDir = path.join(__dirname, '..', 'public', 'features');
  await fs.mkdir(outputDir, { recursive: true });
  
  for (const feature of features) {
    console.log(`🔧 Generating graphic for: ${feature}`);
    
    const generation = await api.generateImage(PROMPTS.feature(feature), {
      modelId: CONFIG.MODELS.LIGHTNING_XL,
      ...CONFIG.DIMENSIONS.FEATURE_SQUARE
    });
    
    const result = await api.waitForGeneration(generation.sdGenerationJob.generationId);
    
    const image = result.generated_images[0];
    const slug = feature.toLowerCase().replace(/\s+/g, '-');
    const filepath = path.join(outputDir, `${slug}.png`);
    await api.downloadImage(image.url, filepath);
    
    console.log(`✅ Saved feature graphic: ${filepath}`);
  }
}

// CLI commands
const commands = {
  logo: generateLogo,
  'blog-hero': async (args) => {
    const title = args[0];
    const slug = args[1] || title.toLowerCase().replace(/\s+/g, '-');
    return generateBlogHero(title, slug);
  },
  features: generateFeatureGraphics,
  all: async () => {
    await generateLogo();
    await generateFeatureGraphics();
  }
};

// Main execution
async function main() {
  const command = process.argv[2];
  const args = process.argv.slice(3);
  
  if (!command || !commands[command]) {
    console.log(`
Leonardo.ai Content Generator for PrivyQR

Usage:
  node leonardo-content-generator.mjs <command> [args]

Commands:
  logo                 Generate logo options
  blog-hero <title> [slug]  Generate blog hero image
  features            Generate feature graphics
  all                 Generate all content

Example:
  node leonardo-content-generator.mjs logo
  node leonardo-content-generator.mjs blog-hero "How to Scan QR Codes Privately"
    `);
    process.exit(1);
  }
  
  try {
    await commands[command](args);
    console.log('✨ Generation complete!');
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { LeonardoAPI, CONFIG, PROMPTS };