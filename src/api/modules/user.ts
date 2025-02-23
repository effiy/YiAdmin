import { ResPage, User } from "@/api/interface/index";
import http from "@/api";

import userRole from "@/assets/json/userRole.json";
import userTreeList from "@/assets/json/userTreeList.json";
import userDepartment from "@/assets/json/userDepartment.json";

/**
 * @name 用户管理模块
 */
// 获取用户列表
export const getUserList = (params: User.ReqUserParams) => {
  return http.get<ResPage<User.ResUserList>>(`/dataset/mongo?cname=user`, params);
};

// 获取树形用户列表
export const getUserTreeList = (params: User.ReqUserParams) => {
  console.log(params);
  return Promise.resolve(userTreeList);
};

// 新增用户
export const addUser = (params: { key: string }) => {
  return http.post(`/dataset/mongo?cname=user`, params);
};

// 批量添加用户
export const BatchAddUser = (params: FormData) => {
  return http.post(`/user/import`, params);
};

// 编辑用户
export const editUser = (params: { key: string }) => {
  return http.post(`/dataset/mongo?cname=user`, params);
};

// 删除用户
export const deleteUser = (params: { key: string }) => {
  return http.delete(`/dataset/mongo?cname=user`, params);
};

// 切换用户状态
export const changeUserStatus = (params: { key: string; status: number }) => {
  return http.post(`/user/change`, params);
};

// 重置用户密码
export const resetUserPassWord = (params: { id: string }) => {
  return http.post(`/user/rest_password`, params);
};

// 导出用户数据
export const exportUserInfo = (params: User.ReqUserParams) => {
  return http.download(`/user/export`, params);
};

// 获取用户部门列表
export const getUserDepartment = () => {
  return Promise.resolve(userDepartment);
};

// 获取用户状态字典
export const getUserStatus = () => {
  return http.get<User.ResStatus[]>(`/user/status`);
};

// 获取用户性别字典
export const getUserGender = () => {
  return http.get<User.ResGender[]>(`/user/gender`);
};

// 获取用户角色字典
export const getUserRole = () => {
  return userRole;
};
