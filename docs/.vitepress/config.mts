import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "实时关键数据显示 MOD 手册",
  description: "黑神话悟空 实时关键数据显示 MOD 手册",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: '/assets/logo.svg', width: 24, height: 24 },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DavidingPlus/b1-showinfo-docs' }
    ],

    search: {
      provider: 'local',
      options: {
        searchOptions: {
          detailedView: true
        }
      }
    }
  }
})
