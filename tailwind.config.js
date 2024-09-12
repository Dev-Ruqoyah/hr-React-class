/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'pry': "#796fab",
        // 'pry': "#796fab"
      }
    },
  },
  plugins: [],
}

