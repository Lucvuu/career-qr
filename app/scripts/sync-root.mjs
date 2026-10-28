import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appDir = path.resolve(__dirname, '..');
const rootDir = path.resolve(appDir, '..');
const distDir = path.join(appDir, 'dist');

if (!fs.existsSync(distDir)) {
  console.error('Error: dist directory does not exist. Run vite build first.');
  process.exit(1);
}

// 1. Sync dist/index.html -> ../index.html
const distIndex = path.join(distDir, 'index.html');
const rootIndex = path.join(rootDir, 'index.html');
fs.copyFileSync(distIndex, rootIndex);

// 2. Sync dist/assets/* -> ../assets/* (remove stale index-*.js / index-*.css while keeping css/, js/, img/)
const distAssetsDir = path.join(distDir, 'assets');
const rootAssetsDir = path.join(rootDir, 'assets');
fs.mkdirSync(rootAssetsDir, { recursive: true });

for (const entry of fs.readdirSync(rootAssetsDir, { withFileTypes: true })) {
  if (entry.isFile() && /^index-.*\.(js|css|map)$/i.test(entry.name)) {
    fs.unlinkSync(path.join(rootAssetsDir, entry.name));
  }
}

if (fs.existsSync(distAssetsDir)) {
  for (const entry of fs.readdirSync(distAssetsDir, { withFileTypes: true })) {
    if (entry.isFile()) {
      fs.copyFileSync(
        path.join(distAssetsDir, entry.name),
        path.join(rootAssetsDir, entry.name)
      );
    }
  }
}

// 3. Sync dist/logos/* -> ../logos/*
const distLogosDir = path.join(distDir, 'logos');
const rootLogosDir = path.join(rootDir, 'logos');
if (fs.existsSync(distLogosDir)) {
  fs.mkdirSync(rootLogosDir, { recursive: true });
  for (const entry of fs.readdirSync(distLogosDir, { withFileTypes: true })) {
    if (entry.isFile()) {
      fs.copyFileSync(
        path.join(distLogosDir, entry.name),
        path.join(rootLogosDir, entry.name)
      );
    }
  }
}

console.log('✓ Synced dist/index.html, dist/assets/*, and dist/logos/* to workspace root.');

