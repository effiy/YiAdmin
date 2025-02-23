import { reactive } from "vue";

import { User } from "@/api/interface";
import { genderType } from "@/utils/dict";
import { ColumnProps } from "@/components/ProTable/interface";

export const genColumns = reactive<ColumnProps<User.ResUserList>[]>([
  {
    prop: "username",
    label: "用户姓名",
    width: 120,
    form: {
      el: "el-input",
      rules: [{ required: true, message: "请填写用户姓名" }],
      value: ""
    }
  },
  {
    prop: "gender",
    label: "性别",
    width: 120,
    sortable: true,
    enum: genderType,
    form: {
      el: "el-select",
      props: { filterable: true },
      rules: [{ required: true, message: "请选择性别" }],
      value: null
    }
  }
]);
