<template>
  <el-drawer v-model="drawerVisible" :destroy-on-close="true" size="450px" :title="`${drawerProps.title}`">
    <el-form
      ref="ruleFormRef"
      label-width="100px"
      label-suffix=" :"
      :disabled="drawerProps.isView"
      :model="drawerProps.row"
      :hide-required-asterisk="drawerProps.isView"
    >
      <el-form-item
        v-for="formItem in drawerProps.formItems"
        :key="formItem.prop"
        :label="formItem.label"
        :prop="formItem.prop"
        :rules="formItem.form.rules"
      >
        <el-input
          v-if="formItem.form.el === 'el-input'"
          v-model="drawerProps.row![formItem.prop]"
          :placeholder="formItem.form['placeholder'] || `请填写${formItem.label}`"
          clearable
        ></el-input>
        <el-select
          v-if="formItem.form.el === 'el-select'"
          v-model="drawerProps.row![formItem.prop]"
          :placeholder="formItem.form['placeholder'] || `请选择${formItem.label}`"
          clearable
        >
          <el-option v-for="option in genderType" :key="option.value" :label="option.label" :value="option.value" />
        </el-select>
        <UploadImg
          v-if="formItem.form.el === 'upload-img'"
          v-model:image-url="drawerProps.row![formItem.prop]"
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
          v-if="formItem.form.el === 'upload-imgs'"
          v-model:file-list="drawerProps.row![formItem.prop]"
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
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="drawerVisible = false">取消</el-button>
      <el-button v-show="!drawerProps.isView" type="primary" @click="handleSubmit">确定</el-button>
    </template>
  </el-drawer>
</template>

<script setup lang="ts" name="UserDrawer">
import { ref } from "vue";
import { genderType } from "@/utils/dict";
import { ElMessage, FormInstance, UploadUserFile } from "element-plus";
import UploadImg from "@/components/Upload/Img.vue";
import UploadImgs from "@/components/Upload/Imgs.vue";

interface DrawerProps {
  title: string;
  isView: boolean;
  row: Partial<any>;
  formItems: any[];
  api?: (params: any) => Promise<any>;
  getTableList?: () => void;
}

const drawerVisible = ref(false);
const drawerProps = ref<DrawerProps>({
  isView: false,
  title: "",
  row: {
    avatar: "" as string,
    photo: [] as UploadUserFile[],
    username: "",
    gender: 0,
    email: "",
    address: ""
  },
  formItems: []
});

// 接收父组件传过来的参数
const acceptParams = (params: DrawerProps) => {
  drawerProps.value = params;
  drawerVisible.value = true;
};

// 提交数据（新增/编辑）
const ruleFormRef = ref<FormInstance>();
const handleSubmit = () => {
  ruleFormRef.value!.validate(async valid => {
    if (!valid) return;
    try {
      await drawerProps.value.api!(drawerProps.value.row);
      ElMessage.success({ message: `${drawerProps.value.title}用户成功！` });
      drawerProps.value.getTableList!();
      drawerVisible.value = false;
    } catch (error) {
      console.log(error);
    }
  });
};

defineExpose({
  acceptParams
});
</script>
