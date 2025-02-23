// @ts-nocheck
import DefaultTheme from "vitepress/theme";
import Avatar from "../components/Avatar.vue";
import "./styles/index.less";

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    ctx.app.component("Avatar", Avatar);
  }
};
