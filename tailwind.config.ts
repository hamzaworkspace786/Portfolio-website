import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        yellow: {
          DEFAULT: '#F5C518',
          muted: '#C9A010',
        },
        bg: {
          DEFAULT: '#0A0A0A',
          alt: '#111111',
          card: '#161616',
        },
        white: {
          DEFAULT: '#F5F5F0',
          muted: '#A0A0A0',
          dim: '#666666',
        }
      },
    },
  },
  plugins: [],
};
export default config;
