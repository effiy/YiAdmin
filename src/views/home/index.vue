<template>
  <div>
    <GridLayout
      v-model:layout="state.layout"
      :col-num="state.colNum"
      :row-height="30"
      :vertical-compact="true"
      :use-css-transforms="true"
    >
      <GridItem
        v-for="item in state.layout"
        :key="item.i"
        :static="item.static"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
      >
        <ProjectCard v-if="item.el === 'ProjectCard'" :item="item" @add="handleAdd" @remove="handleRemove" />
        <MemberCard v-if="item.el === 'MemberCard'" :item="item" @add="handleAdd" @remove="handleRemove" />
        <CivitaiCard v-if="item.el === 'CivitaiCard'" :item="item" @add="handleAdd" @remove="handleRemove" />
        <TestimonialCard v-if="item.el === 'TestimonialCard'" :item="item" @add="handleAdd" @remove="handleRemove" />
        <PortfolioCard v-if="item.el === 'PortfolioCard'" :item="item" @add="handleAdd" @remove="handleRemove" />
        <PlaceholderCard v-if="item.el === 'PlaceholderCard'" :item="item" @add="handleAdd" @remove="handleRemove" />
      </GridItem>
    </GridLayout>
  </div>
</template>

<script setup>
import { GridLayout, GridItem } from "vue-grid-layout-v3";

import ProjectCard from "./components/ProjectCard/index.vue";
import MemberCard from "./components/MemberCard/index.vue";
import CivitaiCard from "./components/CivitaiCard/index.vue";
import TestimonialCard from "./components/TestimonialCard/index.vue";
import PortfolioCard from "./components/PortfolioCard/index.vue";
import PlaceholderCard from "./components/PlaceholderCard/index.vue";

import { genState } from "./metadata.tsx";

const state = genState;
state.index = state.layout.length;

function handleAdd(item) {
  // Add a new item. It must have a unique key!
  state.layout.push({
    x: (state.layout.length * item.w) % (state.colNum || 12),
    y: state.layout.length + (state.colNum || 12), // puts it at the bottom
    w: item.w,
    h: item.h,
    i: state.index,
    el: item.el
  });
  // Increment the counter to ensure key is always unique.
  state.index++;
}

function handleRemove(val) {
  const index = state.layout.map(item => item.i).indexOf(val);
  state.layout.splice(index, 1);
}
</script>

<style scoped lang="less">
@import "./index.less";
</style>
