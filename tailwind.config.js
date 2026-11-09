/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./contexts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F6F1E8",
          soft: "#FAF6F0",
          deep: "#EFE8DC",
        },
        ink: {
          DEFAULT: "#0C0C0C",
          muted: "#5C5C5C",
          soft: "#8A8A8A",
        },
        lime: {
          DEFAULT: "#C8F000",
          deep: "#A8D000",
          soft: "#EAF8A8",
        },
        coral: "#FF5A3C",
        sky: "#4F7CFF",
        leaf: "#2F9E5B",
        carrot: "#F27A2C",
        violet: "#7B5CFF",
        ash: {
          DEFAULT: "#F4F4F2",
          card: "#FFFFFF",
          line: "#E6E6E2",
          muted: "#6B6B6B",
        },
      },
      fontFamily: {
        display: ['"Syne"', "system-ui", "sans-serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 50px rgba(12, 12, 12, 0.08)",
        lift: "0 24px 60px rgba(12, 12, 12, 0.14)",
        card: "0 10px 30px rgba(12, 12, 12, 0.06)",
      },
      borderRadius: {
        "2.5xl": "1.25rem",
        "3xl": "1.75rem",
        "4xl": "2rem",
      },
      maxWidth: {
        shell: "1400px",
      },
      backgroundImage: {
        "graphic-glow":
          "radial-gradient(circle at 18% 20%, rgba(200, 240, 0, 0.18), transparent 34%), radial-gradient(circle at 82% 18%, rgba(255, 90, 60, 0.16), transparent 30%), radial-gradient(circle at 70% 70%, rgba(79, 124, 255, 0.12), transparent 35%)",
        "interactive-glow":
          "radial-gradient(circle at 80% 10%, rgba(200, 240, 0, 0.12), transparent 28%), radial-gradient(circle at 10% 80%, rgba(12, 12, 12, 0.03), transparent 35%)",
      },
    },
  },
  plugins: [],
};
