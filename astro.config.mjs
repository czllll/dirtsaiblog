// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import mdx from '@astrojs/mdx';
import pagefind from "astro-pagefind";

import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }), 
    mdx(), 
    react(),
    pagefind(),
  ],
  redirects: {
    '/blog': '/blog/1'
  },
  output: 'hybrid',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),

});