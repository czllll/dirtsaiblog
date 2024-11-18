import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import { marked } from 'marked';

export async function GET(context) {
    const posts = await getCollection("posts");
    return rss({
    title: "Dirtsai's blog",
    description: '',
    site: context.site,
    items: await Promise.all(
        posts.map(async (post) => {
          const { Content } = await post.render();
          const content = Content ? await marked(Content.toString()) : '';
          return {
            title: post.data.title,
            pubDate: post.data.date,
            description: post.data.description,
            content: sanitizeHtml(content),
            link: `/blog/${post.slug}/`,
          };
        })
      ),
  });
}