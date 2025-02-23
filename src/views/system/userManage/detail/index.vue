<template>
  <div class="w-full h-full relative overflow-y-hidden">
    <header class="w-full position right-0 px-4 pt-4 rounded bg-white">
      <div class="w-full flex space-x-4">
        <img src="@/assets/images/users/user-10.jpg" class="rounded-full h-24 border-4" alt="profile-image" />
        <div class="w-full flex flex-col justify-center">
          <div class="w-full flex justify-between">
            <div class="flex items-center space-x-2">
              <h1>标题</h1>
              <el-tag type="info" effect="light" round> info </el-tag>
              <el-tag type="primary" effect="light" round> primary </el-tag>
            </div>
            <div>
              <el-button type="info">Info</el-button>
              <el-button type="primary">Primary</el-button>
            </div>
          </div>
          <h2>副标题</h2>
        </div>
      </div>
      <el-anchor :bound="0" direction="horizontal" :container="scrollContainerRef" @click="handleClick">
        <el-anchor-link href="#basic" title="basic"></el-anchor-link>
        <el-anchor-link href="#skills" title="skills"></el-anchor-link>
        <el-anchor-link href="#goals" title="goals"></el-anchor-link>
        <el-anchor-link href="#constrains" title="constrains"></el-anchor-link>
        <el-anchor-link href="#outputFormat" title="outputFormat"></el-anchor-link>
        <el-anchor-link href="#workflow" title="workflow"></el-anchor-link>
      </el-anchor>
    </header>
    <section
      ref="scrollContainerRef"
      class="h-full px-4 rounded bg-white overflow-y-auto"
      style="padding-bottom: 160px; margin-top: 10px"
    >
      <el-form class="pt-4" id="basic" ref="basicRef" :model="formParam">
        <Grid ref="gridRef" :gap="[20, 0]">
          <GridItem v-for="(item, index) in columns" :key="item.prop" v-bind="getResponsive(item)" :index="index">
            <YiFormItem :column="item" :form-param="formParam" />
          </GridItem>
        </Grid>
      </el-form>
      <div id="skills">skills</div>
      <div id="goals">goals</div>
      <div id="constrains">constrains</div>
      <div id="outputFormat">outputFormat</div>
      <div id="workflow">workflow</div>
    </section>
  </div>
</template>

<script setup lang="ts" name="DetailForm">
import { ref, unref } from "vue";
import { ColumnProps } from "@/components/ProTable/interface";
import YiFormItem from "@/components/YiFormItem/index.vue";
import Grid from "@/components/Grid/index.vue";
import GridItem from "@/components/Grid/components/GridItem.vue";

import { genColumns } from "./metadata";

// 获取响应式设置;
const getResponsive = (item: ColumnProps) => {
  return {
    span: item.form?.span,
    offset: item.form?.offset ?? 0,
    xs: item.form?.xs,
    sm: item.form?.sm,
    md: item.form?.md,
    lg: item.form?.lg,
    xl: item.form?.xl
  };
};

// 获取响应式断点
const gridRef = ref();

const columns = genColumns;

const formParam = ref({});

// 定义 enumMap 存储 enum 值（避免异步请求无法格式化单元格内容 || 无法填充搜索下拉选择）
const enumMap = ref(new Map<string, { [key: string]: any }[]>());
const setEnumMap = async ({ prop, enum: enumValue }: ColumnProps) => {
  if (!enumValue) return;
  // 如果当前 enumMap 存在相同的值 return
  if (enumMap.value.has(prop!) && (typeof enumValue === "function" || enumMap.value.get(prop!) === enumValue)) return;

  // 当前 enum 为静态数据，则直接存储到 enumMap
  if (typeof enumValue !== "function") return enumMap.value.set(prop!, unref(enumValue!));

  // 为了防止接口执行慢，而存储慢，导致重复请求，所以预先存储为[]，接口返回后再二次存储
  enumMap.value.set(prop!, []);

  // 当前 enum 为后台数据需要请求数据，则调用该请求接口，并存储到 enumMap
  const { data } = await enumValue();
  enumMap.value.set(prop!, data);
};

columns.forEach(async item => {
  // 设置 enumMap
  await setEnumMap(item);
  if (item.prop) {
    formParam.value[item.prop] = item.form?.value ?? "";
  }
});

const scrollContainerRef = ref<HTMLElement | null>(null);

const handleClick = (e: MouseEvent) => {
  e.preventDefault();
};
</script>
