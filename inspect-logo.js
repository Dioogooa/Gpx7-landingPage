const sharp = require('sharp');
const path = require('path');
const file = path.join(__dirname, 'public', 'images', 'logo-gpx7.png');

sharp(file).raw().toBuffer({ resolveWithObject: true }).then(({ data, info }) => {
  const colors = {};
  for (let i = 0; i < data.length; i += 4) {
    const a = data[i+3];
    if (a > 128) {
      const r = Math.round(data[i] / 32) * 32;
      const g = Math.round(data[i+1] / 32) * 32;
      const b = Math.round(data[i+2] / 32) * 32;
      const key = `rgb(${r},${g},${b})`;
      colors[key] = (colors[key] || 0) + 1;
    }
  }
  const sorted = Object.entries(colors).sort((a,b) => b[1] - a[1]).slice(0, 10);
  console.log('Top cores dos pixels visíveis:');
  sorted.forEach(([c, count]) => console.log(c, ':', count, 'pixels'));
}).catch(console.error);
