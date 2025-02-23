<template>
  <div class="card">
    <div class="p-4">
      <el-image :src="url" :preview-src-list="srcList" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const url = "https://via.placeholder.com/600x100";
const srcList = ["https://via.placeholder.com/100x100"];
</script>
