<script lang="ts">
import { defineComponent } from "vue";
import { ElMessage } from "element-plus";

export default defineComponent({
  name: "CreateTimeHeaderRender",
  props: {
    column: {
      type: Object,
      required: true
    }
  },
  setup() {
    const handleClick = () => {
      ElMessage.success("我是通过 tsx 语法渲染的内容");
    };

    return {
      handleClick
    };
  }
});
</script>

<template>
  <el-button type="primary" link @click="handleClick"> {{ column.label }} </el-button>
</template>
