/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Roboto", '"Segoe UI"', "sans-serif"],
                robotoThin: ["RobotoThin"],
                robotoLight: ["RobotoLight"],
                robotoRegular: ["RobotoRegular"],
                robotoMedium: ["RobotoMedium"],
                robotoBold: ["RobotoBold"],
                primary: ["Kelvetica"],
            },
        },
    },
    plugins: [],
};
