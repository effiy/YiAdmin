import { FormItemRule, FormItemProps } from "element-plus";

type Arrayable<T> = T | T[];

// 请求响应参数（不包含data）
export interface Result {
  code: string;
  msg: string;
}

// 请求响应参数（包含data）
export interface ResultData<T = any> extends Result {
  data: T;
}

// 分页响应参数
export interface ResPage<T> {
  list: T[];
  pageNum: number;
  pageSize: number;
  total: number;
}

// 分页请求参数
export interface ReqPage {
  pageNum: number;
  pageSize: number;
}

// 文件上传模块
export namespace Upload {
  export interface ResFileUrl {
    fileUrl: string;
  }
}

// 登录模块
export namespace Login {
  export interface ReqLoginForm {
    username: string;
    password: string;
  }
  export interface ResLogin {
    access_token: string;
  }
  export interface ResAuthButtons {
    [key: string]: string[];
  }
}

export namespace Dict {
  export interface ReqDictParams extends ReqPage {
    cname: string;
    key: string;
    label: string;
    value: string;
    icon: string;
    dictType: string;
  }
  export interface ResDictList {
    label: string; // "男"
    value: string | number; // 1
    dictType: string; // genderType
    icon: string; // "User"
    children: ResDictList[];
  }
}

export namespace Model {
  export interface ReqModelParams extends ReqPage {
    key: string;
    name: string;
    label: string;
    prop: string;
    isShow: boolean;
    search: {
      el: string;
    };
    form: {
      el: string;
      props: any[];
    };
  }

  export interface ResModelList {
    name: string;
    type: string; // "radio"
    label: string; // "用户名"
    prop: string; // username
    width: number; // 120
    sortable: boolean; // true
    enum: any; // genderType
    isShow: boolean; // false
    search: {
      el: string; // el-input
      rules?: Arrayable<FormItemRule>; // [{ required: true, message: "请填写字典类型" }]
      props: FormItemProps; // { filterable: true }
    };
    form: {
      el: string; // el-input
      rules?: Arrayable<FormItemRule>; // [{ required: true, message: "请填写字典类型" }]
      props: FormItemProps; // { filterable: true }
    };
  }
}

export namespace Api {
  export interface ReqApiParams extends ReqPage {
    key: string;
    name: string;
    domain: string;
    path: string;
    method: string;
    params: any;
    desc: string;
  }
  export interface ResApiList {
    key: string;
    name: string;
    domain: string;
    path: string;
    method: string;
    params: any;
    desc: string;
    children?: ResApiList[];
  }
}

// 用户管理模块
export namespace User {
  export interface ReqUserParams extends ReqPage {
    avatar: string;
    photo: string[];
    username: string;
    gender: number;
    idCard: string;
    email: string;
    address: string;
    createTime: string[];
    status: number;
  }
  export interface ResUserList {
    key: string;
    username: string; // YiAi
    gender: number; // 0
    age: number; // 35
    bio: string; // talk is cheap, show me your code
    mobile: string; // 18679982008
    residence: string; // China
    occupation: string; // Software Engineer
    skills: [
      {
        title: string; // "JavaScript"
        level: string; // "advanced"
        description: string; // "5 years of experience"
      }
    ];
    background: {
      hometown: string; // "San Francisco"
      education: string; // "Bachelor's in Computer Science"
      hobbies: string[]; // ["coding", "reading", "hiking"]
      family: {
        parents: string; // "both alive"
        siblings: number; // 1
        marital_status: string; // "single"
      };
    };
    goals: {
      short_term: string; // "Finish the current software project on time"
      long_term: string; // "Become a lead developer in a tech company"
    };
    strengths: string[]; // ["problem-solving", "teamwork", "adaptability"]
    weaknesses: string[]; // ["overthinking", "sometimes too blunt"]
    company: string; // "Google"
    website: string; // "https://www.example.com"
    github: string; // "https://github.com/effiy"
    idCard: string; // "110101199003076666"
    email: string; // "18679982008@sina.cn"
    address: string; // "北京市朝阳区"
    createTime: string; // "2021-07-01 00:00:00"
    status: number; // 1
    avatar: string; // "https://avatars.githubusercontent.com/u/20842188?v=4"
    photo: any[]; // []
    children?: ResUserList[];
  }
  export interface ResStatus {
    userLabel: string;
    userValue: number;
  }
  export interface ResGender {
    genderLabel: string;
    genderValue: number;
  }
  export interface ResDepartment {
    id: string;
    name: string;
    children?: ResDepartment[];
  }
  export interface ResRole {
    id: string;
    name: string;
    children?: ResDepartment[];
  }
}
