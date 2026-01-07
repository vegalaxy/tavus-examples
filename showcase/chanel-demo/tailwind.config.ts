import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      chanel: ['"Helvetica Neue"', '"Arial"', "sans-serif"],
      display: ['"Playfair Display"', "serif"],
    },
    extend: {
      backgroundImage: {
        dialog: "linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)",
        "text-primary": "linear-gradient(91deg, #000000 0%, #333333 100%)",
        "main-bg": "linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 100%)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2.5xl": "1.5rem",
        "3xl": "3.125rem",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        wrapper: "rgba(255, 255, 255, 0.95)",
        "primary-overlay": "rgba(0, 0, 0, 0.05)",
        chanel: {
          black: "#000000",
          white: "#FFFFFF",
          gray: "#E5E5E5",
          "dark-gray": "#333333",
        },
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      boxShadow: {
        "wrapper-shadow":
          "0px 4px 20px 0px rgba(0, 0, 0, 0.08), 0px 1px 4px 0px rgba(0, 0, 0, 0.04)",
        "button-shadow": "0px 4px 12px -2px rgba(0, 0, 0, 0.15)",
        "footer-btn": "0px 2px 8px 0px rgba(0, 0, 0, 0.12)",
      },
      backdropBlur: {
        xs: "3px",
        sm: "10px",
      },
      fontSize: {
        xxs: ["0.625rem", "0.625rem"],
        "2xxs": ["0.5rem", "0.5rem"],
        "4.5xl": ["2.5rem", "2.5rem"],
        "6.5xl": ["4rem", "4rem"],
      },
      spacing: {
        17: "4.375rem",
        18: "4.5rem",
        30: "7.5rem",
        52: "13rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
