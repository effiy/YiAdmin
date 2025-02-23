import { reactive } from "vue";

import { User } from "@/api/interface";
import { genderType, userStatus } from "@/utils/dict";
import { ColumnProps } from "@/components/ProTable/interface";

export const genColumns = reactive<ColumnProps<User.ResUserList>[]>([
  { type: "index", label: "#", width: 80 },
  { prop: "username", label: "用户姓名", width: 120, search: { el: "el-input" } },
  {
    prop: "gender",
    label: "性别",
    width: 120,
    sortable: true,
    enum: genderType,
    search: { el: "el-select" },
    fieldNames: { label: "label", value: "value" }
  },
  { prop: "idCard", label: "身份证号" },
  { prop: "email", label: "邮箱" },
  { prop: "address", label: "居住地址" },
  {
    prop: "status",
    label: "用户状态",
    width: 120,
    sortable: true,
    tag: true,
    enum: userStatus,
    search: { el: "el-select" },
    fieldNames: { label: "label", value: "value" }
  },
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
    el: "create-time-render"
  },
  { prop: "operation", label: "操作", width: 330, fixed: "right" }
]);
