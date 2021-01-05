module.exports = {
  siteMetadata: {
    title: `Matt Murnighan Portfolio`,
    description: `Professional Software Engineer, Amateur Economist`,
    author: `Matthew Murnighan`,
    first: `Matthew`,
    last: `Murnighan`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sass',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
