/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'www.guilhermeguain.com.br',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap-index.xml', '/en-US', '/pt-BR'],
  generateIndexSitemap: false,
  alternateRefs: [
    { href: 'https://www.guilhermeguain.com', hreflang: 'en-US' },
    { href: 'https://www.guilhermeguain.com.br', hreflang: 'pt-BR' },
  ],
};