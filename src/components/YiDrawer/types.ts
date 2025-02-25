export interface FormItemOption {
  label: string;
  value: string | number;
}

export interface FormItem {
  prop: string;
  label: string;
  form: {
    el: "el-input" | "el-select" | "upload-img" | "upload-imgs";
    rules?: Record<string, any>[];
    placeholder?: string;
    enum?: FormItemOption[];
  };
}

export interface DrawerProps {
  title: string;
  isView: boolean;
  row: Record<string, any>;
  formItems: FormItem[];
  api?: (params: any) => Promise<any>;
  getTableList?: () => void;
}
