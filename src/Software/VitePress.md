---
outline: deep
---

# VitePress

项目创建

## 环境准备

1. 安装 Node.js 和 npm
    - windows 见 [安装node.md](../Node/index.md)
    - linux/macOS: [安装nvm](https://nodejs.org/zh-cn/download)
2. 安装 VitePress
    - 创建 git 仓库
    - 最好指定一个目录执行 `npm add -D vitepress`
    - 快速创建项目 `npx vitepress init`

## 配置

### package.json

```json
{
  "name": "my_daily",
  "version": "0.0.1",
  "private": true,
  "license": "MIT",
  "author": {
    "name": "lemonshuo",
    "email": "lemonshuo@126.com",
    "url": "https://github.com/plutodemon"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/plutodemon/my_daily.git"
  },
  "devDependencies": {
    "flexsearch": "^0.7.43",
    "vitepress": "^1.6.3",
    "vitepress-plugin-search": "^1.0.4-alpha.22"
  },
  "scripts": {
    "dev": "vitepress dev --port 7073",
    "build": "vitepress build --port 7073",
    "preview": "vitepress preview --port 7073"
  }
}
```

### .vitepress/config.mts

```ts

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
                    ]
                }
            ],
        }
    }
})
```