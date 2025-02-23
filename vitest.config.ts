// vitest.config.ts

import { defineConfig } from "vitest/config";
import path from "path";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  test: {
    // 设置测试环境为 jsdom 以模拟浏览器环境
    environment: "jsdom",

    // 使用全局设置模拟 localStorage
    globals: true,

    // 设置测试时不捕获控制台输出
    silent: false,

    // 在每个测试之前运行的钩子，可以用来模拟 localStorage
    setupFiles: ["./tests/vitest.setup.ts"]
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src") // 配置路径别名
    }
  }
});
