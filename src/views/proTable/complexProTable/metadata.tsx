import { reactive } from "vue";

import { User } from "@/api/interface";
import { ElMessage } from "element-plus";
import { genderType, userStatus } from "@/utils/dict";
import { ColumnProps, HeaderRenderScope } from "@/components/ProTable/interface";

// 自定义渲染表头（使用tsx语法）
const headerRender = (scope: HeaderRenderScope<User.ResUserList>) => {
  return (
    <el-button type="primary" onClick={() => ElMessage.success("我是通过 tsx 语法渲染的表头")}>
      {scope.column.label}
    </el-button>
  );
};

export const genColumns = reactive<ColumnProps<User.ResUserList>[]>([
  { type: "selection", width: 80 },
  { type: "index", label: "#", width: 80 },
  { type: "expand", label: "Expand", width: 100 },
  {
    prop: "base",
    label: "基本信息",
    headerRender,
    _children: [
      { prop: "username", label: "用户姓名", width: 160 },
      { prop: "user.detail.age", label: "年龄", width: 120 },
      {
        prop: "gender",
        label: "性别",
        width: 100,
        enum: genderType,
        fieldNames: { label: "genderLabel", value: "genderValue" }
      },
      {
        prop: "details",
        label: "详细资料",
        _children: [
          { prop: "idCard", label: "身份证号", width: 160 },
          { prop: "email", label: "邮箱", width: 180 },
          { prop: "address", label: "居住地址", width: 180 }
        ]
      }
    ]
  },
  {
    prop: "status",
    label: "用户状态",
    tag: true,
    enum: userStatus,
    fieldNames: { label: "userLabel", value: "userStatus" }
  },
  { prop: "createTime", label: "创建时间", width: 200 },
  { prop: "operation", label: "操作", fixed: "right", width: 230 }
]);
