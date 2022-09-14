/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./public/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        paymentTermsBg: "#fcfcfc",
        gradientBaseBg: "#fcfcfc",
        gradientBaseBg2: "#ebeced",
        gradientBaseAccent: "#103948",
        banner: "#c0b8b8da",
      },
      screens: {
        phone: "640px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1280px",
        Xdesktop: "1536px",
      },
      fontFamily: {
        electra: ["Electra", "cursive"],
      },
      fontSize: {
        xss: ["12px", "14px"],
        md: ["16px", "22px"],
        xxl: ["40px", "44px"],
      },
      lineHeight: {
        wide: "4",
      },
      colors: {
        paymentTermsBg: "#fcfcfc",
        gradientBaseBg: "#fcfcfc",
        gradientBaseBg2: "#ebeced",
        gradientBaseAccent: "#103948",
      },
      borderColor: {
        gradientBaseAccent: "#103948",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), require("@tailwindcss/forms")],
};
