// 通用请求参数接口
export interface RequestParams {
  // 分页参数
  pageNum?: number;
  pageSize?: number;
  // 排序参数
  orderBy?: string;
  orderType?: "asc" | "desc";
  // 搜索参数
  keyword?: string;
  // 时间范围
  startTime?: string;
  endTime?: string;
  // 状态
  status?: number | string;
}

// 通用响应格式
export interface ApiResponse<T = any> {
  code: number;
  data: T;
  message: string;
  success: boolean;
}

// 分页响应格式
export interface PageResponse<T = any> {
  list: T[];
  total: number;
  pageNum: number;
  pageSize: number;
}
