/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'ddarkest': '#1D1F1F',
        'ddarker': '#5D5F5F',
        'dgrey': '#B6B8B8',
        'dlighter': '#E3E3E3',
        'dlightest': '#F4F4F5',

        'darkest': '#DE5212',
        'darker': '#E9672B',
        'normal': '#EF8C5F',
        'lighter': '#E8CFB5',
        'lightest': '#FBF8F5',

        'ared': '#DA3E31',
        'ayellow': '#CDD454',
        'agreen': '#263437'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
