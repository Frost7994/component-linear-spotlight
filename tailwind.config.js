const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette").default;

const addVariablesForColors = ({ addBase, theme }) => {
    let allColors = flattenColorPalette(theme("colors"));

    let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

    addBase({
        ":root": newVars,
    });
};

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [require("tailwind-scrollbar-hide"), require("@tailwindcss/line-clamp"), addVariablesForColors],
};
