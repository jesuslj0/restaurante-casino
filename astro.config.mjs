// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  // www es el dominio real: el apex (sin www) redirige aquí (301). Si `site`
  // apuntara al apex, cada página se autodeclararía canónica hacia una URL
  // que a su vez redirige, y eso es justo lo que Search Console reportó como
  // "Página con redirección" el 05/09/2026.
  site: 'https://www.casinoelbonillo.com',

  // Una sola URL por página, con barra final (/blog/x/), igual que el canonical
  // y el sitemap. Search Console descubría /blog/x sin barra y lo marcaba como
  // "Página alternativa con etiqueta canónica adecuada". La redirección 308
  // de la versión sin barra la hace Vercel (vercel.json).
  trailingSlash: 'always',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [icon()]
});