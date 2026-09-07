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

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [icon()]
});