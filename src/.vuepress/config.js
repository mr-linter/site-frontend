const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'MR Linter',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Validator for your pull/merge requests',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  theme: 'thindark',

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    algolia: {
      apiKey: 'b20717725d4699fd54f4258e966a5ae1',
      indexName: 'mr-linter-dev',
      appId: 'LXPMH4BSR7',
      searchParameters: [],
      facetFilters: [],
    },
    nav: [
      {
        text: 'Try',
        link: '/try/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'Docs',
        link: '/guide/'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/ArtARTs36/php-merge-request-linter'
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'getting-started',
            'examples',
            'rules',
            'conditions',
            'custom-rule',
            'run-in-docker',
            'development',
            'notifications',
            'comments',
            'CHANGELOG',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
