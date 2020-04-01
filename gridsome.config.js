// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Geek.I.Am',
  siteDescription: 'Toys, Games and Book reviews for kids by kids',
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
    {
      use: 'gridsome-plugin-feed',
      options: {
        contentTypes: ['Post'],
        feedOptions: {
          title: 'Geek.I.Am ',
          description: 'Geek blog',
          link: "https://geekiam.co.uk"
        },
        rss: {
          enabled: true,
          output: '/feed.xml'
        },
        atom: {
          enabled: false,
          output: '/feed.atom'
        },
        json: {
          enabled: true,
          output: '/feed.json'
        },

        maxItems: 25,
        filterNodes: node => node.draft === false,
        nodeToFeedItem: node => ({
          title: node.title,
          date: node.date,
          content: node.summary
        })
      }
    },
  ],
  templates: {
    Post: '/:title',
    Tag: '/tag/:id',
    Author: '/author/:id',
  },
};
