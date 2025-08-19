import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  server: {
    host: true
  },
  output: 'server',
  adapter: node({ mode: 'standalone' })
});


