# YiDrawer 抽屉组件

基于Element Plus的ElDrawer封装的通用抽屉组件，支持表单展示/编辑/查看功能

## 基本用法

```vue
<YiDrawer ref="drawerRef" :get-table-list="getTableList" />
```

## Props

| 参数名         | 类型       | 默认值  | 说明                         |
|----------------|------------|---------|----------------------------|
| isView         | boolean    | false   | 是否为查看模式              |
| title          | string     | -       | 抽屉标题                    |
| row            | object     | {}      | 表单数据对象                |
| formItems      | FormItem[] | []      | 表单项配置数组              |
| api            | function   | -       | 表单提交的API函数           |
| getTableList   | function   | -       | 提交成功后刷新表格的回调函数 |

## FormItem 配置

```ts
interface FormItem {
  prop: string      // 表单字段名
  label: string     // 表单项标签
  form: {
    el: 'el-input' | 'el-select' | 'upload-img' | 'upload-imgs'  // 表单组件类型
    rules?: FormItemRule[]  // 校验规则
    placeholder?: string    // 自定义占位符
    enum?: {                // 选择框选项（el-select时必填）
      value: string | number
      label: string
    }[]
  }
}
```

## 功能特性

1. 支持多种表单组件：
   - 输入框（el-input）
   - 选择框（el-select）
   - 单图上传（upload-img）
   - 多图上传（upload-imgs）

2. 自动处理：
   - 表单验证
   - 提交状态loading
   - 成功/失败反馈提示
   - 抽屉关闭时自动重置表单

3. 查看模式：
   - 自动禁用所有表单组件
   - 隐藏必填星号
   - 隐藏提交按钮

## 方法

| 方法名        | 说明               |
|--------------|--------------------|
| acceptParams | 打开抽屉并接收参数 |

## 使用示例

```vue
<script setup>
const formItems = [
  {
    prop: 'name',
    label: '姓名',
    form: {
      el: 'el-input',
      rules: [{ required: true, message: '姓名不能为空' }]
    }
  },
  {
    prop: 'avatar',
    label: '头像',
    form: {
      el: 'upload-img'
    }
  }
]

const handleOpen = () => {
  drawerRef.value?.acceptParams({
    title: '新增用户',
    row: {},
    formItems,
    api: addUser
  })
}
</script>
```

