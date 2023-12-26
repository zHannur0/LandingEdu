/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg1': "url('./accets/bg12.svg')",
        'bg2': "url('./accets/bg2.svg')",
        'bg3': "url('./accets/bg3.svg')",
        'bg4': "url('./accets/bg4.svg')",
        'bg5': "url('./accets/bg5.svg')",
        "run": "url('./accets/run3.gif')",

      }
    },
  },
  plugins: [],
}