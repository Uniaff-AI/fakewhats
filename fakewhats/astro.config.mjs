import { defineConfig } from 'astro/config';

export default defineConfig({
  server: {
    host: true,
    port: 7772
  },
  output: 'static'
});


