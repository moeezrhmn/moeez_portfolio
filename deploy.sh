#!/bin/bash
set -e

echo "Deploying moeezrehman.quanter.dev..."

echo "Installing dependencies..."
npm install

echo "Building the app..."
npm run build

echo "Copying static files..."
cp -r .next/static .next/standalone/.next/static
cp -r public .next/standalone/public

echo "Restarting PM2..."
pm2 restart nextjs-standalone

echo "Deploy complete."
