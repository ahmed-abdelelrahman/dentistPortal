/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-blue": "bg-slate-300",
        "text-color": "#777",
      },
      styles: {
        ".custom-image-slider": {
          img: {
            objectFit: "contain !important",
            // Add other styles as needed
          },
        },
      },
    },
  },
};
