import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://accessablecompression.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    react(),
    sitemap({
      filter: (page) =>
        !page.includes('/pro/dashboard') &&
        !page.includes('/pro/login') &&
        // /pro/resources is a placeholder reserved for future content; the
        // route is force-301'd to /pro/learn in netlify.toml. Excluded from
        // the sitemap so search engines stop being told to crawl it.
        !page.includes('/pro/resources') &&
        // /pro/learn is intentionally NOT excluded here. While it's a
        // placeholder hub (zero published Pro articles), the page itself emits
        // <meta name="robots" content="noindex, nofollow"> via BaseLayout —
        // search engines will respect noindex regardless of sitemap inclusion.
        // Single source of truth: `proHubIsPlaceholder` in
        // src/pages/pro/learn/index.astro flips off when the first Pro
        // article publishes, automatically un-suppressing indexing without
        // requiring a manual edit here.
        !page.includes('/contact-success') &&
        !page.includes('/collections/donning-aids') &&
        !page.includes('/collections/travel') &&
        !page.includes('/collections/diabetes'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
