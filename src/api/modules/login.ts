import { Login } from "@/api/interface/index";

import authLogin from "@/assets/json/authLogin.json";
import authButtonList from "@/assets/json/authButtonList.json";

import homeRouter from "@/assets/json/routers/home.json";
import projectsRouter from "@/assets/json/routers/projects.json";
import proTableRouter from "@/assets/json/routers/proTable.json";
import assemblyRouter from "@/assets/json/routers/assembly.json";
import dashboardRouter from "@/assets/json/routers/dashboard.json";
import directivesRouter from "@/assets/json/routers/directives.json";
import systemRouter from "@/assets/json/routers/system.json";
import linkRouter from "@/assets/json/routers/link.json";
import aboutRouter from "@/assets/json/routers/about.json";

/**
 * @name 登录模块
 */
// 用户登录
export const loginApi = (params: Login.ReqLoginForm) => {
  console.log("登录参数:", params);
  return authLogin;
};

// 获取菜单列表
export const getAuthMenuListApi = () => {
  // 如果想让菜单变为本地数据，注释上一行代码，并引入本地 authMenuList.json 数据
  let authMenuList = {
    code: 200,
    data: [],
    msg: "成功"
  };
  (authMenuList.data as any[]).push(
    homeRouter,
    projectsRouter,
    proTableRouter,
    assemblyRouter,
    dashboardRouter,
    directivesRouter,
    systemRouter,
    linkRouter,
    aboutRouter
  );
  return authMenuList;
};

// 获取按钮权限
export const getAuthButtonListApi = () => {
  // return http.get<Login.ResAuthButtons>(PORT1 + `/auth/buttons`, {}, { loading: false });
  // 如果想让按钮权限变为本地数据，注释上一行代码，并引入本地 authButtonList.json 数据
  return authButtonList;
};

// 用户退出登录
export const logoutApi = () => {
  return null;
};
