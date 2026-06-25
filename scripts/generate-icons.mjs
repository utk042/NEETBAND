/**
 * generate-icons.mjs
 * Run with: node scripts/generate-icons.mjs
 * Requires: sharp (npm install -D sharp)
 *
 * Reads the master icon from the artifacts directory and outputs
 * all required PWA icon sizes into public/icons/.
 */

import sharp from 'sharp';
import { mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// Master source — the generated 512x512 icon
const SOURCE = join(
  'C:/Users/UTKARSH/.gemini/antigravity/brain/406e0d7d-7904-4de4-b673-79a0a2ab2b5a',
  'pwa_icon_master_1782400615407.png'
);

const OUT_DIR = join(ROOT, 'public', 'icons');
mkdirSync(OUT_DIR, { recursive: true });

const SIZES = [72, 96, 128, 144, 152, 192, 384, 512];

// Standard square icons
for (const size of SIZES) {
  await sharp(SOURCE)
    .resize(size, size, { fit: 'contain', background: { r: 7, g: 18, b: 45, alpha: 1 } })
    .png()
    .toFile(join(OUT_DIR, `icon-${size}x${size}.png`));
  console.log(`✅  icon-${size}x${size}.png`);
}

// iOS splash screens (dark navy fill, centered icon)
const splashSpecs = [
  { name: 'splash-1170x2532.png', w: 1170, h: 2532 },
  { name: 'splash-1125x2436.png', w: 1125, h: 2436 },
  { name: 'splash-828x1792.png',  w: 828,  h: 1792 },
];

for (const { name, w, h } of splashSpecs) {
  const iconSize = Math.round(Math.min(w, h) * 0.35);
  const left     = Math.round((w - iconSize) / 2);
  const top      = Math.round((h - iconSize) / 2);

  const icon = await sharp(SOURCE)
    .resize(iconSize, iconSize, { fit: 'contain', background: { r: 7, g: 18, b: 45, alpha: 1 } })
    .toBuffer();

  await sharp({ create: { width: w, height: h, channels: 4, background: { r: 7, g: 18, b: 45, alpha: 1 } } })
    .composite([{ input: icon, left, top }])
    .png()
    .toFile(join(OUT_DIR, name));
  console.log(`✅  ${name}`);
}

// Placeholder screenshots (solid colour with centred icon — replace with real screenshots later)
const screenshotDir = join(ROOT, 'public', 'screenshots');
mkdirSync(screenshotDir, { recursive: true });

const screenshots = [
  { name: 'desktop.png', w: 1280, h: 800 },
  { name: 'mobile.png',  w: 390,  h: 844 },
];

for (const { name, w, h } of screenshots) {
  const iconSize = Math.round(Math.min(w, h) * 0.25);
  const left     = Math.round((w - iconSize) / 2);
  const top      = Math.round((h - iconSize) / 2);

  const icon = await sharp(SOURCE)
    .resize(iconSize, iconSize, { fit: 'contain', background: { r: 7, g: 18, b: 45, alpha: 1 } })
    .toBuffer();

  await sharp({ create: { width: w, height: h, channels: 4, background: { r: 7, g: 18, b: 45, alpha: 1 } } })
    .composite([{ input: icon, left, top }])
    .png()
    .toFile(join(screenshotDir, name));
  console.log(`✅  screenshots/${name}`);
}

console.log('\n🎉  All PWA assets generated in public/icons/ and public/screenshots/');
