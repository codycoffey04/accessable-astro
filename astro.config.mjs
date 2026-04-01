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
      filter: (page) => !page.includes('/pro/dashboard') && !page.includes('/pro/login'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
