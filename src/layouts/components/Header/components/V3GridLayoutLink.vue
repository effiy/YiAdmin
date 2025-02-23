<template>
  <el-link :href="link" :underline="false" target="_blank">
    <el-icon :size="24">
      <MenuIcon />
    </el-icon>
  </el-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ElLink, ElIcon } from "element-plus";
import { Menu as MenuIcon } from "@element-plus/icons-vue"; // 引入文档图标

export default defineComponent({
  name: "V3GridLayoutLink",
  components: {
    ElLink,
    ElIcon,
    MenuIcon // 注册图标组件
  },
  data() {
    return {
      link: "https://merfais.github.io/vue-grid-layout-v3/guide/02-events" // 你的文档链接
    };
  }
});
</script>

<style scoped>
/* 可根据需要添加样式 */
</style>
