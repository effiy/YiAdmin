<template>
  <el-form-item :rules="column.form?.rules">
    <template #label>
      <el-space :size="4">
        <span>{{ `${column.form?.label ?? column.label}` }}</span>
        <el-tooltip v-if="column.form?.tooltip" effect="dark" :content="column.form?.tooltip" placement="top">
          <i :class="'iconfont icon-question'"></i>
        </el-tooltip>
      </el-space>
      <span>&nbsp;:</span>
    </template>
    <UploadImg
      v-if="column.form?.el === 'upload-img'"
      v-model:image-url="_formParam[column.form?.key ?? handleProp(column.prop!)]"
      width="135px"
      height="135px"
      :file-size="3"
    >
      <template #empty>
        <el-icon><Avatar /></el-icon>
        <span>请上传头像</span>
      </template>
      <template #tip> 头像大小不能超过 3M </template>
    </UploadImg>
    <UploadImgs
      v-else-if="column.form?.el === 'upload-imgs'"
      v-model:file-list="_formParam[column.form?.key ?? handleProp(column.prop!)]"
      height="140px"
      width="140px"
      border-radius="50%"
    >
      <template #empty>
        <el-icon><Picture /></el-icon>
        <span>请上传照片</span>
      </template>
      <template #tip> 照片大小不能超过 5M </template>
    </UploadImgs>
    <component
      v-else
      :is="`${column.form?.el}`"
      v-bind="{ ...placeholder, ...column.form?.props, formParam: _formParam, clearable }"
      v-model.trim="_formParam[column.form?.key ?? handleProp(column.prop!)]"
      :data="column.form?.el === 'el-tree-select' ? column.enum : []"
      :options="['el-cascader', 'el-select-v2'].includes(column.form?.el!) ? column.enum : []"
    >
      <template v-if="column.form?.el === 'el-cascader'" #default="{ data }">
        <span>{{ data.label }}</span>
      </template>
      <template v-if="column.form?.el === 'el-select'">
        <component
          :is="`el-option`"
          v-for="(col, index) in column.enum"
          :key="index"
          :label="col['label']"
          :value="col['value']"
        ></component>
      </template>
    </component>
  </el-form-item>
</template>

<script setup lang="ts" name="FormItem">
import { computed } from "vue";
import { handleProp } from "@/utils";
import UploadImg from "@/components/Upload/Img.vue";
import UploadImgs from "@/components/Upload/Imgs.vue";
import { ColumnProps } from "@/components/ProTable/interface";

interface FormItem {
  column: ColumnProps;
  formParam: { [key: string]: any };
}
const props = defineProps<FormItem>();

// Re receive FormParam
const _formParam = computed(() => props.formParam);

// 处理默认 placeholder
const placeholder = computed(() => {
  const form = props.column.form;
  if (["datetimerange", "daterange", "monthrange"].includes(form?.props?.type) || form?.props?.isRange) {
    return {
      rangeSeparator: form?.props?.rangeSeparator ?? "至",
      startPlaceholder: form?.props?.startPlaceholder ?? "开始时间",
      endPlaceholder: form?.props?.endPlaceholder ?? "结束时间"
    };
  }
  const placeholder = form?.props?.placeholder ?? (form?.el?.includes("input") ? "请输入" : "请选择");
  return { placeholder };
});

// 是否有清除按钮 (当搜索项有默认值时，清除按钮不显示)
const clearable = computed(() => {
  const form = props.column.form;
  return form?.props?.clearable ?? (form?.defaultValue == null || form?.defaultValue == undefined);
});
</script>
