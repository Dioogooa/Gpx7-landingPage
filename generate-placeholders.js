const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const baseDir = path.join(__dirname, 'public', 'images');

// Garante que os diretórios existam
fs.mkdirSync(baseDir, { recursive: true });
fs.mkdirSync(path.join(baseDir, 'formatos'), { recursive: true });
fs.mkdirSync(path.join(baseDir, 'eventos'), { recursive: true });

async function createPlaceholder({ width, height, text, outputPath, bg = '#121830', isPng = false }) {
  const svg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${bg}" />
          <stop offset="100%" stop-color="#0B0F1C" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#grad)" />
      <circle cx="${width * 0.8}" cy="${height * 0.2}" r="${Math.min(width, height) * 0.25}" fill="#E8501B" opacity="0.15" />
      <circle cx="${width * 0.2}" cy="${height * 0.8}" r="${Math.min(width, height) * 0.35}" fill="#E8501B" opacity="0.08" />
      <text x="50%" y="48%" dominant-baseline="middle" text-anchor="middle" font-family="system-ui, sans-serif" font-size="${Math.max(20, Math.round(width * 0.045))}px" font-weight="bold" fill="#F4F6FB">
        ${text}
      </text>
      <text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" font-family="system-ui, sans-serif" font-size="${Math.max(14, Math.round(width * 0.022))}px" fill="#E8501B" letter-spacing="2px">
        GPX7 AUDIOVISUAL
      </text>
    </svg>
  `;

  const pipeline = sharp(Buffer.from(svg));
  if (isPng) {
    await pipeline.png().toFile(outputPath);
  } else {
    await pipeline.jpeg({ quality: 85 }).toFile(outputPath);
  }
  console.log(`Gerado: ${outputPath}`);
}

async function createLogo(outputPath) {
  const width = 360;
  const height = 160;
  const svg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" rx="16" fill="#FFFFFF" />
      <text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" font-family="system-ui, sans-serif" font-size="52px" font-weight="900" fill="#0B0F1C" letter-spacing="-1px">
        GPX<tspan fill="#E8501B">7</tspan>
      </text>
      <text x="50%" y="72%" dominant-baseline="middle" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12px" font-weight="bold" fill="#9AA3BC" letter-spacing="3px">
        SOLUÇÕES AUDIOVISUAIS
      </text>
    </svg>
  `;
  await sharp(Buffer.from(svg)).png().toFile(outputPath);
  console.log(`Logo gerado: ${outputPath}`);
}

async function run() {
  // Logo
  await createLogo(path.join(baseDir, 'logo-gpx7.png'));

  // Hero & CTA & OG
  await createPlaceholder({ width: 1920, height: 1080, text: 'Estrutura &amp; Tecnologia', outputPath: path.join(baseDir, 'hero.jpg') });
  await createPlaceholder({ width: 1920, height: 1080, text: 'Realize seu Próximo Evento', outputPath: path.join(baseDir, 'cta-bg.jpg') });
  await createPlaceholder({ width: 1200, height: 630, text: 'GPX7 Soluções Audiovisuais', outputPath: path.join(baseDir, 'og-image.jpg') });

  // Formatos (4:3)
  const formatos = [
    { file: 'congressos.jpg', text: 'Congressos e Auditórios' },
    { file: 'salas-simultaneas.jpg', text: 'Salas Simultâneas' },
    { file: 'feiras.jpg', text: 'Feiras e Estandes' },
    { file: 'convencoes.jpg', text: 'Convenções Corporativas' }
  ];
  for (const f of formatos) {
    await createPlaceholder({ width: 1200, height: 900, text: f.text, outputPath: path.join(baseDir, 'formatos', f.file) });
  }

  // Eventos (1:1)
  const eventos = [
    { file: 'cirurgia-cardiovascular.jpg', text: 'Cirurgia Cardiovascular' },
    { file: 'ficomex.jpg', text: 'FICOMEX' },
    { file: 'expopecas.jpg', text: 'ExpoPeças' },
    { file: 'fast-summit.jpg', text: 'Fast Summit' },
    { file: 'hackathon-saude-digital.jpg', text: 'Hackathon Saúde Digital' },
    { file: 'ficomex-arena.jpg', text: 'FICOMEX Arena' }
  ];
  for (const e of eventos) {
    await createPlaceholder({ width: 900, height: 900, text: e.text, outputPath: path.join(baseDir, 'eventos', e.file) });
  }

  console.log('Todos os placeholders foram gerados com sucesso!');
}

run().catch(console.error);
