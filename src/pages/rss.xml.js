import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: 'kanopo site',
    description: 'Simple site about my projects',
    site: 'https://kanopo.xyz',
    items: await pagesGlobToRssItems(import.meta.glob('./wiki/*.md')),
    customData: `<language>it-it</language>`,
  });
}
