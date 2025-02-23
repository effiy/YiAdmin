<template>
  <div class="table-box">
    <ProTable
      ref="proTable"
      title="用户列表"
      highlight-current-row
      :columns="columns"
      :request-api="getUserList"
      :row-class-name="tableRowClassName"
      :span-method="objectSpanMethod"
      :show-summary="true"
      :summary-method="getSummaries"
      @row-click="rowClick"
    >
      <!-- 表格 header 按钮 -->
      <template #tableHeader="scope">
        <el-button type="primary" :icon="CirclePlus" @click="proTable?.element?.toggleAllSelection">全选 / 全不选</el-button>
        <el-button type="primary" :icon="Pointer" plain @click="setCurrent">选中第五行</el-button>
        <el-button type="danger" :icon="Delete" plain :disabled="!scope.isSelected" @click="batchDelete(scope.selectedListIds)">
          批量删除用户
        </el-button>
      </template>
      <!-- Expand -->
      <template #expand="scope">
        {{ scope.row }}
      </template>
      <!-- 表格操作 -->
      <template #operation="scope">
        <el-button type="primary" link :icon="Refresh" @click="resetPass(scope.row)">重置密码</el-button>
        <el-button type="primary" link :icon="Delete" @click="deleteAccount(scope.row)">删除</el-button>
      </template>
      <template #append>
        <span style="color: var(--el-color-primary)">我是插入在表格最后的内容。若表格有合计行，该内容会位于合计行之上。</span>
      </template>
    </ProTable>
  </div>
</template>

<script setup lang="tsx" name="complexProTable">
import { ref } from "vue";
import { ElMessage } from "element-plus";
import { User } from "@/api/interface";
import { useHandleData } from "@/hooks/useHandleData";
import ProTable from "@/components/ProTable/index.vue";
import { CirclePlus, Pointer, Delete, Refresh } from "@element-plus/icons-vue";
import type { TableColumnCtx } from "element-plus/es/components/table/src/table-column/defaults";
import { ProTableInstance } from "@/components/ProTable/interface";
import { getUserList, deleteUser, resetUserPassWord } from "@/api/modules/user";

import { genColumns } from "@/views/proTable/treeProTable/metadata";

// ProTable 实例
const proTable = ref<ProTableInstance>();

// 表格配置项
const columns = genColumns;

// 选择行
const setCurrent = () => {
  proTable.value?.element?.setCurrentRow(proTable.value?.tableData[4]);
  proTable.value?.element?.toggleRowSelection(proTable.value?.tableData[4], true);
};

// 表尾合计行（自行根据条件计算）
interface SummaryMethodProps<T = User.ResUserList> {
  columns: TableColumnCtx<T>[];
  data: T[];
}
const getSummaries = (param: SummaryMethodProps) => {
  const { columns } = param;
  const sums: string[] = [];
  columns.forEach((column, index) => {
    if (index === 0) return (sums[index] = "合计");
    else sums[index] = "N/A";
  });
  return sums;
};

// 列合并
interface SpanMethodProps {
  row: User.ResUserList;
  column: TableColumnCtx<User.ResUserList>;
  rowIndex: number;
  columnIndex: number;
}
const objectSpanMethod = ({ rowIndex, columnIndex }: SpanMethodProps) => {
  if (columnIndex === 3) {
    if (rowIndex % 2 === 0) return { rowspan: 2, colspan: 1 };
    else return { rowspan: 0, colspan: 0 };
  }
};

// 设置列样式
const tableRowClassName = ({ rowIndex }: { row: User.ResUserList; rowIndex: number }) => {
  if (rowIndex === 2) return "warning-row";
  if (rowIndex === 6) return "success-row";
  return "";
};

// 单击行
const rowClick = (row: User.ResUserList, column: TableColumnCtx<User.ResUserList>) => {
  if (column.property == "radio" || column.property == "operation") return;
  console.log(row);
  ElMessage.success("当前行被点击了！");
};

// 删除用户信息
const deleteAccount = async (params: User.ResUserList) => {
  await useHandleData(deleteUser, { key: [params.key] }, `删除【${params.username}】用户`);
  proTable.value?.getTableList();
};

// 批量删除用户信息
const batchDelete = async (key: string[]) => {
  await useHandleData(deleteUser, { key }, "删除所选用户信息");
  proTable.value?.clearSelection();
  proTable.value?.getTableList();
};

// 重置用户密码
const resetPass = async (params: User.ResUserList) => {
  await useHandleData(resetUserPassWord, { id: params.key }, `重置【${params.username}】用户密码`);
  proTable.value?.getTableList();
};
</script>

<style lang="less">
.el-table .warning-row,
.el-table .warning-row .el-table-fixed-column--right,
.el-table .warning-row .el-table-fixed-column--left {
  background-color: var(--el-color-warning-light-9);
}
.el-table .success-row,
.el-table .success-row .el-table-fixed-column--right,
.el-table .success-row .el-table-fixed-column--left {
  background-color: var(--el-color-success-light-9);
}
</style>
