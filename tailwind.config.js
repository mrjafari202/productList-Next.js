/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        matn: '#282828',
        inputBg: '#F2F2F2',
        btnCreate: '#55A3F0',
        danger: '#F43F5E'
      },
      spacing: {
        0.25: "1px",
      },
      borderRadius: {
        custom: '40px',
      }
    },
  },

  plugins: [require('daisyui')],
};
