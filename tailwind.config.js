/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
   theme: {
      screens: {
         sm: "480px",
         md: "768px",
         lg: "1024px",
         xl: "1280px",
         "2xl": "1536px",
      },
      extend: {
         boxShadow: {
            // page_00: localites section
            down: "0 5px 5px 1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.1);",
            // page_00: appAdd section
            radio: "0 0 0 3px white inset",
         },
      },
   },
   plugins: [],
}
