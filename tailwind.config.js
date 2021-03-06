module.exports = {
    content: ["./src/**/*.{js,jsx}", "./public/index.html"],
    theme: {
  
  
      fontSize: {
        "2xs": ".5rem",
        "xs": ".75rem",
        "sm": ".875rem",
        "tiny": ".875rem",
        "base": "1rem",
        "lg": "1.125rem",
        "xl": "1.25rem",
        "1xl": "1.313rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
      },
      colors: {
        "error":"#C34040",
        "midnight": "#001B45",
        "twenty-midnight": "#001B45a0",
        "dark-green": "#023B2E",
        "seventy-green": "#083B02B2",
        "thirty-green": "#0354345C",
        "green": "#035434",
        "low-opacity-green": "#0054775C",
        "Secondary-green":"#0C5403",
        "dark-sky-blue": "#3270e1",
        "sky-blue": "#739eff",
        "soft-blue": "#80a7ed",
        "peacock-blue": "#0046ae",
        "azure": "#1da0f1",
        "black": "#000000",
        "black-one": "#141414",
        "black-two": "#1f1f1f",
        "black-three": "#323232",
        "pinkish-grey": "#bcbcbc",
        "warm-grey": "#707070",
        "warm-grey-two": "#9e9e9e",
        "warm-grey-three": "#777777",
        "greyish-brown": "#525252",
        "white": "#ffffff",
        "white-two": "#eaeaea",
        "white-three": "#f2f2f2",
        "white-four": "#f6f6f6",
        "white-five": "#e2e2e2",
        "white-six": "#fcfcfc",
        "white-seven": "#dfdfdf",
        "white-eight": "#f7f7f7",
        "dark-mint": "#52c660",
        "puke-green": "#a3b809",
        "pea-soup": "#869700",
        "pea-soup-two": "#859600",
        "snot": "#a4b809",
        "swamp-green": "#718800",
        "rusty-red": "#c81616",
        "butterscotch": "#f9b236",
        "light-green":"#d4dfdb",
      },
      extend: {
       
        boxShadow: {
          "top-menu": "0 8px 24px 0 rgba(0, 0, 0, 0.08)",
          "category-box": "0 4px 16px 0 rgba(0, 0, 0, 0.08)",
          "category-box-hover": "0 16px 48px 0 rgba(0, 0, 0, 0.16)",
          "app-download": "0 24px 64px 0 rgba(0, 0, 0, 0.16)",
          "product-hover": "0 9px 28px 0 rgba(0, 0, 0, 0.05)",
          "add-product-floating": "0 6px 6px 0 rgba(0, 0, 0, 0.24)",
          "dashboard-item-hover": "0 16px 32px 0 rgba(0, 0, 0, 0.08)",
          "sidemen":"0 0 10px 1000px rgba(0, 0, 0, 0.384);"
        },
        letterSpacing: {
          widest: ".4em",
        },
      },
      screens: {
        sm: { min: "576px" },
        md: { min: "768px" },
        lg: { min: "975px" },
      },
      animation: {
      },
      keyframes: {
        typing: {
          "0%": { width: "0" },
          "20%, 85%": { width: "100%" },
          "100%": { width: "0" },
        },
        "blink-caret": {
          "from, to": { borderColor: "transparent" },
          "50%": { borderColor: "black" },
        },
      },
    },
    // plugins: [
    //   // require('@tailwindcss/forms')
    // ],
  };
  