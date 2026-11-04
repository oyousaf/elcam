import { defineConfig, envField } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Search indexing stays off until SITE_INDEXABLE=true is set on purpose.
// When switching it on, also remove X-Robots-Tag from vercel.json.
const indexable = process.env.SITE_INDEXABLE === 'true';

export default defineConfig({
  site: 'https://elcam.legxcysol.dev',
  trailingSlash: 'always',
  adapter: vercel(),
  integrations: indexable ? [sitemap()] : [],
  devToolbar: { enabled: false },
  // External stylesheets only, so the CSP can stay free of 'unsafe-inline'.
  build: { inlineStylesheets: 'never' },
  env: {
    schema: {
      RESEND_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
      ENQUIRY_TO: envField.string({ context: 'server', access: 'secret', optional: true }),
      ENQUIRY_FROM: envField.string({ context: 'server', access: 'secret', optional: true }),
    },
  },
  // Every URL on the current site keeps working.
  redirects: {
    '/domestic-property': '/homes/',
    '/domestic-property/garage-conversions-extensions': '/homes/garage-conversions-extensions/',
    '/domestic-property/tiling': '/homes/tiling/',
    '/domestic-property/carpentry-joinery': '/homes/carpentry-joinery/',
    '/domestic-property/kitchen-and-bathroom-renovation': '/homes/kitchens-bathrooms/',
    '/painting-decorating': '/homes/painting-decorating/',
    '/property-maintenance': '/maintenance/',
    '/property-maintenance/insurance-work': '/maintenance/insurance-work/',
    '/property-maintenance/electrical-maintenance-services': '/maintenance/electrical/',
    '/property-maintenance/plumbing-services': '/maintenance/plumbing/',
    '/commercial-property': '/businesses/',
    '/commercial-property/contract-maintenance': '/businesses/contract-maintenance/',
    '/commercial-property/fire-door-maintenance': '/businesses/fire-doors/',
    '/commercial-property/partitioning-suspended-ceilings': '/businesses/partitioning-suspended-ceilings/',
    '/contact-us-here': '/contact/',
    '/news': '/about/',
    '/offers': '/about/',
  },
  vite: {
    plugins: [tailwindcss()],
    // Scripts stay external so the CSP needs no inline script allowance.
    build: { assetsInlineLimit: 0 },
    define: { __INDEXABLE__: JSON.stringify(indexable) },
  },
});
