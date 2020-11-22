// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'Geek.I.Am',
    siteDescription:
        'community network-based education and social network for software professionals',
    siteUrl: 'https://geekiam.io',
    titleTemplate: '%s | Geek.I.Am',
    author: 'threenine.co.uk',
    keywords: 'code tutorial, learn to code, ',
    image: 'uploads/version-control.png',
    icon: 'src/favicon.png',
    plugins: [
        {
            use: 'gridsome-plugin-gtag',
            options: {
                config: {
                    id: process.env.GOOGLE_ANALYTICS_ID,
                },
            },
        },
        {
            use: 'gridsome-plugin-amazon-onelink',
            options: {
                id: process.env.AMAZON_ONELINK,
            },
        },
        {
            use: 'gridsome-plugin-tailwindcss',
            options: {
                tailwindConfig: './tailwind.config.js',
                shouldImport: true,
            },
        },
        {
            use: 'gridsome-plugin-netlify-cms',
            options: {
                configPath: 'src/admin/config.yml',
                publicPath: '/admin',
                htmlPath: 'src/admin/index.html',
            },
        },
        {
            use: 'gridsome-plugin-rss',
            options: {
                contentTypeName: 'Post',
                latest: true,
                maxItems: 1000,
                feedOptions: {
                    title: 'Geek.I.Am',
                    description:
                        'community network-based education and social network for software professionals',
                    feed_url: 'https://geekiam.io' + '/rss.xml',
                    site_url: 'https://geekiam.io',
                },
                feedItemOptions: (post) => ({
                    title: post.title,
                    description: post.description,
                    url: this.site_url + post.path,
                    author: post.author,
                }),
                output: {
                    dir: './static',
                    name: 'rss.xml',
                },
            },
        },
        {
            use: 'gridsome-plugin-feed',
            options: {
                contentTypes: ['Post'],
                feedOptions: {
                    title: 'Geek.I.Am',
                    description:
                        'community network-based education and social network for software professionals',
                    link: 'https://geekiam.io',
                },
                rss: {
                    enabled: true,
                    output: '/feed.xml',
                },
                atom: {
                    enabled: true,
                    output: '/feed.atom',
                },
                json: {
                    enabled: true,
                    output: '/feed.json',
                },

                maxItems: 25,
                htmlFields: ['body'],
                filterNodes: () => true,
                nodeToFeedItem: (node) => ({
                    title: node.title,
                    date: node.date,
                    content: node.content,
                }),
            },
        },
        {
            use: '@gridsome/plugin-sitemap',
            options: {
                cacheTime: 600000, // default
                exclude: ['/exclude-me'],
                config: {
                    '/*': {
                        changefreq: 'weekly',
                        priority: 0.5,
                    },
                },
            },
        },
        {
            use: 'klaro-gridsome',
            options: {
                privacyPolicy: '/legal/privacy',
                cookieName: 'geekiam.io',
                translations: {
                    en: {
                        consentModal: {
                            description:
                                'Customise the information that we collect about you.',
                        },
                        googleAnalytics: {
                            description:
                                'Google Analytics enables us to see how visitors use our website.',
                        },
                        purposes: {
                            analytics: 'Analytics',
                        },
                    },
                },
                apps: [
                    {
                        name: 'googleAnalytics',
                        default: true,
                        title: 'Google Analytics',
                        purposes: ['analytics'],
                        cookies: ['_ga', '_gcl_au', '_gid', '_gat'],
                        required: true,
                        optOut: true,
                        onlyOnce: false,
                    },
                ],
            },
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
                    authors: {
                        typeName: 'Authors',
                    },
                    categories: {
                        typeName: 'Category',
                        create: true,
                    },
                },
            },
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: 'static/authors/*.md',
                typeName: 'Authors',
                create: true,
            },
        },
    ],
    templates: {
        Post: '/:title',
        Tag: '/tag/:id',
        Authors: [
            {
                path: '/author/:title',
                component: './src/templates/Author.vue',
            },
        ],
        Category: '/category/:id',
    },
    transformers: {
        remark: {
            plugins: [
                [
                    'gridsome-plugin-remark-shiki',
                    { theme: 'monokai', skipInline: true, fontsize: 3 },
                ],
            ],
        },
    },
}
