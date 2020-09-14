// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'Geek.I.Am',
    siteDescription: 'Software Developer Community',
    siteUrl: 'https://geekiam.io',
    titleTemplate: '%s | Geek.I.Am',
    icon: 'src/favicon.png',
    plugins: [
        {
            use: '@gridsome/plugin-google-analytics',
            options: {
                id: process.env.GOOGLE_ANALYTICS_ID,
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
                    categories: {
                        typeName: 'Category',
                        create: true,
                    },
                },
            },
        },
        {
            use: 'gridsome-plugin-netlify-cms',
            options: {
                publicPath: '/admin',
                configPath: 'src/admin/config.yml',
                htmlPath: 'src/admin/index.html',
            },
        },
        {
            use: 'gridsome-plugin-feed',
            options: {
                contentTypes: ['Post'],
                feedOptions: {
                    title: 'Geek.I.Am ',
                    description: 'Software Developer Community',
                    link: 'https://geekiam.io',
                },
                rss: {
                    enabled: true,
                    output: '/feed.xml',
                },
                atom: {
                    enabled: false,
                    output: '/feed.atom',
                },
                json: {
                    enabled: true,
                    output: '/feed.json',
                },

                maxItems: 25,
                filterNodes: () => true,
                nodeToFeedItem: (node) => ({
                    title: node.title,
                    date: node.date,
                    content: node.summary,
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
                privacyPolicy: '/privacy',
                cookieName: 'consent',
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
    ],
    templates: {
        Post: '/:title',
        Tag: '/tag/:id',
        Author: '/author/:id',
        Category: '/category/:id',
    },
    transformers: {
        remark: {
            plugins: [
                [
                    'gridsome-plugin-remark-shiki',
                    { theme: 'monokai', skipInline: true },
                ],
            ],
        },
    },
}
