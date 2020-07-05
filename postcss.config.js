const purgecss = require('@fullhuman/postcss-purgecss')({


        content: [
            './src/**/*.html',
            './src/**/*.vue',
            './src/**/*.jsx',
            // etc.
        ],
     defaultExtractor: content => content.match(/[\w-/.:]+(?<!:)/g) || []
})
