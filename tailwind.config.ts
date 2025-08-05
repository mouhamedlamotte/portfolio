/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/templates/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        meteor: {
          "0%": {
            transform: "rotate(215deg) translateX(0)",
            opacity: "1",
          },
          "70%": {
            opacity: "1",
          },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        "shiny-text": {
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - var(--shiny-width)) 0",
          },
          "30%, 60%": {
            "background-position": "calc(100% + var(--shiny-width)) 0",
          },
        },
      },
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "shiny-text": "shiny-text 8s infinite",
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      typography: ({ theme }: { theme: any }) => ({
        DEFAULT: {
          css: {
            color: theme("colors.foreground"),
            a: {
              color: theme("colors.primary.DEFAULT"),
              "&:hover": {
                color: theme("colors.primary.foreground"),
              },
            },
            strong: { color: theme("colors.foreground") },
            blockquote: {
              borderLeftColor: theme("colors.muted.DEFAULT"),
              color: theme("colors.muted.foreground"),
            },
            code: {
              backgroundColor: theme("colors.muted.DEFAULT"),
              color: theme("colors.foreground"),
              padding: "0.2rem 0.4rem",
              borderRadius: theme("borderRadius.sm"),
            },
            pre: {
              backgroundColor: theme("colors.muted.DEFAULT"),
              color: theme("colors.foreground"),
              padding: theme("spacing.4"),
              borderRadius: theme("borderRadius.lg"),
            },
            "code::before": { content: "none" },
            "code::after": { content: "none" },
          },
        },
        invert: {
          css: {
            "*, ::before, ::after": {
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
              textShadow: "none",
              mixBlendMode: "normal",
            },
            color: theme("colors.foreground"),
            a: {
              color: theme("colors.primary.foreground"),
              "&:hover": {
                color: theme("colors.primary.DEFAULT"),
              },
            },
            strong: { color: theme("colors.foreground") },
            blockquote: {
              borderLeftColor: theme("colors.secondary.DEFAULT"),
              color: theme("colors.secondary.foreground"),
            },
            // code: {
            //   backgroundColor: theme("colors.secondary.DEFAULT"),
            //   color: theme("colors.foreground"),
            // },
            // pre: {
            //   backgroundColor: theme("#FFFFFF"),
            //   color: theme("colors.foreground"),
            // },
          },
        },
      }),
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
