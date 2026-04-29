import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    // When packages/ui is added:
    // '../../packages/ui/src/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ── Tier 1: National Scout Association (locked) ──────────────────
        scout: {
          purple: '#4D2177',
          green:  '#84A40B',
          teal:   '#00A794',
          orange: '#ED7703',
          navy:   '#001323',
        },
        // ── Tier 2: 73rd Allestree Group ─────────────────────────────────
        group: {
          red:         '#B31C27',
          'red-light': '#E8474F',
          'red-dark':  '#8A1018',
        },
        // ── Tier 3: Sections and unit accents ────────────────────────────
        squirrels: {
          DEFAULT:     '#9B1C1C',
          'red-unit':  '#CC2222',
          'grey-unit': '#8A8A8A',
        },
        beavers: {
          DEFAULT:   '#004F6E',
          mohawks:   '#0085B2',
          cherokees: '#003F6B',
        },
        cubs: {
          DEFAULT: '#4A5E06',
          lions:   '#C8850A',
          tigers:  '#E06B00',
        },
        scouts: {
          DEFAULT: '#0F3D0F',
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
