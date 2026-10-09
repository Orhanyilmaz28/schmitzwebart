import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://schmitzwebart.de',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      filter: (page) => !/\/(danke|impressum|datenschutz|agb|404)/.test(page),
    }),
  ],
});
