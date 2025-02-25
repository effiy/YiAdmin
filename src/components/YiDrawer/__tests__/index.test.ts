import { describe, expect, it, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { ElMessage } from "element-plus";
import YiDrawer from "../index.vue";

// Mock Element Plus 组件
vi.mock("element-plus", () => ({
  ElMessage: {
    success: vi.fn()
  }
}));

describe("YiDrawer 组件", () => {
  // 基础测试数据
  const mockFormItems = [
    {
      label: "用户名",
      prop: "username",
      form: {
        el: "el-input",
        rules: [{ required: true, message: "请输入用户名" }]
      }
    }
  ];

  const mockDrawerProps = {
    title: "新增",
    isView: false,
    row: { username: "" },
    formItems: mockFormItems,
    api: vi.fn().mockResolvedValue({}),
    getTableList: vi.fn()
  };

  it("应该正确渲染抽屉组件", () => {
    const wrapper = mount(YiDrawer);
    expect(wrapper.exists()).toBe(true);
  });

  it("应该能够打开抽屉", async () => {
    const wrapper = mount(YiDrawer);
    const instance = wrapper.vm as any;

    await instance.acceptParams(mockDrawerProps);
    expect(instance.drawerVisible).toBe(true);
  });

  it("提交表单时应该调用 API 并显示成功消息", async () => {
    const wrapper = mount(YiDrawer);
    const instance = wrapper.vm as any;

    // 设置表单数据
    await instance.acceptParams({
      ...mockDrawerProps,
      row: { username: "test" }
    });

    // 模拟表单验证通过
    instance.ruleFormRef = {
      validate: (callback: (valid: boolean) => void) => callback(true)
    };

    // 触发提交
    await instance.handleSubmit();

    // 验证 API 调用
    expect(mockDrawerProps.api).toHaveBeenCalledWith({ username: "test" });
    expect(ElMessage.success).toHaveBeenCalledWith({ message: "新增用户成功！" });
    expect(mockDrawerProps.getTableList).toHaveBeenCalled();
    expect(instance.drawerVisible).toBe(false);
  });

  it("表单验证失败时不应调用 API", async () => {
    const wrapper = mount(YiDrawer);
    const instance = wrapper.vm as any;

    await instance.acceptParams(mockDrawerProps);

    // 模拟表单验证失败
    instance.ruleFormRef = {
      validate: (callback: (valid: boolean) => void) => callback(false)
    };

    await instance.handleSubmit();
  });

  it("查看模式下不应显示提交按钮", async () => {
    const wrapper = mount(YiDrawer);
    const instance = wrapper.vm as any;

    await instance.acceptParams({
      ...mockDrawerProps,
      isView: true
    });

    const submitButton = wrapper.find('button[type="primary"]');
    expect(submitButton.exists()).toBe(false);
  });
});
