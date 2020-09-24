module.exports = {
  siteMetadata: {
    title: 'santos-luis.github.io',
    author: {
      name: 'Luis Santos',
      summary: 'Summary here'
    },
    social: {
      github: 'https://github.com/Santos-Luis',
      linkedin: 'https://www.linkedin.com/in/luisshenriques/',
      instagram: 'https://www.instagram.com/luis.santos.5/'
    },
    description: 'Personal tech blog',
    siteUrl: 'https://santos-luis.github.io',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 630,
            },
          },
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Luis Santos Personal Tech Blog',
        short_name: 'Personal tech blog',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'content/assets/gatsby-icon.png',
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.svg$/
        }
      }
    },
    'gatsby-plugin-react-helmet',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
};
