import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        greenMain: '#203f2a',
        orangeMain: '#e7833e',
        orangeDark: '#F7EAD8',
        orangeLight: '#F8F4E7'
      },
    },
    fontFamily: {
      'Jost': ['Jost'],
      'AdventPro': ['Advent Pro'],
      'Roboto': ['Roboto'],
      'SourGummy':['Sour Gummy']
    }
  },
  plugins: [],
} satisfies Config;
