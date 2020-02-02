module.exports = {
  siteMetadata: {
    title: `Hang Loose`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@Nathen_B`,
    socials: [
      {
        name: `Twitter`,
        url: `https://twitter.com/Nathen_B`
      },
      {
        name: `Github`,
        url: `https://github.com/NBowes`
      }
    ],
    menuLinks: [
      {
        name: `Surf Report`,
        link: `/surf-report`
      },
      {
        name: `Page 2`,
        link: `/page-2`
      },
      {
        name: `Blog`,
        link: `/blog`
      },
      {
        name: `Longboard`,
        link: `/longboard`
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
    resolve: `gatsby-theme-blog`,
    options: {
      basePath: `/blog`
    },
   },
   `gatsby-plugin-emotion`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}