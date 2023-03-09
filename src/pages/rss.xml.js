import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: 'Kanopo blog',
    description: 'Personal space to dump my brain in',
    site: 'https:kanopo.org',
    items: await pagesGlobToRssItems(import.meta.glob('./wiki/*.mdx')),
    customData: `<language>it-it</language>`,
  });
}
