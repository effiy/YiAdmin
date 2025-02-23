// vitest.setup.ts
import { createPinia } from "pinia";
import { setActivePinia } from "pinia";

// 在每个测试前设置 Pinia 实例
beforeEach(() => {
  const pinia = createPinia();
  setActivePinia(pinia); // 激活 Pinia 实例
});
