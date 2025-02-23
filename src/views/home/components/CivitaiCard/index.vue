<template>
  <div>
    <el-image :src="url" :preview-src-list="srcList" />
    <div class="absolute top-0 flex items-center px-5 pt-6 z-10">
      <div class="w-10 h-10 flex-none image-fit">
        <img alt="Tailwind HTML Admin Template" class="rounded-full" src="@/assets/images/users/user-10.jpg" />
      </div>
      <div class="ml-3 text-white mr-auto">
        <a href="" class="font-medium">hello</a>
        <div class="text-xs mt-0.5">10 months ago</div>
      </div>
    </div>
    <div class="absolute bottom-0 text-white px-5 pb-8 z-10">
      <span class="px-2 py-1 rounded">PC & Laptop</span>
      <a href="" class="block font-medium text-xl mt-3">200 Latin words, combined with a handful of model sentences</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
const url = "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg";
const srcList = [
  "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
  "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
  "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
  "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
  "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
  "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
  "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg"
];
</script>
