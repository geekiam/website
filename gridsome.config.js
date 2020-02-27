// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Geek.I.Am',
  siteDescription: "Computer game reviews for kids by a kid",
  siteUrl: 'https://geekiam.co.uk',
  titleTemplate: `%s | Geek.I.Am`,
  icon: 'src/favicon.png',
  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-151978506-1'
      }
    },
    {
      use: "gridsome-plugin-tailwindcss"
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'static/posts/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true,
          },
          author: {
            typeName: 'Author',
            create: true,
          },
        },
      }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`
      }
    },
  ],
  templates: {
    Post: '/:title',
    Tag: '/tag/:id',
    Author: '/author/:id',
  },
};
