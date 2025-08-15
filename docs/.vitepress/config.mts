import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Daily Us",
  description: "🦊 🐇",
  head: [['link', { rel: 'icon', href: '/assets/avatar.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Memories',
        items: [
          { text: 'Timeline', link: '/memories/' },
          { text: 'Bucket List', link: '/memories/bucketlist'}
        ]
      },
      {
        text: "Daily Life",
        items: [
            {text: '2025.06.28', link: 'dailylife/2025-06-28'}
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
