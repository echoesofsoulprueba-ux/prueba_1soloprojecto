const fs = require('fs')
const path = require('path')

// Esto es lo que hace que la página "levante sola" los estilos apenas la app exporte en
// modo EMBEDDED: si design-system/tailwind-preset.js todavía no existe (antes del export),
// Tailwind arranca sin preset — colores default, página sin marca. En cuanto ese archivo
// aparezca ahí (después del export/PR), Tailwind lo toma automáticamente en el próximo
// arranque de `npm run dev` — sin tocar este archivo a mano.
const presetPath = path.join(__dirname, 'design-system', 'tailwind-preset.js')
const hasPreset = fs.existsSync(presetPath)

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Importante: si no hay preset todavía, NO declaramos la clave `presets` (ni siquiera como
  // array vacío) — un `presets: []` explícito hace que Tailwind descarte también su propio tema
  // default (fuentes, espaciados, etc.), no solo el del design system. Omitir la clave del todo
  // deja el comportamiento default de Tailwind intacto hasta que el preset real aparezca.
  ...(hasPreset ? { presets: [require(presetPath)] } : {}),
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
    './design-system/**/*.{js,jsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
