import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Remplace par ton username GitHub et le nom du repo
// Ex : https://tonusername.github.io/
export default defineConfig({
  site: 'https://victordlroche.github.io/Website_isere-local',
  base: '/Website_isere-local',
  output: 'static',
  integrations: [mdx(), sitemap()],
});
