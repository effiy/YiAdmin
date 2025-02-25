import mdItCustomAttrs from "markdown-it-custom-attrs";

export default {
  title: "Yichengliang",
  lang: "zh-CN",
  description: "中文文档",
  head: [
    ["meta", { name: "author", content: "Yichengliang" }],
    ["meta", { name: "keywords", content: "Docs" }],
    ["link", { rel: "icon", href: "/logo.svg" }],
    ["link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css" }],
    ["script", { src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js" }]
  ],
  markdown: { config: md => md.use(mdItCustomAttrs, "image", { "data-fancybox": "gallery" }) },
  lastUpdated: true,
  themeConfig: {
    logo: "/logo.svg",
    editLink: {
      text: "为此页提供修改建议",
      pattern: "https://github.com/effiy/YiAdmin-Docs"
    },
    socialLinks: [{ icon: "github", link: "https://github.com/effiy/YiAdmin" }],
    footer: {
      message: "MIT License.",
      copyright: "Copyright © 2025 Yichengliang"
    },
    nav: [
      { text: "指南", link: "/指南/介绍", activeMatch: "/指南/介绍" },
      { text: "组件", link: "/组件/YiDrawer", activeMatch: "/组件/" },
      {
        text: "相关链接",
        items: [
          { text: "vitepress", link: "https://vitepress.dev" },
          { text: "每日一题", link: "https://q.shanyue.tech/fe/engineering/84" },
        ]
      }
    ],

    sidebar: {
      "/指南/": [
        { text: "介绍", link: "/指南/介绍" },
        {
          text: "基础",
          collapsible: true,
          items: [
            { text: "快速上手", link: "/指南/基础/快速上手" },
            { text: "风格指南", link: "/指南/基础/风格指南" },
            { text: "目录结构", link: "/指南/基础/目录结构" },
            { text: "菜单路由", link: "/指南/基础/菜单路由" },
            { text: "权限管理", link: "/指南/基础/权限管理" },
            { text: "网络请求", link: "/指南/基础/网络请求" },
            { text: "构建部署", link: "/指南/基础/构建部署" }
          ]
        },
        {
          text: "进阶",
          collapsible: true,
          items: [
            { text: "项目规范", link: "/指南/进阶/项目规范" },
            { text: "单元测试", link: "/指南/进阶/单元测试" },
            { text: "主题配置", link: "/指南/进阶/主题配置" },
            { text: "布局模式", link: "/指南/进阶/布局模式" },
            { text: "免费证书", link: "/指南/进阶/免费证书" },
            { text: "配置流程", link: "/指南/进阶/配置流程" },
            { text: "性能优化", link: "/指南/进阶/性能优化" },
            { text: "模块化设计", link: "/指南/进阶/模块化设计" },
          ]
        },
        {
          text: "其他",
          collapsible: true,
          items: [{ text: "常见问题", link: "/指南/其他/常见问题" }]
        }
      ],
      "/组件/": [
        {
          text: "基础组件",
          collapsible: true,
          items: [
            { text: "YiDrawer 抽屉", link: "/组件/YiDrawer" }
          ]
        }
      ]
    }
  }
};
