import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Daily Us",
  description: "🦊 🐇",
  head: [['link', { rel: 'icon', href: '/avatar.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Memories',
        items: [
          { text: 'Timeline', link: '/memories/index' },
          { text: 'WishList', link: '/memories/wishlist'}
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
