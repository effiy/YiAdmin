<template>
  <el-drawer v-model="drawerVisible" :destroy-on-close="true" size="450px" :title="drawerProps.title">
    <el-form
      ref="formRef"
      label-width="100px"
      label-suffix=" :"
      :disabled="drawerProps.isView"
      :model="drawerProps.row"
      :hide-required-asterisk="drawerProps.isView"
    >
      <el-form-item
        v-for="item in drawerProps.formItems"
        :key="item.prop"
        :label="item.label"
        :prop="item.prop"
        :rules="item.form.rules"
      >
        <!-- 输入框组件 -->
        <el-input
          v-if="item.form.el === 'el-input'"
          v-model="drawerProps.row[item.prop]"
          :placeholder="item.form.placeholder || `请填写${item.label}`"
          clearable
        />

        <!-- 选择框组件 -->
        <el-select
          v-if="item.form.el === 'el-select'"
          v-model="drawerProps.row[item.prop]"
          :placeholder="item.form.placeholder || `请选择${item.label}`"
          clearable
        >
          <el-option v-for="option in item.form.enum" :key="option.value" :label="option.label" :value="option.value" />
        </el-select>

        <!-- 单图上传组件 -->
        <UploadImg
          v-if="item.form.el === 'upload-img'"
          v-model:image-url="drawerProps.row[item.prop]"
          width="135px"
          height="135px"
          :file-size="3"
        >
          <template #empty>
            <el-icon><Avatar /></el-icon>
            <span>请上传头像</span>
          </template>
          <template #tip>头像大小不能超过 3M</template>
        </UploadImg>

        <!-- 多图上传组件 -->
        <UploadImgs
          v-if="item.form.el === 'upload-imgs'"
          v-model:file-list="drawerProps.row[item.prop]"
          height="140px"
          width="140px"
          border-radius="50%"
        >
          <template #empty>
            <el-icon><Picture /></el-icon>
            <span>请上传照片</span>
          </template>
          <template #tip>照片大小不能超过 5M</template>
        </UploadImgs>
      </el-form-item>
    </el-form>

    <template #footer>
      <el-button @click="closeDrawer">取消</el-button>
      <el-button v-show="!drawerProps.isView" type="primary" :loading="loading" @click="handleSubmit"> 确定 </el-button>
    </template>
  </el-drawer>
</template>

<script setup lang="ts" name="YiDrawer">
import { ref } from "vue";
import { ElMessage, FormInstance } from "element-plus";
import UploadImg from "@/components/Upload/Img.vue";
import UploadImgs from "@/components/Upload/Imgs.vue";
import type { DrawerProps } from "./types";

const drawerVisible = ref(false);
const loading = ref(false);
const formRef = ref<FormInstance>();

const drawerProps = ref<DrawerProps>({
  isView: false,
  title: "",
  row: {},
  formItems: []
});

// 关闭抽屉
const closeDrawer = () => {
  drawerVisible.value = false;
  formRef.value?.resetFields();
};

// 接收父组件参数
const acceptParams = (params: DrawerProps) => {
  drawerProps.value = params;
  drawerVisible.value = true;
};

// 提交表单
const handleSubmit = async () => {
  if (!formRef.value) return;

  try {
    await formRef.value.validate();
    loading.value = true;

    if (drawerProps.value.api) {
      await drawerProps.value.api(drawerProps.value.row);
      ElMessage.success(`${drawerProps.value.title}成功！`);
      drawerProps.value.getTableList?.();
      closeDrawer();
    }
  } catch (error) {
    console.error("表单提交错误:", error);
    ElMessage.error("操作失败，请重试！");
  } finally {
    loading.value = false;
  }
};

defineExpose({
  acceptParams
});
</script>
