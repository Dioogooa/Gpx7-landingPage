const sharp = require('sharp');
const path = require('path');

const width = 360;
const height = 120;
const svg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="65%" font-family="system-ui, sans-serif" font-size="56px" font-weight="900" fill="#F4F6FB" letter-spacing="-1px">
      GPX<tspan fill="#E8501B">7</tspan>
    </text>
    <text x="0" y="96%" font-family="system-ui, sans-serif" font-size="12px" font-weight="bold" fill="#9AA3BC" letter-spacing="3px">
      SOLUÇÕES AUDIOVISUAIS
    </text>
  </svg>
`;

sharp(Buffer.from(svg))
  .png()
  .toFile(path.join(__dirname, 'public', 'images', 'logo-gpx7.png'))
  .then(() => console.log('Logo sem fundo gerada com sucesso!'))
  .catch(console.error);
