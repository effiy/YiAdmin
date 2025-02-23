import { createApp } from "vue";
import App from "./App.vue";
// reset style sheet
import "@/styles/reset.less";
// CSS common style sheet
import "@/styles/common.less";
import "@/styles/index.css";
// iconfont css
import "@/assets/iconfont/iconfont.less";
// font css
import "@/assets/fonts/font.less";
// element css
import "element-plus/dist/index.css";
// element dark css
import "element-plus/theme-chalk/dark/css-vars.css";
// custom element dark css
import "@/styles/element-dark.less";
// custom element css
import "@/styles/element.less";
// svg icons
import "virtual:svg-icons-register";
// element plus
import ElementPlus from "element-plus";
// element icons
import * as Icons from "@element-plus/icons-vue";
// custom directives
import directives from "@/directives/index";
import registerComponents from "@/components/index";
// vue Router
import router from "@/routers";
// vue i18n
import I18n from "@/languages/index";
// pinia store
import pinia from "@/stores";
// errorHandler
import errorHandler from "@/utils/errorHandler";

// 创建 Vue 应用实例
const app = createApp(App);

// 配置错误处理
app.config.errorHandler = errorHandler;

// 注册 Element Icons 组件
Object.keys(Icons).forEach(key => {
  app.component(key, Icons[key as keyof typeof Icons]);
});

// 注册组件
registerComponents(app);

// 使用 Element Plus、指令、路由、国际化、Pinia
app.use(ElementPlus).use(directives).use(router).use(I18n).use(pinia).mount("#app");
