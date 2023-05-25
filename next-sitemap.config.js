/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://mantine-template-zeta.vercel.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{userAgent: '*', allow: '/'}],
  },
}
