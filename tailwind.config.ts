import type { Config } from 'tailwindcss';

const paletteColor = (token: string) =>
  `color-mix(in srgb, var(${token}) calc(<alpha-value> * 100%), transparent)`;

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: paletteColor('--navy'),
        'navy-dark': paletteColor('--navy-dark'),
        gold: paletteColor('--gold'),
        'gold-muted': paletteColor('--gold-muted'),
        white: paletteColor('--white'),
        'gray-light': paletteColor('--gray-light'),
        gray: paletteColor('--gray'),
        brown: paletteColor('--brown'),
        accent: paletteColor('--gold'),
        ink: paletteColor('--navy-dark'),
        muted: paletteColor('--gray'),
      },
      fontFamily: { sans: ['var(--font-inter)', 'Arial', 'sans-serif'] },
    },
  },
  plugins: []
};
export default config;
