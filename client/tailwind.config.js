module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            gridTemplateRows: {
                "[auto,auto,1fr]": "auto auto 1fr",
            },
        },
    },
    corePlugins: {
        aspectRatio: false,
    },
    plugins: [require("@tailwindcss/aspect-ratio")],
};
