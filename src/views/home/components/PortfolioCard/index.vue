<template>
  <div class="art-banner">
    <!-- banner back -->
    <div class="art-banner-back"></div>
    <!-- banner dec -->
    <div class="art-banner-dec"></div>
    <!-- banner overlay -->
    <div class="art-banner-overlay">
      <!-- main title -->
      <div class="art-banner-title">
        <!-- title -->
        <h1 class="mb-15">Discover my Amazing <br />Art Space!</h1>
        <!-- suptitle -->
        <div class="art-lg-text art-code mb-25">
          &lt;<i>code</i>&gt; I build
          <span ref="typedElement" />&lt;/<i>code</i>&gt;
        </div>
        <div class="art-buttons-frame">
          <!-- button -->
          <el-button type="warning">Explore now</el-button>
        </div>
      </div>
      <!-- main title end -->
      <!-- photo -->
      <img src="@/assets/images/users/face-2.png" class="art-banner-photo" alt="Your Name" />
    </div>
    <!-- banner overlay end -->
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Typed from "typed.js";

// 定义绑定的 DOM 元素
const typedElement = ref<HTMLElement | null>(null);

// Typed.js 实例变量
let typedInstance: Typed | null = null;

// 生命周期：组件挂载时初始化 Typed.js
onMounted(() => {
  if (typedElement.value) {
    typedInstance = new Typed(typedElement.value, {
      strings: ["web interfaces.", "ios and android applications.", "design mocups.", "automation tools."],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true
    });
  }
});

// 生命周期：组件卸载时销毁 Typed.js 实例
onBeforeUnmount(() => {
  if (typedInstance) {
    typedInstance.destroy();
  }
});
</script>

<style scoped lang="less">
@import "./index.less";
</style>
