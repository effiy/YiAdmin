<template>
  <el-link :href="link" :underline="false" target="_blank">
    <el-icon :size="24">
      <Shop />
    </el-icon>
  </el-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ElLink, ElIcon } from "element-plus";
import { Shop } from "@element-plus/icons-vue"; // 引入文档图标

export default defineComponent({
  name: "BootstrapmbLink",
  components: {
    ElLink,
    ElIcon,
    Shop // 注册图标组件
  },
  data() {
    return {
      link: "https://www.bootstrapmb.com/" // 你的文档链接
    };
  }
});
</script>

<style scoped>
/* 可根据需要添加样式 */
</style>
