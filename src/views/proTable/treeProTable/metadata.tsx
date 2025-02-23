import { ref, reactive } from "vue";

import { User } from "@/api/interface";
import { genderType, userStatus } from "@/utils/dict";
import { ColumnProps } from "@/components/ProTable/interface";

// 模拟远程加载性别搜索框数据
const loading = ref(false);
const filterGenderEnum = ref<typeof genderType>([]);
const remoteMethod = (query: string) => {
  filterGenderEnum.value = [];
  if (!query) return;
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    filterGenderEnum.value = genderType.filter(item => item.label.includes(query));
  }, 500);
};

export const genColumns = reactive<ColumnProps<User.ResUserList>[]>([
  { type: "index", label: "#", width: 80 },
  { prop: "username", label: "用户姓名" },
  {
    prop: "gender",
    label: "性别",
    sortable: true,
    isFilterEnum: false,
    enum: filterGenderEnum,
    search: {
      el: "el-select",
      props: { placeholder: "请输入性别查询", filterable: true, remote: true, reserveKeyword: true, loading, remoteMethod }
    },
    render: scope => <span>{scope.row.gender === 1 ? "男" : "女"}</span>
  },
  { prop: "idCard", label: "身份证号" },
  { prop: "email", label: "邮箱" },
  { prop: "address", label: "居住地址" },
  {
    prop: "status",
    label: "用户状态",
    sortable: true,
    tag: true,
    enum: userStatus,
    search: { el: "el-tree-select" }
  },
  { prop: "createTime", label: "创建时间", width: 180 },
  { prop: "operation", label: "操作", width: 300, fixed: "right" }
]);
