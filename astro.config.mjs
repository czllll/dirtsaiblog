// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import mdx from '@astrojs/mdx';

import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false,
}), mdx(), react()],
  redirects: {
    '/blog': '/blog/1'
  },
  output: 'hybrid',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),

});