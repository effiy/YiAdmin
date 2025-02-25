import http from "@/api";
import type { RequestParams, ApiResponse, PageResponse } from "../interface/request";

/**
 * 通用 CRUD 操作封装
 * @param resource 资源名称
 */
export const createCrudApi = <T = any>(resource: string) => {
  return {
    // 获取列表
    getList(params?: RequestParams) {
      return http.get<PageResponse<T>>(`/${resource}/list`, params);
    },

    // 获取详情
    getDetail(id: string | number) {
      return http.get<T>(`/${resource}/detail/${id}`);
    },

    // 创建
    create(data: Partial<T>) {
      return http.post<T>(`/${resource}/create`, data);
    },

    // 更新
    update(id: string | number, data: Partial<T>) {
      return http.put<T>(`/${resource}/update/${id}`, data);
    },

    // 删除
    delete(id: string | number) {
      return http.delete<void>(`/${resource}/delete/${id}`);
    },

    // 批量删除
    batchDelete(ids: (string | number)[]) {
      return http.post<void>(`/${resource}/batch-delete`, { ids });
    },

    // 导出
    export(params?: RequestParams) {
      return http.download(`/${resource}/export`, params);
    },

    // 导入
    import(file: File) {
      const formData = new FormData();
      formData.append("file", file);
      return http.post<ApiResponse>(`/${resource}/import`, formData);
    }
  };
};
