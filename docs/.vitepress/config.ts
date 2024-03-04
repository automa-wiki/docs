import 'dotenv/config';
import { defineConfig } from 'vitepress';

const links: { url: string; lastmod: number | undefined }[] = [];

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SEARCH_API_KEY: string;
      SEARCH_APP_ID: string;
      SEARCH_INDEX_NAME: string;
    }
  }
}

const config = defineConfig({
  lang: 'zh',
  title: 'Automa中文文档',
  description: 'Automa浏览器扩展文档',
  head: [
      ['link', { rel: 'icon', type: 'image/x-icon', href: '/images/logo.png' }],
      ['script', {async: "", crossorigin: 'anonymous', src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4058130983777203'}]
  ],
  transformHtml: (_, id, { pageData }) => {
    if (!/[\\/]404\.html$/.test(id))
      links.push({
        url: pageData.relativePath.replace(/\.md$/, '.html'),
        lastmod: pageData.lastUpdated
      })
  },
  sitemap: {
    hostname: 'https://automa.wiki/',
    lastmodDateOnly: false
  },
  locales: {
    root: { label: '简体中文' },
    en: { label: 'English', link: 'https://docs.automa.site/' },
  },
  themeConfig: {
    nav: [
      //{ text: 'Docs for v1.21.x or below', link: 'https://automa-docs-old.vercel.app/' },
      { text: '扩展生成器', link: '/extension-builder/' }
    ],
    search: {
      provider: 'algolia',
      options: {
        apiKey: process.env.SEARCH_API_KEY,
        appId: process.env.SEARCH_APP_ID,
        indexName: process.env.SEARCH_INDEX_NAME,
        searchParameters: {
          //facetFilters: ['tags:cn']
        },
        placeholder: '搜索文档',
        translations: {
          button: {
            buttonText: '搜索'
          },
          modal: {
            searchBox: {
              resetButtonTitle: '清除查询条件',
              resetButtonAriaLabel: '清除查询条件',
              cancelButtonText: '取消',
              cancelButtonAriaLabel: '取消'
            },
            startScreen: {
              recentSearchesTitle: '搜索历史',
              noRecentSearchesText: '没有搜索历史',
              saveRecentSearchButtonTitle: '保存到搜索历史',
              removeRecentSearchButtonTitle: '从搜索历史中移除',
              favoriteSearchesTitle: '收藏',
              removeFavoriteSearchButtonTitle: '从收藏中移除'
            },
            errorScreen: {
              titleText: '无法获取结果',
              helpText: '你可能需要检查你的网络连接'
            },
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
              searchByText: '搜索供应商'
            },
            noResultsScreen: {
              noResultsText: '无法找到相关结果',
              suggestedQueryText: '你可以尝试查询',
              reportMissingResultsText: '你认为这个查询应该有结果？',
              reportMissingResultsLinkText: '向我们反馈'
            }
          }
        },
      }
    },
    outline: {
      label: '本页目录',
      level: [2, 3],
    },
    sidebar: { 
      '/': [
        {
          text: '入门',
          items: [
            { text: '介绍', link: '/' },
            { text: '快速开始', link: '/guide/quick-start' }
          ]
        },
        {
          text: '工作流',
          collapsed: false,
          items: [
            { text: '概述', link: '/workflow/overview' },
            { text: '运行工作流', link: '/workflow/running-a-workflow' },
            { text: '模块', link: '/workflow/blocks' },
            { text: '共享工作流', link: '/workflow/sharing-workflow' },
            { text: '全局数据', link: '/workflow/global-data' },
            { text: '表', link: '/workflow/table' },
            { text: '变量', link: '/workflow/variables' },
            { text: '表格或变量', link: '/workflow/table-or-variable' },
            { text: '参数', link: '/workflow/parameters' },
            { text: '设置', link: '/workflow/settings' },
            { text: '调试模式', link: '/workflow/debug-mode' },
            { text: '元素选择器', link: '/workflow/element-selector' },
            { text: '表达式', link: '/workflow/expressions' },
            { text: '循环', link: '/workflow/looping' },
            { text: '测试模式', link: '/workflow/testing-mode' },
          ]
        },
        {
          "text": "模块",
          "collapsed": true,
          "items": [
            {
              "text": "常规",
              "items": [
                {
                  "text": "触发模块",
                  "link": "/blocks/trigger.md"
                },
                {
                  "text": "执行工作流模块",
                  "link": "/blocks/execute-workflow.md"
                },
                {
                  "text": "延迟模块",
                  "link": "/blocks/delay.md"
                },
                {
                  "text": "导出数据模块",
                  "link": "/blocks/export-data.md"
                },
                {
                  "text": "HTTP请求模块",
                  "link": "/blocks/webhook.md"
                },
                {
                  "text": "模块组模块",
                  "link": "/blocks/blocks-group.md"
                },
                {
                  "text": "剪贴板模块",
                  "link": "/blocks/clipboard.md"
                },
                {
                  "text": "等待连接模块",
                  "link": "/blocks/wait-connections.md"
                },
                {
                  "text": "通知模块",
                  "link": "/blocks/notification.md"
                },
                {
                  "text": "工作流状态模块",
                  "link": "/blocks/workflow-state.md"
                },
                {
                  "text": "参数提示模块",
                  "link": "/blocks/parameter-prompt.md"
                }
              ]
            },
            {
              "text": "浏览器",
              "items": [
                {
                  "text": "当前标签页模块",
                  "link": "/blocks/active-tab.md"
                },
                {
                  "text": "新标签页模块",
                  "link": "/blocks/new-tab.md"
                },
                {
                  "text": "切换标签页模块",
                  "link": "/blocks/switch-tab.md"
                },
                {
                  "text": "新窗口模块",
                  "link": "/blocks/new-window.md"
                },
                {
                  "text": "代理模块",
                  "link": "/blocks/proxy.md"
                },
                {
                  "text": "后退模块",
                  "link": "/blocks/go-back.md"
                },
                {
                  "text": "前进模块",
                  "link": "/blocks/go-forward.md"
                },
                {
                  "text": "关闭标签/窗口模块",
                  "link": "/blocks/close-tab.md"
                },
                {
                  "text": "截屏模块",
                  "link": "/blocks/take-screenshot.md"
                },
                {
                  "text": "浏览器事件模块",
                  "link": "/blocks/browser-event.md"
                },
                {
                  "text": "处理对话框模块",
                  "link": "/blocks/handle-dialog.md"
                },
                {
                  "text": "处理下载模块",
                  "link": "/blocks/handle-download.md"
                },
                {
                  "text": "刷新标签页模块",
                  "link": "/blocks/reload-tab.md"
                },
                {
                  "text": "获取标签页链接模块",
                  "link": "/blocks/tab-url.md"
                },
                {
                  "text": "Cookie模块",
                  "link": "/blocks/cookie.md"
                }
              ]
            },
            {
              "text": "网页交互",
              "items": [
                {
                  "text": "点击元素模块",
                  "link": "/blocks/event-click.md"
                },
                {
                  "text": "获取文本模块",
                  "link": "/blocks/get-text.md"
                },
                {
                  "text": "滚动元素模块",
                  "link": "/blocks/element-scroll.md"
                },
                {
                  "text": "链接模块",
                  "link": "/blocks/link.md"
                },
                {
                  "text": "属性值模块",
                  "link": "/blocks/attribute-value.md"
                },
                {
                  "text": "表单模块",
                  "link": "/blocks/forms.md"
                },
                {
                  "text": "Javascript代码模块",
                  "link": "/blocks/javascript-code.md"
                },
                {
                  "text": "触发事件模块",
                  "link": "/blocks/trigger-event.md"
                },
                {
                  "text": "切换框架模块",
                  "link": "/blocks/switch-to.md"
                },
                {
                  "text": "上传文件模块",
                  "link": "/blocks/upload-file.md"
                },
                {
                  "text": "鼠标悬停元素模块",
                  "link": "/blocks/hover-element.md"
                },
                {
                  "text": "保存资源模块",
                  "link": "/blocks/save-assets.md"
                },
                {
                  "text": "按键模块",
                  "link": "/blocks/press-key.md"
                },
                {
                  "text": "创建元素模块",
                  "link": "/blocks/create-element.md"
                }
              ]
            },
            {
              "text": "控制流",
              "items": [
                {
                  "text": "重复任务模块",
                  "link": "/blocks/repeat-task.md"
                },
                {
                  "text": "条件模块",
                  "link": "/blocks/conditions.md"
                },
                {
                  "text": "元素存在模块",
                  "link": "/blocks/element-exists.md"
                },
                {
                  "text": "循环模块",
                  "link": "/blocks/while-loop.md"
                },
                {
                  "text": "循环数据模块",
                  "link": "/blocks/loop-data.md"
                },
                {
                  "text": "循环元素模块",
                  "link": "/blocks/loop-elements.md"
                },
                {
                  "text": "循环断点模块",
                  "link": "/blocks/loop-breakpoint.md"
                }
              ]
            },
            {
              "text": "在线服务",
              "items": [
                {
                  "text": "Google Sheets模块",
                  "link": "/blocks/google-sheets.md"
                },
                {
                  "text": "Google Sheets (GDrive)模块",
                  "link": "/blocks/google-sheets-drive.md"
                },
                {
                  "text": "Google Drive模块",
                  "link": "/blocks/google-drive.md"
                }
              ]
            },
            {
              "text": "数据",
              "items": [
                {
                  "text": "插入数据模块",
                  "link": "/blocks/insert-data.md"
                },
                {
                  "text": "删除数据模块",
                  "link": "/blocks/delete-data.md"
                },
                {
                  "text": "获取日志数据模块",
                  "link": "/blocks/log-data.md"
                },
                {
                  "text": "切分变量模块",
                  "link": "/blocks/slice-variable.md"
                },
                {
                  "text": "增加变量模块",
                  "link": "/blocks/increase-variable.md"
                },
                {
                  "text": "正则表达式变量模块",
                  "link": "/blocks/regex-variable.md"
                },
                {
                  "text": "数据映射模块",
                  "link": "/blocks/data-mapping.md"
                },
                {
                  "text": "排序数据模块",
                  "link": "/blocks/sort-data.md"
                }
              ]
            }
          ]
        },
        {
          text: '参考',
          collapsed: false,
          items: [
            { text: '储存', link: '/reference/storage' },
            { text: '包(Package)', link: '/reference/packages' },
            { text: '条件生成器', link: '/reference/condition-builder' },
            { text: '常见错误', link: '/reference/workflow-common-errors' },
            { text: 'JavaScript执行上下文', link: '/reference/javascript-execution-context' }
          ],
        },
        {
          text: '集成',
          collapsed: false,
          items: [
            { text: 'Google Drive', link: '/integrations/google-drive' },
          ]
        }
      ],
      '/extension-builder/': [
        { 
          text: '入门',
          items: [
            { text: '概述和快速入门', link: '/extension-builder/' }
          ], 
        },
        {
          text: '扩展',
          items: [
            { text: '面板', link: '/extension-builder/dashboard' },
            { text: '工作流', link: '/extension-builder/workflows' },
            { text: '定制', link: '/extension-builder/customize' },
            { text: '崩溃日志', link: '/extension-builder/crash-logs' },
          ],
        },
        {
          text: '构建扩展',
          items: [
            { text: '全局变量', link: '/extension-builder/global-variables' },
            { text: '版本控制', link: '/extension-builder/version-control' },
            { text: '安装扩展', link: '/extension-builder/installing-extension' },
          ]
        }
      ]
    },
    editLink: {
      pattern: 'https://github.com/automa-wiki/docs/edit/main/docs/:path',
      text: '为此页提供修改建议'
    },
    logo: '/images/logo.png',
    lastUpdated: {
      text: '最后更新'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/automa-wiki/docs' }
    ],
  },
});

export default config
