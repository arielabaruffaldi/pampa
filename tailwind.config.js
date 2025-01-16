/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "xl": ["18px", "30px"],
        "3xl": ["42px", "32px"],
        "8xl": ["86px", "120%"],
        h1: ["86px", "120%"],
      },
    },
  },
  plugins: [],
};
