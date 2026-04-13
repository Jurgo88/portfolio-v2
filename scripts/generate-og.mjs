import sharp from 'sharp'
import { readFileSync } from 'fs'

const svg = readFileSync('./public/og-image.svg')

sharp(svg)
  .resize(1200, 630)
  .png()
  .toFile('./public/og-image.png')
  .then(info => console.log('✓ og-image.png created:', info))
  .catch(err => console.error('Error:', err))
