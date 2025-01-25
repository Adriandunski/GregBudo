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
        orangeLight: '#F8F4E7',
        orangeMid: '#EFB78B',
      },
      spacing: {
        '1/4-calc': 'calc((100% - 60px) / 4)',
        '1/3-calc': 'calc((100% - 60px) / 3)',
        '1/2-calc': 'calc((100% - 60px) / 2)',
      },
      gridTemplateColumns: {
        'fill-300': 'repeat(auto-fill, 300px)',
        'fill-260': 'repeat(auto-fill, 260px)',
        'mosaic-grid': 'repeat(auto-fit, minmax(250px, 1fr))',
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
