#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('🚀 Starting Vercel build...');
console.log('📂 Current directory:', process.cwd());
console.log('📁 Directory contents:', fs.readdirSync('.'));

try {
  // Check if client directory exists
  if (!fs.existsSync('client')) {
    throw new Error('Client directory not found');
  }

  // Change to client directory
  process.chdir('client');
  console.log('📁 Changed to client directory:', process.cwd());

  // Check if package.json exists
  if (!fs.existsSync('package.json')) {
    throw new Error('package.json not found in client directory');
  }

  // Install dependencies
  console.log('📦 Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });

  // Check if node_modules exists
  if (!fs.existsSync('node_modules')) {
    throw new Error('node_modules not found after npm install');
  }

  // Build the project
  console.log('🔨 Building project...');
  execSync('npm run build', { stdio: 'inherit' });

  // Check if build directory exists
  if (!fs.existsSync('build')) {
    throw new Error('Build directory not created');
  }

  console.log('✅ Build completed successfully!');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  console.error('Stack trace:', error.stack);
  process.exit(1);
}
