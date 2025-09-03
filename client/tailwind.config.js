// tailwind.config.js
module.exports = {
  important: true,
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /bg-(red|blue|yellow|green|gray)-(100|200|300|400|500|600|700)/,
    },
    {
      pattern: /text-(red|blue|yellow|green|gray)-(500|600)/,
    },
    {
      pattern: /text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl)/,
    },
    {
      pattern: /font-(thin|light|normal|medium|semibold|bold|extrabold|black)/,
    },
  ],
};
