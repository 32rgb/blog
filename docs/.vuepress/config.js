module.exports = {
  title: '水草的博客',
  description: '水草需要记录学习的内容',
  base: '/blog/',
  theme: 'reco',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '笔记',
        items: [
          { text: 'JS', link: '/notes/js' },
          { text: 'CSS', link: '/notes/css' }
        ]
      }
    ],
    sidebar: [
      {
        title: 'JS',
        path: '/notes/JavaScript',
        collapsable: false,
        children: [
          { title: '首页', path: '/' }
        ]
      },
      {
        title: 'CSS',
        path: '/notes/CSS',
        collapsable: true,
        children: [
          { title: 'JS', path: 'notes/JavaScript' },
          { title: 'CSS', path: 'notes/CSS' }
        ]
      }
    ],
    subSidebar: 'auto'
  }
}