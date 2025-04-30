#!/bin/bash

# Build the frontend
npm run build

# Copy Netlify functions to the dist folder
mkdir -p dist/netlify/functions
cp -r netlify/functions/* dist/netlify/functions/

echo "Netlify build completed successfully!"