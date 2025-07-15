const fs = require('fs');
const { createCanvas } = require('canvas');

// Define all the favicon sizes we need to generate
const faviconSizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-96x96.png', size: 96 },
  { name: 'android-icon-36x36.png', size: 36 },
  { name: 'android-icon-48x48.png', size: 48 },
  { name: 'android-icon-72x72.png', size: 72 },
  { name: 'android-icon-96x96.png', size: 96 },
  { name: 'android-icon-144x144.png', size: 144 },
  { name: 'android-icon-192x192.png', size: 192 },
  { name: 'apple-icon-57x57.png', size: 57 },
  { name: 'apple-icon-60x60.png', size: 60 },
  { name: 'apple-icon-72x72.png', size: 72 },
  { name: 'apple-icon-76x76.png', size: 76 },
  { name: 'apple-icon-114x114.png', size: 114 },
  { name: 'apple-icon-120x120.png', size: 120 },
  { name: 'apple-icon-144x144.png', size: 144 },
  { name: 'apple-icon-152x152.png', size: 152 },
  { name: 'apple-icon-180x180.png', size: 180 },
  { name: 'apple-icon-precomposed.png', size: 180 },
  { name: 'apple-icon.png', size: 180 },
  { name: 'ms-icon-70x70.png', size: 70 },
  { name: 'ms-icon-144x144.png', size: 144 },
  { name: 'ms-icon-150x150.png', size: 150 },
  { name: 'ms-icon-310x310.png', size: 310 },
];

function generateFavicon(size, filename) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');

  // Clear the canvas
  ctx.clearRect(0, 0, size, size);

  // Draw hexagon background
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = size * 0.4;

  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const angle = (i * Math.PI) / 3;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }
  ctx.closePath();

  // Fill hexagon with dark background
  ctx.fillStyle = '#0a192f';
  ctx.fill();

  // Stroke hexagon with teal
  ctx.strokeStyle = '#64ffda';
  ctx.lineWidth = Math.max(1, size / 32);
  ctx.stroke();

  // Draw the letter Y
  const fontSize = size * 0.5;
  ctx.font = `600 ${fontSize}px "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace`;
  ctx.fillStyle = '#64ffda';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // Adjust Y position slightly down for better centering
  ctx.fillText('Y', centerX, centerY + fontSize * 0.05);

  // Save the canvas as PNG
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(`./static/${filename}`, buffer);
  // eslint-disable-next-line no-console
  console.log(`Generated ${filename} (${size}x${size})`);
}

// Generate all favicon sizes
// eslint-disable-next-line no-console
console.log('Generating all favicon files with "Y" logo...');
faviconSizes.forEach(({ name, size }) => {
  generateFavicon(size, name);
});

// eslint-disable-next-line no-console
console.log('All favicon files generated successfully!');
