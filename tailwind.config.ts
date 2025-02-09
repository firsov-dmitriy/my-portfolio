import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: '#5D5C61',
        'primary-light': 'var(--primary-light)',
        'secondary-light': 'var(--secondary-light)',
        'primary-dark': 'var(--primary-light)',
        'secondary-dark': 'var(--secondary-dark)',
      },
    },
  },
  plugins: [],
} satisfies Config;
