/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            colors: {
                'google-blue': '#0b57d0',
                'google-blue-hover': '#0842a0',
                'google-surface': '#f8fafd',
                'google-surface-container': '#f0f4f9',
                'google-outline': '#747775',
                'google-text': '#1f1f1f',
                'google-text-secondary': '#444746',
                'google-active-pill': '#c2e7ff',
                'google-on-active-pill': '#001d35'
            },
            borderRadius: {
                'google': '1rem',
                'google-full': '100px',
            },
            boxShadow: {
                'google-elevation': '0 1px 2px 0 rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15)',
            }
        },
    },
    plugins: [],
}
