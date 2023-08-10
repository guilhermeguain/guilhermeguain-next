/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'www.guilhermeguain.com.br',
  generateRobotsTxt: false,
  exclude: ['/server-sitemap-index.xml', '/en-US', '/pt-BR'],
  generateIndexSitemap: false,
};