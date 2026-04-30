import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['../src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        scout: {
          purple: '#4D2177',
          green:  '#84A40B',
          teal:   '#00A794',
          orange: '#ED7703',
          navy:   '#001323',
        },
        group: {
          red:         '#B31C27',
          'red-light': '#E8474F',
          'red-dark':  '#8A1018',
        },
        squirrels: {
          DEFAULT:     '#9B1C1C',
          light:       '#F9E5E5',
          dark:        '#6B0E0E',
          'red-unit':  '#CC2222',
          'grey-unit': '#8A8A8A',
        },
        beavers: {
          DEFAULT:   '#004F6E',
          light:     '#E0F0F7',
          dark:      '#003349',
          mohawks:   '#0085B2',
          cherokees: '#003F6B',
        },
        cubs: {
          DEFAULT: '#4A5E06',
          light:   '#EEF2D6',
          dark:    '#2E3A03',
          lions:   '#C8850A',
          tigers:  '#E06B00',
        },
        scouts: {
          DEFAULT: '#0F3D0F',
          light:   '#E0EBE0',
          dark:    '#072007',
          pumas:   '#7A9E3B',
          jaguars: '#C4A000',
        },
      },
      fontFamily: {
        sans: ['Nunito Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
