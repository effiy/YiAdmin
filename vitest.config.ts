// vitest.config.ts

import { defineConfig } from "vitest/config";
import path from "path";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  test: {
    // 启用 DOM 模拟环境
    environment: "jsdom",
    // 包含的测试文件模式
    include: ["**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    // 全局测试设置
    globals: true,
    // 设置测试时不捕获控制台输出
    silent: false
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src") // 配置路径别名
    }
  }
});
