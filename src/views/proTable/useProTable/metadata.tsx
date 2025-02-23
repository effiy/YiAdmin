import { reactive } from "vue";

import { User } from "@/api/interface";
import { genderType } from "@/utils/dict";
import { ColumnProps } from "@/components/ProTable/interface";

export const genColumns = reactive<ColumnProps<User.ResUserList>[]>([
  { type: "selection", fixed: "left", width: 70 },
  { type: "sort", label: "Sort", width: 80 },
  { type: "expand", label: "Expand", width: 85 },
  {
    search: { el: "el-input", tooltip: "我是搜索提示" },
    prop: "username",
    label: "用户姓名"
  },
  {
    search: { el: "yi-input-number" },
    // search: {
    //   // 自定义 search 显示内容
    //   render: ({ searchParam }) => {
    //     return (
    //       <div class="flex-center">
    //         <el-input vModel_trim={searchParam.minAge} placeholder="最小年龄" />
    //         <span class="mr10 ml10">-</span>
    //         <el-input vModel_trim={searchParam.maxAge} placeholder="最大年龄" />
    //       </div>
    //     );
    //   }
    // },
    prop: "user.detail.age",
    label: "年龄"
  },
  {
    search: { el: "el-select", props: { filterable: true } },
    prop: "gender",
    label: "性别",
    // 字典数据（本地数据）
    enum: genderType,
    // 字典请求不带参数
    // enum: getUserGender,
    // 字典请求携带参数
    // enum: () => getUserGender({ id: 1 }),
    fieldNames: { label: "label", value: "value" }
  },
  { prop: "idCard", label: "身份证号", search: { el: "el-input" } },
  { prop: "email", label: "邮箱" },
  { prop: "address", label: "居住地址" },
  {
    search: {
      el: "el-date-picker",
      span: 2,
      props: { type: "datetimerange", valueFormat: "YYYY-MM-DD HH:mm:ss" },
      defaultValue: ["2022-11-12 11:35:00", "2022-12-12 11:35:00"]
    },
    prop: "createTime",
    label: "创建时间",
    width: 180,
    headerEl: "create-time-header-render",
    // headerRender: (scope: HeaderRenderScope<User.ResUserList>) => {
    //   return (
    //     <el-button type="primary" onClick={() => ElMessage.success("我是通过 tsx 语法渲染的表头")}>
    //       {scope.column.label}
    //     </el-button>
    //   );
    // },
    el: "create-time-render"
    // render: scope => {
    //   return (
    //     <el-button type="primary" link onClick={() => ElMessage.success("我是通过 tsx 语法渲染的内容")}>
    //       {scope.row.createTime}
    //     </el-button>
    //   );
    // }
  },
  { prop: "operation", label: "操作", fixed: "right", width: 330 }
]);
