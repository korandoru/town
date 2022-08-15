// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: '开源小镇',
    tagline: '连接社群的开发者',
    url: 'https://town.korandoru.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    organizationName: 'korandoru',
    projectName: 'open-source-town',

    i18n: {
        defaultLocale: 'zh-CN',
        locales: ['zh-CN'],
        localeConfigs: {
            'zh-CN': {label: "简体中文"},
        },
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    path: "docs",
                    routeBasePath: "/docs",
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/korandoru/open-source-town/tree/main/',
                },
                blog: {
                    showReadingTime: true,
                    editUrl: 'https://github.com/korandoru/open-source-town/tree/main/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: '开源小镇',
                logo: {
                    alt: 'Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {type: 'doc', docId: 'overview', position: 'left', label: '主页'},
                    {to: '/blog', label: '博客', position: 'left'},
                    {
                        href: 'https://github.com/korandoru/open-source-town',
                        position: 'right',
                        className: 'header-github-link',
                        'aria-label': 'GitHub repository',
                    },
                    {type: 'localeDropdown', position: 'right'},
                ],
            },
            footer: {
                style: 'dark',
                links: [],
                copyright: `Copyright © ${new Date().getFullYear()} Korandoru Contributors.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
    themes: [
        [require.resolve("@easyops-cn/docusaurus-search-local"), {hashed: true}],
    ]
};

module.exports = config;
