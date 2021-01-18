import tailwindTypography from '@tailwindcss/typography'
import tailwindForms from '@tailwindcss/forms'

module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [tailwindTypography, tailwindForms],
}
