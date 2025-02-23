<template>
  <a :href="link" target="_blank">
    <img class="avatar" :src="src" :alt="title" :title="title" />
  </a>
</template>

<script setup lang="ts">
defineProps<{ src: string; title: string; link: string }>();
</script>

<style scoped lang="less">
a {
  padding-right: 10px;
}
.avatar {
  display: inline-block;
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-radius: 25px;
}
</style>
