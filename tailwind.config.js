/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            xs: "576px",
            ...defaultTheme.screens,
        },
        extend: {
            colors: {
                one: "#55565b",
                two: "#f48915",
                three: "#d85e56",
                four: "#e19f51",
                five: "#f88718",
            },
            zIndex: {
                1: "1",
            },
            borderRadius:{
              "1/2" : "50%"
            },
            gridTemplateColumns : {
                "1fr2fr" : "1fr 2fr",
                "3fr2fr" : "3fr 2fr"
            },
        },
    },
    plugins: [],
};
