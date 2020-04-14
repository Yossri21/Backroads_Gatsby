/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata : {
    title : "Backroads",
    description : 
    "Explore & discover all the every where " 
    + " enjoy life is better ",
      author : "@yosri"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
     `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`
  ]
}
