import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0077ff",
          secondary: "#814c00",
          accent: "#70d600",
          neutral: "#2b2b2b",
          "base-100": "#f2fbff",
          info: "#00ecff",
          success: "#88ee00",
          warning: "#975600",
          error: "#e9464c",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
