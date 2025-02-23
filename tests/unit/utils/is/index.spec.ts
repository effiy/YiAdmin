// isNumber.test.ts
import { describe, it, expect } from "vitest";
import { isNumber } from "@/utils/is/index"; // 导入你要测试的函数

describe("isNumber", () => {
  it("should return true for numbers", () => {
    expect(isNumber(123)).toBe(true); // 数字应该返回 true
    expect(isNumber(0)).toBe(true); // 零应该是数字
    expect(isNumber(-1)).toBe(true); // 负数应该是数字
    expect(isNumber(3.14)).toBe(true); // 浮动数字应该是数字
  });

  it("should return false for non-numbers", () => {
    expect(isNumber("123")).toBe(false); // 字符串应该返回 false
    expect(isNumber(true)).toBe(false); // 布尔值应该返回 false
    expect(isNumber(null)).toBe(false); // null 应该返回 false
    expect(isNumber(undefined)).toBe(false); // undefined 应该返回 false
    expect(isNumber({})).toBe(false); // 对象应该返回 false
    expect(isNumber([])).toBe(false); // 数组应该返回 false
  });
});
