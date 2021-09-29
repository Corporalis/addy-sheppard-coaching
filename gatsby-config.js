const name = `Addy Sheppard Coaching`
const shortName = `Addy Sheppard`

module.exports = {

  siteMetadata: {
    title: name,
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/testimonials`,
        name: `testimonials`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/examples`,
        name: 'examples',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-prismjs', 'gatsby-remark-copy-linked-files'],
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name,
        // eslint-disable-next-line @typescript-eslint/camelcase
        short_name: shortName,
        // eslint-disable-next-line @typescript-eslint/camelcase
        start_url: `/`,
        // eslint-disable-next-line @typescript-eslint/camelcase
        background_color: `#f8f8ff`,
        // eslint-disable-next-line @typescript-eslint/camelcase
        theme_color: `#313639`,
        display: `minimal-ui`,
        orientation: 'portrait-primary',
        icon: 'src/images/fav.png',
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        manualInit: true,
        modulePath: `${__dirname}/src/cms/cms.ts`,
      },
    },
  ],
}
