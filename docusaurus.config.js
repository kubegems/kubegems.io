// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KubeGems',
  tagline: 'KubeGems 容器云平台',
  url: 'https://kubegems.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'kubegems',
  projectName: 'kubegems.io',
  trailingSlash: false,

  plugins: [
    require.resolve('docusaurus-plugin-image-zoom'),
    'docusaurus-plugin-sass',
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'community',
        path: 'community',
        routeBasePath: 'community',
        sidebarPath: require.resolve('./sidebarsCommunity.js'),
      }),
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // lastVersion: 'current',
          // versions: {
          //   current: {
          //     label: 'v1.23',
          //   },
          // },
          // Please change this to your repo.
          editUrl: 'https://github.com/kubegems/kubegems.io/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          blogSidebarTitle: '最新博客',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/styles/custom.scss'),
        },
        gtag: {
          trackingID: 'G-XB3JTSLM8D',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
    localeConfigs: {
      'zh-CN': {
        label: '简体中文',
        direction: 'ltr',
        htmlLang: 'zh-CN',
      },
      'en-US': {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
    },
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: 'go-import', 
          content: 'kubegems.io/kubegems git https://github.com/kubegems/kubegems'
        },
        {
          name: 'go-import', 
          content: 'kubegems.io/bundle-controller git https://github.com/kubegems/bundle-controller'
        },
        {
          name: 'go-import', 
          content: 'kubegems.io/configer git https://github.com/kubegems/configer'
        },
        {
          name: 'go-import', 
          content: 'kubegems.io/ingress-nginx-operator git https://github.com/kubegems/ingress-nginx-operator'
        },
        {
          name: 'go-import',
          content: 'kubegems.io/modelx git https://github.com/kubegems/modelx'
        },
        {
          name: 'go-source', 
          content: 'kubegems.io/kubegems https://github.com/kubegems/kubegems https://github.com/kubegems/kubegems/tree/master{/dir} https://github.com/kubegems/kubegems/blob/master{/dir}/{file}#L{line}'
        },
        {
          name: 'go-source', 
          content: 'kubegems.io/bundle-controller https://github.com/kubegems/bundle-controller https://github.com/kubegems/bundle-controller/tree/master{/dir} https://github.com/kubegems/bundle-controller/blob/master{/dir}/{file}#L{line}'
        },
        {
          name: 'go-source', 
          content: 'kubegems.io/configer https://github.com/kubegems/configer https://github.com/kubegems/configer/tree/master{/dir} https://github.com/kubegems/configer/blob/master{/dir}/{file}#L{line}'
        },
        {
          name: 'go-source', 
          content: 'kubegems.io/ingress-nginx-operator https://github.com/kubegems/ingress-nginx-operator https://github.com/kubegems/ingress-nginx-operator/tree/master{/dir} https://github.com/kubegems/ingress-nginx-operator/blob/master{/dir}/{file}#L{line}'
        },
        {
          name: 'go-source',
          content: 'kubegems.io/modelx https://github.com/kubegems/modelx https://github.com/kubegems/modelx/tree/main{/dir} https://github.com/kubegems/modelx/blob/main{/dir}/{file}#L{line}'
        },
      ],
      // announcementBar: {
      //   id: 'support_us',
      //   content:
      //     '⭐️ <b>If you like KubeGems, give it a star on <a target="_blank" href="https://github.com/kubegems/kubegems">GitHub</a> and follow us on <a target="_blank" href="https://twitter.com/KubeGems">Twitter</a>  <a title="Twitter, Apache License 2.0 &lt;http://www.apache.org/licenses/LICENSE-2.0&gt;, via Wikimedia Commons" href="https://twitter.com/KubeGems"><img width="16" height="13" alt="Twitter-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/32px-Twitter-logo.svg.png"></a></b> ',
      //   backgroundColor: 'rgba(0, 0, 0, 0.03)',
      //   isCloseable: false,
      // },
      hideableSidebar: true,
      autoCollapseSidebarCategories: true,
      zoom: {
        selector: '.markdown :not(em) > img',
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          background: {
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(50, 50, 50)'
          }
        }
      },
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: 'KubeGems',
          src: '/img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'concepts/what-is-kubegems',
            position: 'left',
            label: '文档',
            key: 'doc'
          },
          {
            to: 'blog',
            position: 'left',
            label: '博客',
            key: 'blog'
          },
          {
            to: '/community/support',
            label: '社群',
            position: 'left',
            activeBaseRegex: `/community/`,
            key: 'community'
          },
           {
            to: 'https://wj.qq.com/s2/10923500/96e0/',
            label: 'Contact',
            position: 'left',
            key: 'contact'
          },
          // {
          //   type: 'docsVersionDropdown',
          //   position: 'right',
          //   dropdownActiveClassDisabled: false,
          //   key: 'version'
          // },
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          //   key: 'locale'
          // },
        ],
      },
      // footer: {
      //   style: 'light',
      //   copyright: `Copyright © ${new Date().getFullYear()} KubeGems.io .`,
      // },
      // hideableSidebar: true,
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell', 'bash', 'docker', 'promql', 'yaml', 'nginx'],
      },
    }),
};

module.exports = config;
