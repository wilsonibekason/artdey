/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        paymentTermsBg: "#fcfcfc",
        gradientBaseBg: "#fcfcfc",
        gradientBaseBg2: "#ebeced",
        gradientBaseAccent: "#103948",
      },
      screens: {
        phone: "640px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1280px",
        Xdesktop: "1536px",
      },
    },
  },
  plugins: [],
};
