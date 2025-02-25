import { describe, expect, it } from "vitest";
import { loginApi, getAuthMenuListApi, getAuthButtonListApi, logoutApi } from "../login";
import authLogin from "@/assets/json/authLogin.json";
import authButtonList from "@/assets/json/authButtonList.json";

describe("登录模块测试", () => {
  // 测试登录接口
  it("loginApi 应该返回正确的模拟数据", () => {
    const mockLoginParams = {
      username: "admin",
      password: "123456"
    };
    const result = loginApi(mockLoginParams);
    expect(result).toEqual(authLogin);
  });

  // 测试获取菜单列表
  it("getAuthMenuListApi 应该返回包含所有路由的菜单列表", () => {
    const result = getAuthMenuListApi();
    expect(result.code).toBe(200);
    expect(result.msg).toBe("成功");
    expect(Array.isArray(result.data)).toBe(true);
    expect(result.data.length).toBeGreaterThan(0);
  });

  // 测试获取按钮权限
  it("getAuthButtonListApi 应该返回按钮权限列表", () => {
    const result = getAuthButtonListApi();
    expect(result).toEqual(authButtonList);
  });

  // 测试退出登录
  it("logoutApi 应该返回 null", () => {
    const result = logoutApi();
    expect(result).toBeNull();
  });
});
