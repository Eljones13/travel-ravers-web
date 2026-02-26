import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

// Usage:
//   node screenshot.mjs                          → mobile (390×844)
//   node screenshot.mjs desktop                  → desktop (1440×900)
//   node screenshot.mjs mobile label             → adds label suffix to filename
//   node screenshot.mjs http://localhost:5173 label

const args = process.argv.slice(2);

// Detect if first arg is a URL, viewport preset, or label
let url = 'http://localhost:5173';
let viewport = null;
let label = '';

for (const arg of args) {
  if (arg.startsWith('http')) {
    url = arg;
  } else if (arg === 'desktop') {
    viewport = { width: 1440, height: 900, deviceScaleFactor: 2 };
  } else if (arg === 'tablet') {
    viewport = { width: 768, height: 1024, deviceScaleFactor: 2 };
  } else if (arg === 'mobile' || arg === 'sm') {
    viewport = { width: 390, height: 844, deviceScaleFactor: 3, isMobile: true, hasTouch: true };
  } else {
    label = arg;
  }
}

// Default to mobile if no viewport specified
if (!viewport) {
  viewport = { width: 390, height: 844, deviceScaleFactor: 3, isMobile: true, hasTouch: true };
}

// Auto-increment output filename
const outDir = './screenshots';
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

const existingFiles = fs.readdirSync(outDir).filter(f => f.endsWith('.png'));
const nums = existingFiles.map(f => parseInt(f.match(/^screenshot-(\d+)/)?.[1] ?? 0)).filter(Boolean);
const next = nums.length ? Math.max(...nums) + 1 : 1;
const suffix = label ? `-${label}` : '';
const viewportTag = viewport.isMobile ? '-mobile' : viewport.width === 768 ? '-tablet' : '-desktop';
const outFile = path.join(outDir, `screenshot-${next}${viewportTag}${suffix}.png`);

const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
  headless: 'new',
});

const page = await browser.newPage();
await page.setViewport(viewport);

// Emulate iPhone 14 user-agent on mobile
if (viewport.isMobile) {
  await page.setUserAgent(
    'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1'
  );
}

await page.goto(url, { waitUntil: 'networkidle2', timeout: 15000 });

// Wait for fonts + animations to settle
await new Promise(r => setTimeout(r, 800));

await page.screenshot({ path: outFile, fullPage: true });
await browser.close();

console.log(`✓ ${outFile}  (${viewport.width}×${viewport.height})`);
