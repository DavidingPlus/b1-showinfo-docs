import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "黑猴 实时关键数据显示 MOD 手册",
  description: "黑神话悟空 实时关键数据显示 MOD 手册",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '新榜链接', link: 'https://docs.qq.com/sheet/DTUhETnNCQ0RoRm9v' },
      { text: '旧榜链接', link: 'https://docs.qq.com/sheet/DTXNnc09DRGZWVGxt' }
    ],

    sidebar: [
      {
        text: '开始',
        items: [
          { text: '简介', link: '/guide' }
        ]
      }, {
        text: '快速上手',
        items: [
          { text: 'MOD 安装教程', link: '/guide/quick-start/install' },
          { text: '版本发布日志', link: '/guide/quick-start/release' },
          { text: '新榜规则', link: '/guide/quick-start/rules' },
          { text: 'OBS 录制环境搭建', link: '/guide/quick-start/record-video' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DavidingPlus/b1-showinfo-docs' }
    ]
  }
})
