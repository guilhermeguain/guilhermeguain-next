/** @type {import('next-sitemap').IConfig} */
const siteUrl = process.env.SITE_URL || 'https://www.guilhermeguain.com.br';

module.exports = {
  siteUrl,
  generateRobotsTxt: false,
  exclude: ['/server-sitemap-index.xml'],
  generateIndexSitemap: false,
  transform: async (config, path) => {
    const origin = String(config.siteUrl).replace(/\/$/, '');

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: [
        { href: origin, hreflang: 'pt-BR', hrefIsAbsolute: true },
        { href: `${origin}/en`, hreflang: 'en', hrefIsAbsolute: true },
        { href: origin, hreflang: 'x-default', hrefIsAbsolute: true },
      ],
    };
  },
};
