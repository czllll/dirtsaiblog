import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context: { site: any; }) {
    const posts = await getCollection("posts");
    return rss({
    title: "Dirtsai's blog",
    description: '',
    site: context.site,
    items: await Promise.all(
        posts.map(async (post) => {
          const { Content } = await post.render();
          return {
            title: post.data.title,
            pubDate: post.data.date,
            description: post.data.description,
            content: sanitizeHtml(parser.render(post.body), {
                allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
              }),
            link: `/blog/${post.slug}`,
          };
        })
      ),
  });
}