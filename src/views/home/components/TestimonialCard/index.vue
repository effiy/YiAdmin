<template>
  <div class="art-a art-testimonial">
    <!-- testimonial body -->
    <div class="testimonial-body">
      <!-- photo -->
      <img class="art-testimonial-face" src="@/assets/images/users/user-10.jpg" alt="face" />
      <!-- name -->
      <h5>Paul Trueman</h5>
      <div class="art-el-suptitle mb-15">Template author</div>
      <!-- text -->
      <div class="mb-15">
        Working with Artur has been a pleasure. Better yet - I alerted them of a minor issue before going to sleep. The issue was
        fixed the next morning. I couldn't ask for better support. Thank you Artur! This is easily a 5 star freelancer.
      </div>
    </div>
    <!-- testimonial body end -->
    <!-- testimonial footer -->
    <div class="art-testimonial-footer">
      <el-rate v-model="item.rate" disabled show-score text-color="#ff9900" score-template="{value} points" />
    </div>
    <!-- testimonial footer end -->
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

import { useModel } from "vue";

const props = defineProps<{ item: any }>();
const item = useModel(props, "item");
</script>

<style scoped lang="less">
@import "./index.less";
</style>
