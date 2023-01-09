module.exports = {
  pathPrefix: "/Obiskelijalounas",
  siteMetadata: {
    siteUrl: "https://ollitoivanen.github.io/Obiskelijalounas/",
    title: "opiskelijalounas turku",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Opiskelijalounas Åbo",
        short_name: "Obiskelijalounas",
        start_url: "/",
        display: "standalone",
        icon: "src/images/opiskelijalounas_logo.png",
      },
    },
  ],
};
