module.exports = {
  siteMetadata: {
    title: 'santos-luis.github.io',
    author: {
      name: 'Luis Santos',
      summary: `Hi, I am Luis, a Software Engineer at <a aria-label="Pipedrive" href="https://www.pipedrive.com/">Pipedrive</a>.
      My experience in mainly in backend, where I do projects in <b>NodeJS</b>, <b>Symfony</b> (PHP), and sometimes in <b>Go</b>.
      I am also doing some frontend projects using mostly <b>ReactJS</b> and <b>GatsbyJS</b> but also <b>EmberJS</b>.
      <br>
      <br>
      Besides writing the services code I am often involved in the creation of the infrastructure and deployment process.
      Most of my experience in this area is connected to <b>AWS</b> services.`
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
          'gatsby-remark-prismjs',
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
        display: 'minimal-ui',
        icon: 'content/assets/icon.png',
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.svg$/
        }
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-dark-mode',
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        precachePages: ['/*'],
      },
    },
  ],
};
