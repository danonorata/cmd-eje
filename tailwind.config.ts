import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0B2545',
        graphite: '#3A3A3A',
        sky: '#4C86C6'
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-fraunces)', 'serif']
      }
    }
  },
  plugins: []
};

export default config;
