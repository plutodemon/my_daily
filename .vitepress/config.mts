import {defineConfig} from 'vitepress'

export default defineConfig({
    title: "My Daily",
    srcDir: './src',
    metaChunk: true,
    head: [['link', {rel: 'icon', href: 'img/lemon_logo.svg'}]],

    themeConfig: {
        logo: 'img/lemon_logo.svg',

        socialLinks: [
            {icon: 'github', link: 'https://github.com/plutodemon'}
        ],

        search: {
            provider: 'local',
            options: {
                locales: {
                    zh: {
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                noResultsText: '无法找到相关结果',
                                resetButtonTitle: '清除查询条件',
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换'
                                }
                            }
                        }
                    }
                }
            }
        },

        nav: [
            {text: 'Home', link: '/'},
        ],

        sidebar: {
            '/softInstall/': [
                {
                    text: 'Install',
                    items: [
                        {text: 'Windows 配置', link: '/softInstall/'},
                        {text: 'Golang', link: '/softInstall/Golang'},
                        {text: 'Python', link: '/softInstall/Python'},
                        {text: 'Node.js', link: '/softInstall/Node'},
                    ]
                }
            ],

            '/skillOrTool/': [
                {
                    text: 'Skill Tool',
                    items: [
                        {text: 'skill', link: '/skillOrTool/'},
                        {text: 'Linux', link: '/skillOrTool/Linux'},
                        {text: 'Git', link: '/skillOrTool/Git'},
                        {text: 'Rpc', link: '/skillOrTool/Rpc'},
                        {text: 'Flutter', link: '/skillOrTool/Flutter'},
                        {text: 'Nginx', link: '/skillOrTool/Nginx'},
                        {text: 'Docker', link: '/skillOrTool/Docker'},
                        {text: 'VitePress', link: '/skillOrTool/VitePress'},
                        {text: 'RustDesk', link: '/skillOrTool/RustDesk'},
                    ]
                }
            ],

            '/examples/': [
                {
                    text: 'Examples',
                    items: [
                        {text: 'api', link: '/examples/api-examples'},
                        {text: 'md', link: '/examples/markdown-examples'},
                    ]
                }
            ],
        }
    }
})
