import { defineConfig } from 'astro/config';
import remarkToc from "remark-toc";
import {rehypeAccessibleEmojis} from "rehype-accessible-emojis";

// https://astro.build/config
export default defineConfig({
  markdown: {
    drafts: true,
    remarkPlugins: [[remarkToc, {heading: "Indice"}], rehypeAccessibleEmojis],
  },
  integrations: []
});
