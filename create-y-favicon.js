const fs = require('fs');

// Create a minimal 16x16 ICO file with Y using a basic pattern
// This is a simplified ICO format that should work in most browsers

// ICO header (22 bytes)
const header = Buffer.from([
  0x00,
  0x00, // Reserved (0)
  0x01,
  0x00, // Image type (1 = ICO)
  0x01,
  0x00, // Number of images (1)

  // Image directory entry (16 bytes)
  0x10, // Width (16)
  0x10, // Height (16)
  0x00, // Color count (0 = 256 colors)
  0x00, // Reserved (0)
  0x01,
  0x00, // Color planes (1)
  0x20,
  0x00, // Bits per pixel (32)
  0x00,
  0x04,
  0x00,
  0x00, // Bitmap data size (1024 bytes)
  0x16,
  0x00,
  0x00,
  0x00, // Offset to bitmap data (22)
]);

// Create 16x16 bitmap data (BGRA format, 32-bit)
const bitmapData = Buffer.alloc(1024); // 16 * 16 * 4 bytes = 1024 bytes

// Fill with Y pattern
for (let y = 0; y < 16; y++) {
  for (let x = 0; x < 16; x++) {
    const offset = (y * 16 + x) * 4;

    // Create Y pattern
    let isY = false;

    // Top part of Y (arms)
    if (y >= 3 && y <= 7) {
      if (
        (x >= 3 && x <= 5 && Math.abs(x - 4) <= Math.abs(y - 3)) ||
        (x >= 10 && x <= 12 && Math.abs(x - 11) <= Math.abs(y - 3))
      ) {
        isY = true;
      }
    }

    // Middle and bottom part of Y (stem)
    if (y >= 8 && y <= 12 && x >= 7 && x <= 8) {
      isY = true;
    }

    if (isY) {
      // Green color (#64ffda)
      bitmapData[offset] = 0xda; // Blue
      bitmapData[offset + 1] = 0xff; // Green
      bitmapData[offset + 2] = 0x64; // Red
      bitmapData[offset + 3] = 0xff; // Alpha
    } else {
      // Dark background (#0a192f)
      bitmapData[offset] = 0x2f; // Blue
      bitmapData[offset + 1] = 0x19; // Green
      bitmapData[offset + 2] = 0x0a; // Red
      bitmapData[offset + 3] = 0xff; // Alpha
    }
  }
}

// Combine header and bitmap data
const icoData = Buffer.concat([header, bitmapData]);

// Write to favicon.ico
fs.writeFileSync('static/favicon.ico', icoData);
// eslint-disable-next-line no-console
console.log('✅ Created favicon.ico with Y logo');
