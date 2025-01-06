/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionDuration: {
        500: "500ms", // Menambahkan durasi transisi 500ms
        300: "300ms", // Menambahkan durasi transisi 300ms
      },
    },
  },
  plugins: [],
};
