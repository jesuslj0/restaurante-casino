// ============================================================
//  /sitemap.xml — generado en el build
// ------------------------------------------------------------
//  Sustituye al public/sitemap.xml escrito a mano, que solo
//  tenía la home y la carta. Ahora cada entrada nueva del blog
//  entra sola al compilar, sin acordarse de tocar nada. Misma
//  URL que antes, así que robots.txt y Search Console siguen
//  apuntando al sitio correcto.
//
//  Las URLs van con barra final, igual que el canonical que
//  genera el build: un sitemap que anuncia una URL distinta de
//  la canónica es una señal contradictoria para Google.
// ============================================================
import type { APIRoute } from 'astro';
import { publicados } from '../lib/blog-posts';
import { POR_PAGINA, fechaISO } from '../lib/blog';

const xml = (v: string) =>
  v.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const GET: APIRoute = async ({ site }) => {
  const base = (site ?? new URL('https://www.casinoelbonillo.com')).origin;
  const posts = await publicados();
  const paginas = Math.max(1, Math.ceil((posts.length - 1) / POR_PAGINA));

  const url = (loc: string, extra = '') =>
    `  <url>\n    <loc>${xml(base + loc)}</loc>${extra}\n  </url>`;

  const urls = [
    url('/', '\n    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>'),
    url('/carta/', '\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>'),
    url('/blog/', '\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>'),
    ...Array.from({ length: paginas - 1 }, (_, i) => url(`/blog/pagina/${i + 2}/`)),
    ...posts.map((p) =>
      url(`/blog/${p.id}/`, `\n    <lastmod>${fechaISO(p.data.actualizado ?? p.data.fecha)}</lastmod>\n    <priority>0.7</priority>`)
    ),
  ];

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } }
  );
};
