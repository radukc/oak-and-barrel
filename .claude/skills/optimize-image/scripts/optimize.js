#!/usr/bin/env node

import sharp from 'sharp';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function optimizeImage(url, filename, width = 800, height = null) {
  if (!url || !filename) {
    console.error('Usage: node optimize.js <url> <filename> [width] [height]');
    console.error('  url      - Full URL of the image to download');
    console.error('  filename - Output filename (without extension)');
    console.error('  width    - Target width in pixels (default: 800)');
    console.error('  height   - Target height (optional, maintains aspect ratio)');
    process.exit(1);
  }

  // Parse dimensions
  const targetWidth = parseInt(width, 10) || 800;
  const targetHeight = height ? parseInt(height, 10) : null;

  // Find project root (go up from scripts folder)
  const projectRoot = join(__dirname, '..', '..', '..', '..');
  const publicDir = join(projectRoot, 'public');
  const outputPath = join(publicDir, `${filename}.webp`);

  try {
    // Ensure public directory exists
    if (!existsSync(publicDir)) {
      await mkdir(publicDir, { recursive: true });
    }

    console.log(`Downloading: ${url}`);

    // Fetch the image
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to download image: ${response.status} ${response.statusText}`);
    }

    const imageBuffer = Buffer.from(await response.arrayBuffer());
    const originalSize = imageBuffer.length;

    // Get original image metadata
    const metadata = await sharp(imageBuffer).metadata();
    console.log(`Original: ${metadata.width}x${metadata.height}, ${formatSize(originalSize)}`);

    // Resize and convert to WebP
    const resizeOptions = {
      width: targetWidth,
      fit: 'inside',
      withoutEnlargement: true
    };

    if (targetHeight) {
      resizeOptions.height = targetHeight;
    }

    const optimizedBuffer = await sharp(imageBuffer)
      .resize(resizeOptions)
      .webp({ quality: 80 })
      .toBuffer();

    // Get final dimensions
    const finalMetadata = await sharp(optimizedBuffer).metadata();
    const finalSize = optimizedBuffer.length;
    const savings = ((1 - finalSize / originalSize) * 100).toFixed(1);

    // Write the file
    await writeFile(outputPath, optimizedBuffer);

    console.log(`\nDownloaded and optimized: public/${filename}.webp`);
    console.log(`  Dimensions: ${finalMetadata.width}x${finalMetadata.height}`);
    console.log(`  Size: ${formatSize(finalSize)} (saved ${savings}% from original)`);

  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

// Get arguments (skip node and script path)
const [,, url, filename, width, height] = process.argv;
optimizeImage(url, filename, width, height);
