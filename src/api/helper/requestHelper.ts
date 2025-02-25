import type { RequestParams } from "../interface/request";

/**
 * 处理请求参数
 * @param params 原始参数
 */
export const handleRequestParams = (params?: Record<string, any>): RequestParams => {
  if (!params) return {};

  const result: RequestParams = {};

  // 处理分页参数
  if (params.pageNum) result.pageNum = Number(params.pageNum);
  if (params.pageSize) result.pageSize = Number(params.pageSize);

  // 处理时间范围
  if (Array.isArray(params.timeRange) && params.timeRange.length === 2) {
    result.startTime = params.timeRange[0];
    result.endTime = params.timeRange[1];
  }

  // 处理关键字搜索
  if (params.keyword) {
    result.keyword = params.keyword.trim();
  }

  // 处理状态
  if (params.status !== undefined && params.status !== null) {
    result.status = params.status;
  }

  // 处理排序
  if (params.orderBy) {
    result.orderBy = params.orderBy;
    result.orderType = params.orderType || "desc";
  }

  return result;
};

/**
 * 构建查询字符串
 * @param params 请求参数
 */
export const buildQueryString = (params: Record<string, any>): string => {
  const parts: string[] = [];

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      if (Array.isArray(value)) {
        value.forEach(item => parts.push(`${key}[]=${encodeURIComponent(item)}`));
      } else {
        parts.push(`${key}=${encodeURIComponent(value)}`);
      }
    }
  });

  return parts.length > 0 ? `?${parts.join("&")}` : "";
};
