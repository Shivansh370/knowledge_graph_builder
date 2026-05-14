/** @type {import('tailwindcss').Config} */
import baseTailwindConfig from '@neo4j-ndl/base/tailwindConfig'; // Comment this line

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // presets: [baseTailwindConfig], // Comment this line
  corePlugins: {
    preflight: false,
  },
  prefix: ""
}
