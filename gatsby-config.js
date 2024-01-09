const config = require('./src/data/config')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: config.defaultTitle,
    description: config.defaultDescription,
    author: config.author,
    siteUrl: config.url
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/locales`,
        // supported language
        languages: [`en`, `de`, `es`],
        // language file path
        defaultLanguage: `en`,
        // option to redirect to `/ko` when connecting `/`
        redirect: false
      }
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: config.themeColor,
        showSpinner: false
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.defaultTitle,
        short_name: `Ross`,
        start_url: `/`,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'minimal-ui',
        icon: `static${config.logo}`
      }
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-sitemap`
  ]
}
