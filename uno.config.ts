import { defineConfig } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      // Primary accent color - Purple
      primary: {
        DEFAULT: '#c179fb',
        light: '#d99dfc',
        dark: '#a855f7',
      },
      // Secondary accent color - Blue (for footer and accents)
      secondary: {
        light: '#60a5fa', // blue-400
        dark: '#1e40af',  // blue-800
      },
      // Neutral grays for backgrounds and text
      neutral: {
        // Light mode
        'bg-light': '#ffffff',
        'bg-light-alt': '#f3f4f6', // gray-100
        'text-light': '#111827',    // gray-900
        'text-light-secondary': '#4b5563', // gray-600
        // Dark mode
        'bg-dark': '#1a1a1a',
        'bg-dark-alt': '#444444',
        'text-dark': '#ffffff',
        'text-dark-secondary': '#e5e7eb', // gray-200
      },
    },
  },
  shortcuts: {
    // Background shortcuts
    'bg-main': 'bg-white dark:bg-[#1a1a1a]',
    'bg-alt': 'bg-gray-100 dark:bg-[#444444]',

    // Text shortcuts
    'text-main': 'text-gray-900 dark:text-white',
    'text-secondary': 'text-gray-600 dark:text-gray-200',

    // Accent shortcuts
    'accent-primary': 'text-[#c179fb]',
    'bg-accent-primary': 'bg-[#c179fb]',
    'border-accent-primary': 'border-[#c179fb]',

    // Footer colors
    'footer-border': 'border-[#1e40af] dark:border-[#60a5fa]',
    'footer-text': 'text-[#1e40af] dark:text-[#60a5fa]',

    // Section backgrounds (for split layouts like TOC)
    'section-bg': 'bg-white dark:bg-[#444444]',
    'section-bg-alt': 'bg-gray-200 dark:bg-gray-800',
  },
})
