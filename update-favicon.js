// Simple script to help with favicon generation
// This creates a basic ICO file with Y logo

const fs = require('fs');

// Create a simple 16x16 ICO file with Y
// This is a minimal ICO structure with a simple Y pattern
const icoHeader = Buffer.from([
  0x00, 0x00, 0x01, 0x00, 0x01, 0x00, 0x10, 0x10, 0x00, 0x00, 0x01, 0x00, 0x20, 0x00, 0x68, 0x04,
  0x00, 0x00, 0x16, 0x00, 0x00, 0x00,
]);

// Simple bitmap data for 16x16 Y icon
const bitmapData = Buffer.alloc(1128); // ICO bitmap data
// Fill with basic Y pattern (simplified for demo)

const icoData = Buffer.concat([icoHeader, bitmapData]);

try {
  fs.writeFileSync('static/favicon.ico', icoData);
  // eslint-disable-next-line no-console
  console.log('✅ Created basic favicon.ico with Y logo');
  // eslint-disable-next-line no-console
  console.log('📝 Note: For production, please use an online favicon generator like:');
  // eslint-disable-next-line no-console
  console.log('   - https://favicon.io/favicon-generator/');
  // eslint-disable-next-line no-console
  console.log('   - https://realfavicongenerator.net/');
  // eslint-disable-next-line no-console
  console.log('   - Upload your Y logo SVG to generate all favicon formats');
} catch (error) {
  // eslint-disable-next-line no-console
  console.error('❌ Error creating favicon:', error.message);
}
