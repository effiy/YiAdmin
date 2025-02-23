import { reactive } from "vue";

import { User } from "@/api/interface";
import { genderType, userStatus } from "@/utils/dict";
import { ColumnProps } from "@/components/ProTable/interface";

// selectFilter 数据（用户角色为后台数据）
export const selectFilterData = reactive([
  {
    title: "用户状态(单)",
    key: "userStatus",
    options: [
      { label: "全部", value: "" },
      { label: "在职", value: "1", icon: "User" },
      { label: "待培训", value: "2", icon: "Bell" },
      { label: "待上岗", value: "3", icon: "Clock" },
      { label: "已离职", value: "4", icon: "CircleClose" },
      { label: "已退休", value: "5", icon: "CircleCheck" }
    ]
  },
  {
    title: "用户角色(多)",
    key: "userRole",
    multiple: true,
    options: []
  }
]);

export const genColumns = reactive<ColumnProps<User.ResUserList>[]>([
  { type: "radio", label: "单选", width: 80 },
  { type: "index", label: "#", width: 80 },
  { prop: "username", label: "用户姓名", width: 120 },
  { prop: "gender", label: "性别", width: 120, sortable: true, enum: genderType },
  { prop: "idCard", label: "身份证号" },
  { prop: "email", label: "邮箱" },
  { prop: "address", label: "居住地址" },
  { prop: "status", label: "用户状态", width: 120, sortable: true, tag: true, enum: userStatus },
  { prop: "createTime", label: "创建时间", width: 180, sortable: true },
  { prop: "operation", label: "操作", width: 330, fixed: "right" }
]);
