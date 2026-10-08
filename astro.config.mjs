// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// User GitHub Pages: https://maribacelo.github.io/
// CI may still pass --site / --base from actions/configure-pages.
export default defineConfig({
  site: 'https://maribacelo.github.io',
  base: '/',
  output: 'static',
  trailingSlash: 'always',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});


