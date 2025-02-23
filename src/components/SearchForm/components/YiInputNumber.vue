<template>
  <div class="flex-center">
    <el-input v-model.trim="searchParam.minAge" placeholder="最小年龄" />
    <span class="mr10 ml10">-</span>
    <el-input v-model.trim="searchParam.maxAge" placeholder="最大年龄" />
  </div>
</template>

<script setup lang="ts" name="YiInputNumber">
import { defineProps, toRefs } from "vue";

// 定义 props
const props = defineProps<{
  searchParam: {
    minAge: string | number;
    maxAge: string | number;
  };
}>();

// 将 props 转为响应式引用，确保 v-model 工作正常
const { searchParam } = toRefs(props);
</script>
