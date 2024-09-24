import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        gaeguLight: ['var(--font-gaegu-light)'],
        gaeguRegular: ['var(--font-gaegu-regular)'],
        gaeguBold: ['var(--font-gaegu-bold)'],
      },
      boxShadow: {
        'top-xl': '0 -5px 40px rgba(0, 0, 0, 0.2)',
        'top-md': '0 -2px 5px rgba(0, 0, 0, 0.2)',
        'bottom-md': '0 0px 5px rgba(0, 0, 0, 0.2)',
        'bottom-sm': '0 4px 5px -5px rgba(0, 0, 0, 0.2)',
        'y-md': '0 0px 5px rgba(0, 0, 0, 0.2)',
        'br-sm': '4px 4px 6px 0px rgba(0, 0, 0, 0.2)',
        'br-xs': '2px 2px 4px 0px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
};
export default config;
