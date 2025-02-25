import { describe, it, expect, vi } from "vitest";
import { checkPhoneNumber } from "@/utils/eleValidate";

describe("checkPhoneNumber", () => {
  // 测试有效的手机号
  it("应该通过有效的手机号验证", () => {
    const callback = vi.fn();

    checkPhoneNumber({}, "13812345678", callback);
    expect(callback).toHaveBeenCalledWith();

    checkPhoneNumber({}, "15912345678", callback);
    expect(callback).toHaveBeenCalledWith();

    checkPhoneNumber({}, "17312345678", callback);
    expect(callback).toHaveBeenCalledWith();
  });

  // 测试空手机号
  it("应该拒绝空手机号", () => {
    const callback = vi.fn();

    checkPhoneNumber({}, "", callback);
    expect(callback).toHaveBeenCalledWith("请输入手机号码");
  });

  // 测试无效的手机号
  it("应该拒绝无效的手机号", () => {
    const callback = vi.fn();

    // 测试错误长度
    checkPhoneNumber({}, "1381234567", callback);
    expect(callback).toHaveBeenCalledWith(new Error("请输入正确的手机号码"));

    // 测试错误前缀
    checkPhoneNumber({}, "12345678901", callback);
    expect(callback).toHaveBeenCalledWith(new Error("请输入正确的手机号码"));

    // 测试非数字字符
    checkPhoneNumber({}, "1381234567a", callback);
    expect(callback).toHaveBeenCalledWith(new Error("请输入正确的手机号码"));
  });
});
