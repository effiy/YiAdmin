<template>
  <div class="card">
    <div class="p-6">
      <div class="flex justify-between items-center">
        <a href="#" class="text-lg font-medium">App Design and Develop</a>
        <div class="bg-primary text-xs text-white rounded-md px-1 font-medium" role="alert">
          <span>Complated</span>
        </div>
      </div>

      <div class="flex flex-col">
        <h5 class="my-3">
          <a href="apps-project-detail.html" class="text-primary uppercase font-semibold">ANDROID</a>
        </h5>
        <p class="text-gray-400 text-xs/normal mb-5">
          New common language will be more simple and regular than the existing European languages...
          <a href="#" class="text-primary">View more</a>
        </p>

        <div class="flex items-center gap-5">
          <div>
            <h4 class="text-base">77</h4>
            <p class="text-gray-400">Questions</p>
          </div>
          <div>
            <h4 class="text-base">875</h4>
            <p class="text-gray-400">Comments</p>
          </div>
        </div>

        <div class="flex items-center gap-3 mt-8 mb-6">
          <h2 class="text-base">Team :</h2>
          <div class="flex -space-x-2">
            <div>
              <img
                class="inline-block h-10 w-10 rounded-full border-2 border-white border-gray-700"
                src="@/assets/images/users/user-5.jpg"
                alt="Image Description"
                data-fc-type="tooltip"
                data-fc-placement="top"
              />
              <div class="bg-black hidden px-2 py-1 rounded transition-all text-white opacity-0 z-50" role="tooltip">
                Mat Helme
                <div data-fc-arrow class="bg-black w-2.5 h-2.5 rotate-45 -z-10 rounded-[1px]"></div>
              </div>
            </div>
            <div>
              <img
                class="inline-block h-10 w-10 rounded-full border-2 border-white border-gray-700"
                src="@/assets/images/users/user-6.jpg"
                alt="Image Description"
                data-fc-type="tooltip"
                data-fc-placement="top"
              />
              <div class="bg-black hidden px-2 py-1 rounded transition-all text-white opacity-0 z-50" role="tooltip">
                Michael Zenaty
                <div data-fc-arrow class="bg-black w-2.5 h-2.5 rotate-45 -z-10 rounded-[1px]"></div>
              </div>
            </div>
            <div>
              <img
                class="inline-block h-10 w-10 rounded-full border-2 border-white border-gray-700"
                src="@/assets/images/users/user-7.jpg"
                alt="Image Description"
                data-fc-type="tooltip"
                data-fc-placement="top"
              />
              <div class="bg-black hidden px-2 py-1 rounded transition-all text-white opacity-0 z-50" role="tooltip">
                James Anderson
                <div data-fc-arrow class="bg-black w-2.5 h-2.5 rotate-45 -z-10 rounded-[1px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between mb-3">
          <h3 class="text-base">Progress</h3>
          <h4 class="text-base text-primary">45%</h4>
        </div>

        <div class="flex w-full h-[5px] bg-gray-200 rounded-full overflow-hidden bg-gray-700 mt-4">
          <div
            class="flex flex-col justify-center overflow-hidden bg-primary"
            role="progressbar"
            style="width: 45%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="flex flex-col justify-center overflow-hidden bg-primary/10"
            role="progressbar"
            style="width: 55%"
            aria-valuenow="15"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
    <el-dropdown class="more-opts">
      <el-icon size="24"><More /></el-icon>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item><span @click="addItem">add</span></el-dropdown-item>
          <el-dropdown-item><span @click="removeItem(item.i)">remove</span></el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits, defineProps } from "vue";

import { useModel } from "vue";

const props = defineProps<{ item: any }>();
const item = useModel(props, "item");

const emit = defineEmits<{
  (event: "add", payload: object): void;
  (event: "remove", index: number): void;
}>();

function addItem() {
  emit("add", {
    w: 4,
    h: 12,
    el: "ProjectCard"
  });
}

function removeItem(val) {
  emit("remove", val);
}
</script>

<style scoped lang="less">
@import "./index.less";
</style>
