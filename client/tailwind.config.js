// tailwind.config.js
module.exports = {
  important: true, // ✅ 所有 Tailwind 类都会变成 !important
    content: ["./src/**/*.{js,ts,jsx,tsx}"], // ✅ 修改这里
    safelist: [
      {
        pattern: /bg-(red|blue|yellow|green|gray)-(100|200|300|400|500|600|700)/,
      },
      {
        pattern: /text-(red|blue|yellow|green|gray)-(500|600)/,
      },
      {
        pattern: /text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl)/, // 字体大小
      },
      {
        pattern: /font-(thin|light|normal|medium|semibold|bold|extrabold|black)/, // 字体加粗
      },
    ],
  };
  