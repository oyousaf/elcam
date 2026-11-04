import type { APIRoute } from 'astro';

// Crawling stays allowed so search engines can see the noindex directive.
export const GET: APIRoute = ({ site }) => {
  const lines = ['User-agent: *', 'Allow: /'];
  if (__INDEXABLE__) lines.push('', `Sitemap: ${new URL('/sitemap-index.xml', site)}`);
  return new Response(lines.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
