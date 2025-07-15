const fs = require('fs');
const { createCanvas } = require('canvas');

// Function to generate ICO format favicon
function generateIcoFavicon() {
  // Create a 32x32 canvas for the main icon
  const canvas = createCanvas(32, 32);
  const ctx = canvas.getContext('2d');

  // Clear the canvas
  ctx.clearRect(0, 0, 32, 32);

  // Draw hexagon background
  const centerX = 16;
  const centerY = 16;
  const radius = 12;

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
  ctx.lineWidth = 1;
  ctx.stroke();

  // Draw the letter Y
  const fontSize = 16;
  ctx.font = `600 ${fontSize}px "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace`;
  ctx.fillStyle = '#64ffda';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // Adjust Y position slightly down for better centering
  ctx.fillText('Y', centerX, centerY + 1);

  // Save as PNG first, then we can manually convert to ICO
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync('./static/favicon-temp.png', buffer);
  // eslint-disable-next-line no-console
  console.log('Generated favicon-temp.png (32x32) - this can be converted to ICO format');

  // Also create a 16x16 version
  const canvas16 = createCanvas(16, 16);
  const ctx16 = canvas16.getContext('2d');

  // Clear the canvas
  ctx16.clearRect(0, 0, 16, 16);

  // Draw hexagon background
  const centerX16 = 8;
  const centerY16 = 8;
  const radius16 = 6;

  ctx16.beginPath();
  for (let i = 0; i < 6; i++) {
    const angle = (i * Math.PI) / 3;
    const x = centerX16 + radius16 * Math.cos(angle);
    const y = centerY16 + radius16 * Math.sin(angle);
    if (i === 0) {
      ctx16.moveTo(x, y);
    } else {
      ctx16.lineTo(x, y);
    }
  }
  ctx16.closePath();

  // Fill hexagon with dark background
  ctx16.fillStyle = '#0a192f';
  ctx16.fill();

  // Stroke hexagon with teal
  ctx16.strokeStyle = '#64ffda';
  ctx16.lineWidth = 0.5;
  ctx16.stroke();

  // Draw the letter Y
  const fontSize16 = 8;
  ctx16.font = `600 ${fontSize16}px "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace`;
  ctx16.fillStyle = '#64ffda';
  ctx16.textAlign = 'center';
  ctx16.textBaseline = 'middle';

  // Adjust Y position slightly down for better centering
  ctx16.fillText('Y', centerX16, centerY16 + 0.5);

  // Save 16x16 version
  const buffer16 = canvas16.toBuffer('image/png');
  fs.writeFileSync('./static/favicon-16-temp.png', buffer16);
  // eslint-disable-next-line no-console
  console.log('Generated favicon-16-temp.png (16x16)');
}

generateIcoFavicon();
