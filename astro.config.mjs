import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://victordlroche.github.io/Website_isere-local',
  base: '/Website_isere-local',
  output: 'static',
  integrations: [mdx()],
});
