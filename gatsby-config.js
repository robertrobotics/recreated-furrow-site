module.exports = {
  pathPrefix: "/recreated-furrow-site",
  siteMetadata: {
    title: `Furrow's site recreated`,
    description: `Site has been recreated with Wrong Akram's YT tutorial.`,
    author: `@robertrobotics`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
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
        icon: `src/assets/svg/logo.svg`, // This path is relative to the root of the site.
        display: `minimal-ui`,
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
