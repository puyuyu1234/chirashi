// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkBreaks from 'remark-breaks';
import remarkDirective from 'remark-directive';
import { defineConfig } from 'astro/config';
import remarkContainer from './src/plugins/remark-container.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://puyuyu1234.github.io',
  base: '/chirashi',
  integrations: [mdx(), sitemap()],
  markdown: {
    remarkPlugins: [remarkBreaks, remarkDirective, remarkContainer],
  },
});
