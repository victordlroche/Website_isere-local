import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Remplace par ton username GitHub et le nom du repo
// Ex : https://tonusername.github.io/
export default defineConfig({
  site: 'https://victordlroche.github.io',
  base: '/',
  output: 'static',
  integrations: [mdx(), sitemap()],
});
