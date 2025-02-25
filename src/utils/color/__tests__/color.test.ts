import { describe, expect, it } from "vitest";
import { hexToRgb, getLightColor } from "@/utils/color";
import { ElMessage } from "element-plus";

// Mock element-plus 的 ElMessage
import { vi } from "vitest";

vi.mock("element-plus", () => ({
  ElMessage: {
    warning: vi.fn()
  }
}));

describe("颜色工具函数测试", () => {
  describe("hexToRgb", () => {
    it("应该正确转换有效的hex颜色", () => {
      expect(hexToRgb("#ffffff")).toEqual([255, 255, 255]);
      expect(hexToRgb("000000")).toEqual([0, 0, 0]);
      expect(hexToRgb("#ff0000")).toEqual([255, 0, 0]);
    });

    it("应该对无效的hex颜色显示警告", () => {
      hexToRgb("#gggggg");
      expect(ElMessage.warning).toHaveBeenCalledWith("输入错误的hex");
    });
  });

  describe("getLightColor", () => {
    it("应该正确变浅颜色", () => {
      expect(getLightColor("#000000", 0.1)).toBe("#1a1a1a");
      expect(getLightColor("#ff0000", 0.1)).toBe("#ff1a1a");
    });

    it("应该对无效的hex颜色显示警告", () => {
      getLightColor("#gggggg", 0.1);
      expect(ElMessage.warning).toHaveBeenCalledWith("输入错误的hex颜色值");
    });
  });
});
