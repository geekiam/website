module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: ['./src/**/*.vue', './static/posts/*.md'],
    separator: ':',
    plugins: [
        require('@tailwindcss/ui'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
    theme: {
        typography: {
            default: {
                css: {
                    h1: {
                        color: '#276749',
                    },
                    h2: {
                        color: '#276749',
                    },
                    h3: {
                        color: '#276749',
                    },
                    h4: {
                        color: '#276749',
                    },
                    h5: {
                        color: '#276749',
                    },
                    h6: {
                        color: '#276749',
                    },
                    a: {
                        color: '#276749',
                    },
                    blockquote: {
                        color: '#2f855a',
                    },
                },
            },
        },
        container: {
            center: true,
            padding: '2rem',
        },
        screens: {
            xs: '300px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
        },
        extend: {
            colors: {
                'teal-lighter': '#a0f0ed',
                'green-lighter': '#a2f5bf',
                teal: '#4dc0b5',
                transparent: 'transparent',
                current: 'currentColor',
                black: '#000',
                white: '#fff',
                green: {
                    100: '#f0fff4',
                    200: '#c6f6d5',
                    300: '#9ae6b4',
                    400: '#68d391',
                    500: '#48bb78',
                    600: '#38a169',
                    700: '#2f855a',
                    800: '#276749',
                    900: '#22543d',
                },

                gray: {
                    100: '#f7fafc',
                    200: '#edf2f7',
                    300: '#e2e8f0',
                    400: '#cbd5e0',
                    500: '#a0aec0',
                    600: '#718096',
                    700: '#4a5568',
                    800: '#2d3748',
                    900: '#1a202c',
                },
            },
            fontFamily: {},
            fontSize: {
                xs: '.50rem',
                sm: '.875rem',
                base: '1rem',
                lg: '1.125rem',
                xl: '1.25rem',
                '2xl': '1.5rem',
                '3xl': '1.875rem',
                '4xl': '2.25rem',
                '5xl': '3rem',
                '6xl': '4rem',
                '7xl': '5rem',
            },
        },
    },
    variants: {},
}
