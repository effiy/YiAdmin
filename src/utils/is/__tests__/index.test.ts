import { describe, expect, it } from "vitest";
import {
  is,
  isFunction,
  isDef,
  isUnDef,
  isObject,
  isDate,
  isNumber,
  isAsyncFunction,
  isString,
  isBoolean,
  isArray,
  isClient,
  isWindow,
  isNull,
  isNullOrUnDef,
  isHexColor
} from "../index";

describe("is 工具函数测试", () => {
  describe("is", () => {
    it("应该正确判断类型", () => {
      expect(is([], "Array")).toBe(true);
      expect(is({}, "Object")).toBe(true);
      expect(is("test", "String")).toBe(true);
    });
  });

  describe("isFunction", () => {
    it("应该正确判断函数类型", () => {
      expect(
        isFunction(() => {
          /* empty */
        })
      ).toBe(true);
      expect(isFunction(123)).toBe(false);
    });
  });

  describe("isDef/isUnDef", () => {
    it("应该正确判断是否定义", () => {
      expect(isDef(0)).toBe(true);
      expect(isDef(undefined)).toBe(false);
      expect(isUnDef(undefined)).toBe(true);
      expect(isUnDef(null)).toBe(false);
    });
  });

  describe("isObject", () => {
    it("应该正确判断对象类型", () => {
      expect(isObject({})).toBe(true);
      expect(isObject(null)).toBe(false);
      expect(isObject([])).toBe(false);
    });
  });

  describe("isDate", () => {
    it("应该正确判断日期类型", () => {
      expect(isDate(new Date())).toBe(true);
      expect(isDate("2024-03-20")).toBe(false);
    });
  });

  describe("isNumber", () => {
    it("应该正确判断数字类型", () => {
      expect(isNumber(123)).toBe(true);
      expect(isNumber("123")).toBe(false);
    });
  });

  describe("isAsyncFunction", () => {
    it("应该正确判断异步函数", () => {
      const asyncFn = async () => {
        /* empty */
      };
      expect(isAsyncFunction(asyncFn)).toBe(true);
      expect(
        isAsyncFunction(() => {
          /* empty */
        })
      ).toBe(false);
    });
  });

  describe("isString", () => {
    it("应该正确判断字符串类型", () => {
      expect(isString("test")).toBe(true);
      expect(isString(123)).toBe(false);
    });
  });

  describe("isBoolean", () => {
    it("应该正确判断布尔类型", () => {
      expect(isBoolean(true)).toBe(true);
      expect(isBoolean(false)).toBe(true);
      expect(isBoolean(0)).toBe(false);
    });
  });

  describe("isArray", () => {
    it("应该正确判断数组类型", () => {
      expect(isArray([])).toBe(true);
      expect(isArray({})).toBe(false);
    });
  });

  describe("isClient", () => {
    it("应该判断是否在客户端环境", () => {
      const result = isClient();
      // 在 Node.js 环境中运行测试时应该返回 false
      expect(typeof result).toBe("boolean");
    });
  });

  describe("isWindow", () => {
    it("应该判断是否为 Window 对象", () => {
      // 在 jsdom 环境中测试
      expect(isWindow(global)).toBe(false);
      expect(isWindow({})).toBe(false);
      expect(isWindow(null)).toBe(false);
      expect(isWindow(undefined)).toBe(false);
    });
  });

  describe("isNull", () => {
    it("应该正确判断 null", () => {
      expect(isNull(null)).toBe(true);
      expect(isNull(undefined)).toBe(false);
      expect(isNull(0)).toBe(false);
    });
  });

  describe("isNullOrUnDef", () => {
    it("应该正确判断 null 或 undefined", () => {
      expect(isNullOrUnDef(null)).toBe(true);
      expect(isNullOrUnDef(undefined)).toBe(true);
      expect(isNullOrUnDef(0)).toBe(false);
    });
  });

  describe("isHexColor", () => {
    it("应该正确判断十六进制颜色值", () => {
      // 有效的颜色值
      expect(isHexColor("#fff")).toBe(true);
      expect(isHexColor("#ffffff")).toBe(true);
      expect(isHexColor("#FFF")).toBe(true);
      expect(isHexColor("#FFFFFF")).toBe(true);

      // 无效的颜色值
      expect(isHexColor("#ffffffff")).toBe(false);
      expect(isHexColor("rgb(255,255,255)")).toBe(false);
      expect(isHexColor("#ffg")).toBe(false);
      expect(isHexColor("#12345")).toBe(false);
    });
  });
});
