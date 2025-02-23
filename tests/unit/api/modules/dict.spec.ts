import { test } from "vitest";
import { getDictTypeList } from "@/api/modules/dict";

test("should fetch data from API successfully", async () => {
  // 准备模拟返回的响应
  // const mockResponse = { data: { success: true, message: "Data fetched successfully" } };

  // 模拟 axios.get 返回的结果
  // (axios.get as vi.Mock).mockResolvedValue(mockResponse);

  // 调用 fetchData 函数
  const result = await getDictTypeList({
    pageNum: 1,
    pageSize: 10
  });

  // 断言 axios.get 是否按预期被调用
  console.log(">>>>>>>>>>>>>>", result);
  // 断言返回的数据是否正确
  // expect(result).toEqual(mockResponse.data);
});
