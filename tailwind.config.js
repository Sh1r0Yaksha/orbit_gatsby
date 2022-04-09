module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./blog/**/*.{md,mdx}",
        "./blog/*.{md,mdx}",
    ],
    theme: {
        fontFamily: {
            sans: ["Lato", "sans-serif", "ui-sans-serif", "system-ui"],
            heads: ['"Space Grotesk"', "sans-serif"],
            logo: ['"Signika Negative"', "sans-serif"],
            mono: [
                "'JetBrains Mono'",
                "monospace",
                "ui-monospace",
                "SFMono-Regular",
            ],
        },
        extend: {},
    },
    plugins: [],
};
