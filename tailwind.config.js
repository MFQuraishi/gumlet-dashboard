/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/componentLibrary/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'd-default': '#0f111a',
        'd-foreground': '#181b24',
        'l-default': '#fafafa',
        'l-foreground': '#e4e5f1',

        'd-f-primary': '#efeeee',
        'l-f-primary': '#222222',
        'd-f-secondary': '#9aa2a7',
        'l-f-secondary': '#455a63',

        'purple-accent': '#8f7efb'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
