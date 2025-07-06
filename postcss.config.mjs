const config = {
  plugins: ["@tailwindcss/postcss"],
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['"Open Sans"', 'sans-serif'],
        heading: ['Lora', 'serif'],
        body: ['Montserrat', 'sans-serif'],
      },
    },
  },
};

export default config;
