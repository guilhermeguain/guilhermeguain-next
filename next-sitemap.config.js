/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.guilhermeguain.com.br',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap-index.xml'],
};