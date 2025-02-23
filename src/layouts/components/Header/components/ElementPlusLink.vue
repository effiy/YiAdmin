<template>
  <el-link :href="link" :underline="false" target="_blank">
    <el-icon :size="24">
      <Eleme />
    </el-icon>
  </el-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ElLink, ElIcon } from "element-plus";
import { Eleme } from "@element-plus/icons-vue"; // 引入文档图标

export default defineComponent({
  name: "ElementPlusLink",
  components: {
    ElLink,
    ElIcon,
    Eleme // 注册图标组件
  },
  data() {
    return {
      link: "https://element-plus.org/zh-CN/component/icon.html" // 你的文档链接
    };
  }
});
</script>

<style scoped>
/* 可根据需要添加样式 */
</style>
