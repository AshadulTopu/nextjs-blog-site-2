/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [],
  },
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '480px',
      ...defaultTheme.screens
    },
    extend: {
      colors: {
        'dark': '#233a3c',
        'medium': '#293245',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
