import { mount } from "@vue/test-utils";
import SwitchDark from "@/components/SwitchDark/index.vue";
import { ElSwitch } from "element-plus";
import { Sunny, Moon } from "@element-plus/icons-vue";
import { useGlobalStore } from "@/stores/modules/global";

import { describe, it, expect } from "vitest";

describe("SwitchDark.vue", () => {
  it("renders the el-switch component with correct props", () => {
    const wrapper = mount(SwitchDark, {
      global: {
        components: {
          ElSwitch
        }
      }
    });
    const elSwitch = wrapper.findComponent({ name: "ElSwitch" });

    expect(elSwitch.exists()).toBe(true);
    expect(elSwitch.props("inlinePrompt")).toBe(true);
    expect(elSwitch.props("activeIcon")).toBe(Sunny);
    expect(elSwitch.props("inactiveIcon")).toBe(Moon);
  });

  it("calls switchDark on change event", async () => {
    const globalStore = useGlobalStore();
    const wrapper = mount(SwitchDark, {
      global: {
        components: {
          ElSwitch
        }
      }
    });

    const elSwitch = wrapper.findComponent({ name: "ElSwitch" });

    // 触发 change 事件
    await elSwitch.trigger("click");
    expect(globalStore.isDark).toBe(true);
  });
});
