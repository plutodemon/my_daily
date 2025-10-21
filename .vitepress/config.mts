import {defineConfig} from 'vitepress'

export default defineConfig({
    title: "My Daily",
    srcDir: './src',
    metaChunk: true,
    head: [['link', {rel: 'icon', href: 'img/lemon_logo.svg'}]],

    themeConfig: {
        logo: 'img/lemon_logo.svg',

        footer: {
            copyright: '基于 <a href="https://github.com/plutodemon/my_daily/blob/master/LICENSE">MIT</a> 许可发布<br/>' +
                '版权所有 © 2025 <a href="https://github.com/plutodemon">lemonshuo</a>',
            message: '备案号 <a href="https://beian.miit.gov.cn/">1111111111</a>'
        },

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
            {text: 'Docker', link: '/Docker/'},
            {text: 'Golang', link: '/Golang/'},
            {text: 'Python', link: '/Python/'},
            {text: 'Nginx', link: '/Nginx/'},
            {text: 'Node', link: '/Node/'},
            {text: 'Flutter', link: '/Flutter/'},
            {text: 'OS', link: '/OS/OS_Linux/Linux.md'},
            {text: 'Software', link: '/Software/Git.md'},
            {text: 'Travel', link: '/Travel/'},
        ],

        sidebar: {
            '/Docker/': [
                {
                    text: 'Docker',
                    items: [
                        {text: '安装配置', link: '/Docker/index.md'},
                        {text: '常用命令', link: '/Docker/Command.md'},
                        {text: '常用操作', link: '/Docker/Operation.md'},
                    ]
                }
            ],

            '/Flutter/': [
                {
                    text: 'Flutter',
                    items: [
                        {text: 'Flutter', link: '/Flutter/index.md'},
                    ]
                }
            ],

            '/Golang/': [
                {
                    text: 'Golang',
                    items: [
                        {text: '安装配置', link: '/Golang/index.md'},
                        {text: 'Rpc', link: '/Golang/Rpc.md'},
                    ]
                }
            ],

            '/Nginx/': [
                {
                    text: 'Nginx',
                    items: [
                        {text: '安装配置', link: '/Nginx/index.md'},
                        {text: '常用命令', link: '/Nginx/Command.md'},
                    ]
                }
            ],

            '/Node/': [
                {
                    text: 'Node',
                    items: [
                        {text: 'Node', link: '/Node/index.md'},
                    ]
                }
            ],

            '/OS/': [
                {
                    text: 'OS',
                    items: [
                        {
                            text: 'Linux',
                            items: [
                                {text: '常用操作', link: '/OS/OS_Linux/Linux.md'},
                            ]
                        },
                        {
                            text: 'Mac',
                            items: [
                                {text: 'Mac', link: '/OS/OS_Mac/Mac.md'},
                            ]
                        },
                        {
                            text: 'Windows',
                            items: [
                                {text: '配置', link: '/OS/OS_Windows/index.md'},
                                {text: '常用操作', link: '/OS/OS_Windows/Windows.md'},
                            ]
                        },
                    ],
                }
            ],

            '/Python/': [
                {
                    text: 'Python',
                    items: [
                        {text: '安装配置', link: '/Python/index.md'},
                    ]
                }
            ],

            '/Software/': [
                {
                    text: 'Software',
                    items: [
                        {text: 'Git', link: '/Software/Git.md'},
                        {text: 'RustDesk', link: '/Software/RustDesk.md'},
                        {text: 'VitePress', link: '/Software/VitePress.md'},
                    ]
                }
            ],

            '/Travel/': [
                {
                    text: 'Travel',
                    items: [
                        {text: '必备物品', link: '/Travel/index.md'},
                        {text: '南京', link: '/Travel/南京.md'},
                        {text: '千岛湖', link: '/Travel/千岛湖.md'},
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
