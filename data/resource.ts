// noinspection HttpUrlsUsage

import {Friends} from './friend'

export interface Resource {
  name: string
  logo: string
  desc: string
  href: string
  tags?: string[]
}

export interface ResourceCategory {
  name: string
  resources: Resource[]
}

const friends: Resource[] = Friends.map(f => {
  return {
    ...f,
    name: f.title,
    desc: f.description,
    logo: f.avatar,
    href: f.website,
  }
})

export const resourceData: ResourceCategory[] = [
  {
    name: '友链👨‍💻',
    resources: friends,
  },
  {
    name: '站点🖥️',
    resources: [
      {
        name: 'Developer Roadmap',
        desc: 'Roadmap to becoming a web developer.',
        logo: 'https://roadmap.sh/manifest/apple-touch-icon.png',
        href: 'https://roadmap.sh/',
      },
      {
        name: 'JS delivr',
        desc: '一个免费的CDN开源项目',
        logo: 'https://www.jsdelivr.com/icon_256x256.png',
        href: 'https://www.jsdelivr.com/',
      },
      {
        name: 'Shields.io',
        desc: '为你的开源项目生成高质量小徽章图标',
        logo: 'data:image/png;base64,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',
        href: 'https://shields.io/',
        tags: [
          '图标',
          '首页'
        ],
      },
      {
        name: 'namae',
        desc: 'namae可让您给您的应用程序、Web服务或组织起一个好名字',
        logo: 'https://namae.dev/apple-touch-icon.png',
        href: 'https://namae.dev/',
        tags: ['起名'],
      },
      {
        name: 'Quick Reference',
        desc: '为开发人员分享快速参考备忘清单【速查表】',
        logo: 'data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%221em%22%20width%3D%221em%22%3E%20%3Cpath%20d%3D%22m21.66%2010.44-.98%204.18c-.84%203.61-2.5%205.07-5.62%204.77-.5-.04-1.04-.13-1.62-.27l-1.68-.4c-4.17-.99-5.46-3.05-4.48-7.23l.98-4.19c.2-.85.44-1.59.74-2.2%201.17-2.42%203.16-3.07%206.5-2.28l1.67.39c4.19.98%205.47%203.05%204.49%207.23Z%22%20fill%3D%22%23c9d1d9%22%2F%3E%20%3Cpath%20d%3D%22M15.06%2019.39c-.62.42-1.4.77-2.35%201.08l-1.58.52c-3.97%201.28-6.06.21-7.35-3.76L2.5%2013.28c-1.28-3.97-.22-6.07%203.75-7.35l1.58-.52c.41-.13.8-.24%201.17-.31-.3.61-.54%201.35-.74%202.2l-.98%204.19c-.98%204.18.31%206.24%204.48%207.23l1.68.4c.58.14%201.12.23%201.62.27Zm2.43-8.88c-.06%200-.12-.01-.19-.02l-4.85-1.23a.75.75%200%200%201%20.37-1.45l4.85%201.23a.748.748%200%200%201-.18%201.47Z%22%20fill%3D%22%23228e6c%22%20%2F%3E%20%3Cpath%20d%3D%22M14.56%2013.89c-.06%200-.12-.01-.19-.02l-2.91-.74a.75.75%200%200%201%20.37-1.45l2.91.74c.4.1.64.51.54.91-.08.34-.38.56-.72.56Z%22%20fill%3D%22%23228e6c%22%20%2F%3E%20%3C%2Fsvg%3E',
        href: 'https://jaywcjlove.github.io/reference',
        tags: ['手册'],
      },
      {
        name: 'Can I use',
        desc: '对浏览器支持的 API 兼容性查询',
        logo: 'https://caniuse.com/img/favicon-128.png',
        href: 'https://caniuse.com',
        tags: ['手册'],
      },
      {
        name: 'BootCDN',
        desc: '稳定、快速、免费的前端开源项目 CDN 加速服务',
        logo: 'https://www.bootcdn.cn/assets/ico/apple-touch-icon-144-precomposed.png',
        href: 'https://www.bootcdn.cn/',
        tags: ['cdn'],
      },
      {
        name: '那些免费的砖',
        desc: '发现免费可商用的资源',
        logo: 'https://img.thosefree.com/static/logo.png',
        href: 'https://www.thosefree.com/',
        tags: [''],
      },
      {
        name: '正则大全',
        desc: '🦕 常用正则大全, 支持web / vscode / idea / Alfred Workflow多平台',
        logo: 'https://any-rule.vercel.app/favicon.ico',
        href: 'https://any-rule.vercel.app/',
        tags: [''],
      },
    ],
  },
  {
    name: '文档📘',
    resources: [
      {
        name: 'MDN',
        desc: '从2005年开始记录网络技术，包括 CSS、 HTML 和 JavaScript。',
        logo: 'https://developer.mozilla.org/apple-touch-icon.6803c6f0.png',
        href: 'https://developer.mozilla.org/zh-CN/',
        tags: [
          'Css',
          '教程'
        ],
      },
      {
        name: 'ES6 入门教程',
        desc: '《ECMAScript 6 入门教程》是一本开源的 JavaScript 语言教程，全面介绍 ECMAScript 6 新引入的语法特性',
        logo: 'https://es6.ruanyifeng.com/favicon.ico',
        href: 'https://es6.ruanyifeng.com/',
        tags: ['文档'],
      },
      {
        name: '深入理解 TypeScript',
        desc: '《TypeScript Deep Dive》 是一本很好的开源书，从基础到深入，很全面的阐述了 TypeScript 的各种魔法，不管你是新手，还是老鸟，它都将适应你',
        logo: 'https://jkchao.github.io/typescript-book-chinese/logo.png',
        href: 'https://jkchao.github.io/typescript-book-chinese/',
        tags: ['文档'],
      },
      {
        name: 'Rust语言圣经',
        desc: '一份高质量 Rust 教程',
        logo: 'https://course.rs/favicon.png',
        href: 'https://course.rs',
        tags: ['文档'],
      },
    ],
  },
  {
    name: '工具🛠️',
    resources: [
      {
        name: '在线工具',
        desc: '在线工具,开发人员工具,代码格式化、压缩、加密、解密,下载链接转换,ico图标制作,字帖生成',
        logo: 'https://tool.lu/favicon.ico',
        href: 'https://tool.lu/',
        tags: ['工具'],
      },
      {
        name: '菜鸟工具',
        desc: '菜鸟工具，为开发设计人员提供在线工具，提供在线PHP、Python、 CSS、JS 调试，中文简繁体转换，进制转换等工具',
        logo: 'https://static.runoob.com/images/c-runoob-logo.ico',
        href: 'https://c.runoob.com/',
        tags: ['工具'],
      },
      {
        name: 'ProcessOn',
        desc: '免费在线流程图思维导图',
        logo: 'https://processon.com/favicon.ico',
        href: 'https://processon.com/',
        tags: [
          '工具',
          '思维导图'
        ],
      },
      {
        name: 'Terminal Gif Maker',
        desc: '在线生成 Terminal GIF',
        logo: 'https://www.terminalgif.com/favicon.ico',
        href: 'https://www.terminalgif.com',
        tags: [],
      },

      {
        name: 'AST Explorer',
        desc: '一个 Web 工具，用于探索由各种解析器生成的 AST 语法树',
        logo: 'https://astexplorer.net/favicon.png',
        href: 'https://astexplorer.net/',
        tags: [
          '工具',
          '格式转换'
        ],
      },
      {
        name: 'transform',
        desc: '各类数据格式与对象转换',
        logo: 'https://transform.tools/static/favicon.png',
        href: 'https://transform.tools',
        tags: [
          '工具',
          '格式转换'
        ],
      },
      {
        name: 'Hoppscotch',
        desc: '开源 API 开发生态系统',
        logo: 'https://hoppscotch.io/icon.png',
        href: 'https://hoppscotch.io/',
        tags: ['api'],
      },
      {
        name: 'JsonT.run',
        desc: '一个简洁的在线 JSON 解析器',
        logo: 'https://www.jsont.run/favicon.ico',
        href: 'https://www.jsont.run/',
        tags: ['工具'],
      },
      {
        name: 'Apifox',
        desc: 'API 文档、API 调试、API Mock、API 自动化测试',
        logo: 'https://cdn.apifox.cn/logo/apifox-logo-256.png',
        href: 'https://www.apifox.cn/',
        tags: ['工具'],
      },
      {
        name: 'NSLookup',
        desc: '在线NSLookup查询',
        logo: 'http://www.ip33.com/favicon.ico',
        href: 'http://www.ip33.com/nslookup.html',
        tags: ['工具'],
      },
      {
        name: '腾讯智影',
        desc: '云端智能视频创作工具',
        href: 'https://zenvideo.qq.com/',
        logo: 'https://zenvideo.gtimg.com/grail/dist/favicon.ico',
        tags: [
          '工具',
          '创作'
        ],
      },
      {
        name: 'WxPusher (微信推送服务)',
        desc: '使用微信公众号作为通道的，实时信息推送平台',
        href: 'https://wxpusher.zjiecode.com/',
        logo: 'https://github.githubassets.com/favicons/favicon.svg',
        tags: [
          '工具',
          '创作'
        ],
      },
      {
        name: 'SMS-Activate',
        desc: '在线接受短信的虚拟号码服务',
        href: 'https://sms-activate.org/',
        logo: 'https://sms-activate.org/favicon.ico',
        tags: [
          '工具',
          '创作'
        ],
      },
      {
        name: '营业执照查询',
        desc: '国家企业信用信息公示系统',
        href: 'https://www.gsxt.gov.cn/',
        logo: 'https://www.gsxt.gov.cn/favicon.ico',
        tags: [
          '工具',
          '创作'
        ],
      },
    ],
  },
  {
    name: '代码托管',
    resources: [
      {
        name: 'GitHub',
        desc: '全球最大的软件项目托管平台，发现优质开源项目',
        logo: 'https://github.githubassets.com/favicons/favicon.svg',
        href: 'https://github.com/',
        tags: [
          'GitHub',
          '代码托管'
        ],
      },
      {
        name: 'Gitee',
        desc: 'Gitee 是中国领先的基于 Git 的代码托管平台，类似于全球知名的 GitHub',
        logo: 'https://gitee.com/favicon.ico',
        href: 'https://gitee.com/',
        tags: ['代码托管'],
      },
      {
        name: 'Gitlab',
        desc: '更快地交付安全代码，部署到任何云，并推动业务成果',
        logo: 'https://gitlab.com/uploads/-/system/group/avatar/6543/logo-extra-whitespace.png?width=64',
        href: 'https://gitlab.com/',
        tags: ['代码托管'],
      },
      {
        name: 'Gitea',
        desc: 'Gitea 是一个开源社区驱动的轻量级代码托管解决方案，后端采用 Go 编写，采用 MIT 许可证.',
        logo: 'https://gitea.io/images/favicon.png',
        href: 'https://gitea.io/',
        tags: ['代码托管'],
      },
      {
        name: 'Coding',
        desc: '提供一站式研发管理平台及云原生开发工具，让软件研发如同工业生产般简单高效，助力企业提升研发管理效能',
        logo: 'https://help-assets.codehub.cn/enterprise/guanwang/favicon.ico',
        href: 'https://coding.net/',
        tags: ['代码托管'],
      },
    ],
  },
  {
    name: '网站托管',
    resources: [
      {
        name: 'Vercel',
        desc: 'Vercel将最好的开发人员体验与对最终用户性能的执着关注相结合',
        logo: 'https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/57x57.png',
        href: 'https://vercel.com',
        tags: ['网站托管'],
      },
      {
        name: 'Netlify',
        desc: 'Netlify 是一家提供静态网站托管的云平台，支持从 Github, GitLab, Bitbucket 等代码仓库中自动拉取代码 然后进行项目打包和部署等功能',
        logo: 'https://www.netlify.com/apple-touch-icon.png',
        href: 'https://www.netlify.com',
        tags: ['网站托管'],
      },
      {
        name: 'Coolify',
        desc: '一个开源和自我托管的 Heroku/Netlify 替代品',
        logo: 'https://coolify.io/favicon.png',
        href: 'https://coolify.io',
        tags: ['网站托管'],
      },
      {
        name: 'GitHub Codespace',
        desc: '全球最大的软件项目托管平台，发现优质开源项目',
        logo: 'https://github.githubassets.com/favicons/favicon.svg',
        href: 'https://github.com/codespaces',
        tags: ['网站托管'],
      },
      {
        name: 'Railway',
        desc: '带上你的代码，剩下交给我们 ',
        logo: 'https://railway.app/apple-touch-icon.png',
        href: 'https://railway.app/',
        tags: ['网站托管'],
      },
      {
        name: 'Supabase',
        desc: 'Supabase 是一个开源的后端即服务（BaaS）平台，它可以帮助开发者快速构建应用程序，无需编写后端代码。',
        logo: 'https://supabase.com/favicon/apple-touch-icon-152x152.png',
        href: 'https://supabase.com/',
        tags: ['BaaS'],
      },
    ],
  },
  {
    name: '在线代码',
    resources: [
      {
        name: 'CodesandBox',
        desc: 'CodeSandbox是一个在线代码编辑器和原型工具，可以更快地创建和共享web应用程序',
        logo: 'https://codesandbox.io/favicon.ico',
        href: 'https://codesandbox.io/',
        tags: ['在线代码'],
      },
      {
        name: 'CodePen',
        desc: '是构建、测试和发现前端代码的最佳场所',
        logo: 'https://cpwebassets.codepen.io/assets/favicon/favicon-aec34940fbc1a6e787974dcd360f2c6b63348d4b1f4e06c77743096d55480f33.ico',
        href: 'https://codepen.io/',
        tags: ['在线代码'],
      },
      {
        name: 'Stackblitz',
        desc: 'Stackblitz在流程中保持即时的开发体验。没有更多的小时储存/拉/安装本地-只需点击，并开始编码',
        logo: 'https://c.staticblitz.com/assets/favicon_sb-861fe1b85c0dc928750c62de15fed96fc75e57ee366bd937bad17a3938917b3f.svg',
        href: 'https://stackblitz.com/',
        tags: ['在线代码'],
      },
      {
        name: 'vscode.dev',
        desc: 'vscode官方提供在线Web版vscode代码编写网站',
        logo: 'https://vscode.dev/static/stable/favicon.ico',
        href: 'https://vscode.dev/',
        tags: ['在线代码'],
      },
      {
        name: 'Sandpack',
        desc: '用于创建实时运行的代码编辑经验',
        logo: 'https://sandpack.codesandbox.io/favicon.ico',
        href: 'https://sandpack.codesandbox.io/',
        tags: ['在线代码'],
      },
    ],
  },
  {
    name: 'Vue',
    resources: [
      {
        name: 'Vue.js',
        desc: '渐进式 JavaScript 框架',
        logo: 'https://vuejs.org/logo.svg',
        href: 'https://vuejs.org',
        tags: [
          '前端',
          'Vue',
          '框架'
        ],
      },
      {
        name: 'Nuxt',
        desc: '使用 Nuxt 自信地构建您的下一个 Vue.js 应用程序。使 Web 开发简单而强大。',
        logo: 'https://nuxt.com/icon.png',
        href: 'https://nuxt.com/',
        tags: [
          '前端',
          'Vue',
          '文档',
          '框架'
        ],
      },
      {
        name: 'Pinia',
        desc: '您将会喜欢使用的 Vue 状态管理',
        logo: 'https://pinia.vuejs.org/logo.svg',
        href: 'https://pinia.vuejs.org/',
        tags: [
          '前端',
          'Vue',
          '文档',
          '框架'
        ],
      },
      {
        name: 'VueUse',
        desc: '基本 Vue 合成实用程序的集合',
        logo: 'https://vueuse.org/favicon.svg',
        href: 'https://vueuse.org/',
        tags: [
          '前端',
          'Vue',
          '文档',
          '框架'
        ],
      },
      {
        name: 'Vitest',
        desc: '一个 Vite 原生单元测试框架。它很快！',
        logo: 'https://cn.vitest.dev/logo.svg',
        href: 'https://cn.vitest.dev/',
        tags: [
          '前端',
          'Vue',
          '框架'
        ],
      },
    ],
  },
  {
    name: 'React',
    resources: [
      {
        name: 'React',
        desc: '用于构建用户界面的 JavaScript 库',
        logo: 'https://reactjs.org/favicon.ico',
        href: 'https://reactjs.org',
        tags: [
          '前端',
          'React',
          '框架'
        ],
      },
      {
        name: 'Next.js',
        desc: 'Next.js 为您提供生产环境所需的所有功能以及最佳的开发体验：包括静态及服务器端融合渲染、 支持 TypeScript、智能化打包、 路由预取等功能 无需任何配置',
        logo: 'https://nextjs.org/static/favicon/safari-pinned-tab.svg',
        href: 'https://nextjs.org/',
        tags: [
          '前端',
          'React',
          '框架'
        ],
      },
      {
        name: 'Remix',
        desc: 'Remix 是一个全栈 Web 框架，可让您专注于用户界面，并通过 Web 标准进行回溯，以提供快速、流畅且有弹性的用户体验',
        logo: 'https://remix.run/favicon-192.png',
        href: 'https://remix.run',
        tags: [
          '前端',
          'React',
          '框架'
        ],
      },
      {
        name: 'Ant Design Pro',
        desc: '开箱即用的中台前端/设计解决方案',
        logo: 'https://pro.ant.design/favicon.png',
        href: 'https://pro.ant.design',
        tags: [
          '前端',
          'React',
          '后台',
          '项目'
        ],
      },
      {
        name: 'react-use',
        desc: '一个强大的 React Hooks 库',
        logo: 'https://reactjs.org/favicon.ico',
        href: 'https://github.com/streamich/react-use',
        tags: [
          '前端',
          'React',
          '脚手架'
        ],
      },
      {
        name: 'ahooks',
        desc: '一个高质量和可靠的 React Hooks 库',
        logo: 'https://ahooks.js.org/simple-logo.svg',
        href: 'https://ahooks.js.org/',
        tags: [
          '前端',
          'React',
          '脚手架'
        ],
      },
      {
        name: 'SWR',
        desc: '用于数据请求的 React Hooks 库',
        logo: 'https://swr.vercel.app/favicon/favicon.svg',
        href: 'https://swr.vercel.app/',
        tags: [
          '前端',
          'React',
          '脚手架'
        ],
      },
      {
        name: 'react-spring',
        desc: '通过简单的动画基元使您的组件栩栩如生',
        logo: 'https://react-spring.dev/favicon.ico',
        href: 'https://react-spring.dev/',
        tags: [
          '前端',
          'React',
          '动画'
        ],
      },
      {
        name: 'UmiJS',
        desc: '用 Umi 构建你的下一个应用，带给你简单而愉悦的 Web 开发体验',
        logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
        href: 'https://umijs.org',
        tags: [
          '前端',
          'React',
          '脚手架'
        ],
      },
    ],
  },
  {
    name: 'CSS',
    resources: [
      {
        name: 'TailwindCSS',
        desc: 'Tailwind CSS 是一个功能类优先的 CSS 框架，它集成了诸如 flex, pt-4, text-center 和 rotate-90 这样的的类，它们能直接在脚本标记语言中组合起来，构建出任何设计',
        logo: 'https://www.tailwindcss.cn/apple-touch-icon.png',
        href: 'https://www.tailwindcss.cn',
        tags: [
          'Css',
          '框架'
        ],
      },
      {
        name: 'WindiCSS',
        desc: 'Windi CSS 是下一代工具优先的 CSS 框架',
        logo: 'https://windicss.org/assets/logo.svg',
        href: 'https://windicss.org',
        tags: [
          'Css',
          '框架'
        ],
      },
      {
        name: 'Twind',
        desc: '现存最小、最快、功能最齐全的完整 Tailwind-in-JS 解决方案',
        logo: 'https://twind.style/twind-logo-animated.svg',
        href: 'https://twind.style/',
        tags: [
          'Css',
          '框架'
        ],
      },
      {
        name: 'UnoCSS',
        desc: '即时按需原子 CSS 引擎',
        logo: 'https://unocss.dev/favicon.ico',
        href: 'https://unocss.dev/',
        tags: [
          'Css',
          '框架'
        ],
      },
      {
        name: 'Bootstrap',
        desc: 'Bootstrap 是全球最受欢迎的前端开源工具库，它支持 Sass 变量和 mixin、响应式栅格系统、自带大量组件和众多强大的 JavaScript 插件。基于 Bootstrap 提供的强大功能，能够让你快速设计并定制你的网站',
        logo: 'https://img.kuizuo.cn/20210907055816.png',
        href: 'https://v5.bootcss.com/',
        tags: [
          'Css',
          '框架'
        ],
      },
      {
        name: 'w3schools Css 教程',
        desc: 'w3schools 从基础到高级的CSS教程',
        logo: 'https://www.w3schools.com/favicon.ico',
        href: 'https://www.w3schools.com/css',
        tags: [
          'Css',
          '样式'
        ],
      },
      {
        name: 'CSS-Inspiration',
        desc: 'CSS灵感',
        logo: 'https://csscoco.com/inspiration/logo2.png',
        href: 'https://csscoco.com/inspiration',
        tags: [
          'Css',
          '样式'
        ],
      },
      {
        name: 'CSS常用样式',
        desc: 'CSS常用样式',
        logo: 'https://qishaoxuan.github.io/css_tricks/images/favicon.png',
        href: 'https://qishaoxuan.github.io/css_tricks/',
        tags: [
          'Css',
          '样式'
        ],
      },
      {
        name: 'CSSFX',
        desc: '一个精心制作的集合设计的重点是流动性，简单性和易用性。使用最小标记的 CSS 支持',
        logo: 'https://cssfx.netlify.app/apple-touch-icon.png',
        href: 'https://cssfx.netlify.app/',
        tags: [
          'Css',
          '样式'
        ],
      },
      {
        name: 'NES.css',
        desc: '一个像素风格的CSS框架',
        logo: 'https://nostalgic-css.github.io/NES.css/favicon.png',
        href: 'https://nostalgic-css.github.io/NES.css/',
        tags: [
          'Css',
          '框架'
        ],
      },
      {
        name: 'clay.css',
        desc: 'claymorphism 泥陶态风格CSS',
        logo: 'https://codeadrian.github.io/clay.css/apple-touch-icon.png',
        href: 'https://codeadrian.github.io/clay.css/',
        tags: [
          'Css',
          '框架'
        ],
      },
      {
        name: 'loading.io',
        desc: 'Animation Made Easy',
        logo: 'https://loading.io/favicon.ico',
        href: 'https://loading.io/',
        tags: ['Css'],
      },
      {
        name: '神奇UI样式',
        desc: '我们赋予任何人创建、分享和使用用 CSS 和 HTML 制作的漂亮自定义元素的权力。',
        logo: 'https://uiverse.io/apple-touch-icon.png',
        href: 'https://uiverse.io',
        tags: ['Css'],
      },
      {
        name: 'HYPE4',
        desc: '透明玻璃态生成器',
        logo: 'https://hype4.academy/_next/static/media/logorwd@2x.b40bc92c.png',
        href: 'https://hype4.academy/tools/glassmorphism-generator',
        tags: ['Css'],
      },
      {
        name: 'Omatsuri',
        desc: '收集不同的发电机，让您的生活更轻松。',
        logo: 'https://omatsuri.app/assets/favicon.ico',
        href: 'https://omatsuri.app',
        tags: ['Css'],
      },
      {
        name: 'smooth shadow',
        desc: '快速轻松地实现基于 CSS 阴影的绝佳工具。您只需要指定一些阴影设置，代码就在您的路上。',
        logo: 'https://shadows.brumm.af/favicon.svg',
        href: 'https://shadows.brumm.af/',
        tags: ['Css'],
      },
      {
        name: 'FANCY-BORDER-RADIUS',
        desc: '花式边界半径,有助于创建 CSS 花式边框。',
        logo: 'https://9elements.github.io/fancy-border-radius/favicon-32x32.png',
        href: 'https://9elements.github.io/fancy-border-radius/',
        tags: ['Css'],
      },
      {
        name: 'Coolors',
        desc: '创建调色板',
        logo: 'data:image/png;base64,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',
        href: 'https://coolors.co/',
        tags: ['Css'],
      },
    ],
  },
  {
    name: '组件库',
    resources: [
      {
        name: 'Element Plus',
        desc: '基于 Vue 3，面向设计师和开发者的组件库',
        logo: 'https://element-plus.gitee.io/images/element-plus-logo-small.svg',
        href: 'https://element-plus.gitee.io/',
        tags: [
          '前端',
          'Vue',
          '组件库'
        ],
      },
      {
        name: 'Naive UI',
        desc: '一个 Vue 3 组件库比较完整，主题可调，使用 TypeScript，快 有点意思',
        logo: 'https://www.naiveui.com/assets/naivelogo-93278402.svg',
        href: 'https://www.naiveui.com/',
        tags: [
          '组件库',
          'vue'
        ],
      },
      {
        name: 'Ant Design',
        desc: '一套企业级 UI设计语言和 React 组件库',
        logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        href: 'https://ant.design',
        tags: [
          '前端',
          'React',
          '组件库'
        ],
      },
      {
        name: 'TDesign',
        desc: 'TDesign 是腾讯各业务团队在服务业务过程中沉淀的一套企业级设计体系',
        logo: 'https://tdesign.tencent.com/favicon.ico',
        href: 'https://tdesign.tencent.com/',
        tags: [
          '组件库',
          'react'
        ],
      },
      {
        name: 'Arco Design',
        desc: '字节跳动出品的企业级设计系统',
        logo: 'https://unpkg.byted-static.com/latest/byted/arco-config/assets/favicon.ico',
        href: 'https://arco.design/',
        tags: [
          '组件库',
          'react'
        ],
      },
      {
        name: 'Vuetify',
        desc: 'Vuetify 是一个 Vue UI 库，包含手工制作的精美材料组件。不需要设计技能 - 创建令人惊叹的应用程序所需的一切都触手可及',
        logo: 'https://vuetify.cn/favicon.ico',
        href: 'https://vuetify.cn/',
        tags: [
          '组件库',
          'react'
        ],
      },
      {
        name: 'MUI',
        desc: '当下流行的 React UI 框架',
        logo: 'https://mui.com/static/icons/180x180.png',
        href: 'https://mui.com',
        tags: [
          '前端',
          'React',
          '组件库'
        ],
      },
      {
        name: 'VbenAdmin',
        desc: 'Vben是一个基于Vue3、Vite、TypeScript等最新技术栈开发的后台管理框架',
        logo: 'https://doc.vvbin.cn/logo.png',
        href: 'https://doc.vvbin.cn/',
        tags: [
          '前端',
          'Vue',
          '后台',
          '项目'
        ],
      },
    ],
  },
  {
    name: '前端',
    resources: [
      {
        name: 'Component party',
        desc: '前端框架开Party🎉，Web 组件 JS 框架通过其语法和特性进行概述',
        logo: 'https://component-party.dev/favicon.png',
        href: 'https://component-party.dev/',
        tags: [
          '前端',
          'css',
          '动画'
        ],
      },
      {
        name: 'Lodash',
        desc: '一个 JavaScript 的实用工具库, 表现一致性, 模块化, 高性能, 以及可扩展',
        logo: 'https://lodash.com/icons/apple-touch-180x180.png',
        href: 'https://lodash.net',
        tags: ['Nodejs'],
      },
      {
        name: 'WebAssembly',
        desc: 'wasm 是一个可移植、体积小、加载快并且兼容 Web 的全新格式',
        logo: 'https://www.wasm.com.cn/favicon.ico',
        href: 'https://www.wasm.com.cn',
        tags: ['Nodejs'],
      },
      {
        name: 'Greensock',
        desc: '超强大h5动画库',
        logo: 'https://greensock.com/favicon.ico',
        href: 'https://greensock.com/docs/',
        tags: [
          '前端',
          'css',
          '动画'
        ],
      },
      {
        name: 'Threejs',
        desc: '强大的3D-Js库',
        logo: 'https://threejs.org/favicon.ico',
        href: 'https://threejs.org/',
        tags: [
          '前端',
          'JavaScript',
          '3D'
        ],
      },
      {
        name: 'Jest',
        desc: 'Jest 是一个令人愉快的 JavaScript 测试框架，注重简单性。',
        logo: 'https://jestjs.io/img/jest.png',
        href: 'https://jestjs.io/',
        tags: ['自动化测试'],
      },
      {
        name: 'Cypress',
        desc: '对任何在浏览器中运行的东西进行快速、简单和可靠的测试。',
        logo: 'https://www.cypress.io/apple-touch-icon.png',
        href: 'https://www.cypress.io/',
        tags: ['自动化测试'],
      },
      {
        name: 'Playwright',
        desc: 'Playwright 为现代网络应用程序提供了可靠的端到端测试。',
        logo: 'https://playwright.dev/img/playwright-logo.svg',
        href: 'https://playwright.dev/',
        tags: ['自动化测试'],
      },
    ],
  },
  {
    name: 'Node/Deno',
    resources: [
      {
        name: 'Node',
        desc: 'Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时',
        logo: 'https://img.nodejs.cn/favicon.png',
        href: 'http://nodejs.cn/',
        tags: [
          '后端',
          'Nodejs',
          '文档'
        ],
      },
      {
        name: 'Deno',
        desc: '一个现代的JavaScript和TypeScript运行时',
        logo: 'https://deno.land/logo.svg',
        href: 'https://bun.sh/',
        tags: [
          'Nodejs',
          'Deno',
          'JavaScript',
          'TypeScript'
        ],
      },
      {
        name: 'Bun',
        desc: 'Bun 是一个快速的一体化 JavaScript 运行时',
        logo: 'data:image/png;base64, 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',
        href: 'https://bun.sh',
        tags: [
          'Nodejs',
          'Deno',
          'JavaScript',
          'TypeScript'
        ],
      },
      {
        name: 'NPM',
        desc: 'NPM是世界上最大的包管理器',
        logo: 'https://static.npmjs.com/58a19602036db1daee0d7863c94673a4.png',
        href: 'https://www.npmjs.com',
        tags: [
          'Nodejs',
          '包管理',
          '文档'
        ],
      },
      {
        name: 'Yarn',
        desc: 'Yarn 是一个软件包管理器，还可以作为项目管理工具。无论你是小型项目还是大型单体仓库（monorepos），无论是业余爱好者还是企业用户，Yarn 都能满足你的需求',
        logo: 'https://www.yarnpkg.cn/favicon-32x32.png',
        href: 'https://www.yarnpkg.cn',
        tags: [
          'Nodejs',
          '包管理',
          '文档'
        ],
      },
      {
        name: 'Pnpm',
        desc: '速度快、节省磁盘空间的软件包管理器',
        logo: 'https://www.pnpm.cn/img/favicon.png',
        href: 'https://pnpm.io',
        tags: [
          'Nodejs',
          '包管理',
          '文档'
        ],
      },
      {
        name: 'Node.js技术栈',
        desc: '“Nodejs技术栈” 是作者 @五月君 从事 Node.js 开发以来的学习历程，希望这些分享能帮助到正在学习、使用 Node.js 的朋友们',
        logo: 'https://nodejsred.oss-cn-shanghai.aliyuncs.com/nodejs_roadmap-logo.jpeg?x-oss-process=style/may',
        href: 'https://www.nodejs.red/',
        tags: [
          'Nodejs',
          '笔记',
          '教程'
        ],
      },
      {
        name: 'Axios',
        desc: 'Axios 是一个基于 promise 的网络请求库，可以用于浏览器和 node.js',
        logo: 'https://www.axios-http.cn/assets/favicon.ico',
        href: 'https://axios-http.cn/',
        tags: [
          'Nodejs',
          'HTTP'
        ],
      },
      {
        name: 'Expressjs',
        desc: '基于 Node.js 平台，快速、开放、极简的 Web 开发框架',
        logo: 'https://www.expressjs.com.cn/images/favicon.png',
        href: 'https://www.expressjs.com.cn/',
        tags: [
          'Nodejs',
          '后端',
          '框架'
        ],
      },
      {
        name: 'Nest.js',
        desc: '用于构建高效且可伸缩的服务端应用程序的渐进式 Node.js 框架',
        logo: 'https://docs.nestjs.cn/_media/icon.svg',
        href: 'https://docs.nestjs.cn/',
        tags: [
          '后端',
          'Nodejs',
          '框架'
        ],
      },
      {
        name: 'Fresh',
        desc: 'Deno 下一代 Web 框架，专注于速度、可靠性和简单性的构建。',
        logo: 'https://fresh.deno.dev/favicon.ico',
        href: 'https://fresh.deno.dev/',
        tags: ['Nodejs'],
      },
      {
        name: 'Socket.io',
        desc: 'Socket.IO 是一个可以在浏览器与服务器之间实现实时、双向、基于事件的通信的工具库',
        logo: 'https://socket.io/images/favicon.png',
        href: 'https://socketio.bootcss.com',
        tags: [
          'Nodejs',
          'socket'
        ],
      },
      {
        name: 'tRPC',
        desc: 'tRPC 是一个轻量级的、类型安全的远程过程调用框架，它使用 TypeScript 进行开发，可以帮助开发者轻松地编写和部署高性能的分布式应用程序。',
        logo: 'https://trpc.io/img/logo.svg',
        href: 'https://trpc.io/',
        tags: ['Nodejs'],
      },
      {
        name: 'Strapi',
        desc: 'Socket.IO 是一个可以在浏览器与服务器之间实现实时、双向、基于事件的通信的工具库',
        logo: 'https://strapi.io/assets/favicon-32x32.png',
        href: 'https://strapi.io/',
        tags: [
          'Nodejs',
          'CMS'
        ],
      },
      {
        name: 'TypeORM',
        desc: 'TypeORM 是一个 ORM 框架，它可以运行在 NodeJS、Browser、Cordova、PhoneGap、Ionic、React Native、Expo 和 Electron 平台上，可以与 TypeScript 和 JavaScript (ES5,ES6,ES7,ES8)一起使用',
        logo: 'https://typeorm.devjs.cn/logo/logo.png',
        href: 'https://typeorm.bootcss.com',
        tags: [
          'Nodejs',
          'ORM'
        ],
      },
      {
        name: 'Prisma',
        desc: 'Prisma 下一代 Node.js 和 TypeScript 的ORM框架',
        logo: 'https://www.prisma.io/images/apple-touch-icon.png',
        href: 'https://prisma.io/',
        tags: [
          'Nodejs',
          'ORM'
        ],
      },
      {
        name: 'GraphQL',
        desc: 'GraphQL 既是一种用于 API 的查询语言也是一个满足你数据查询的运行时',
        logo: 'https://graphql.cn/favicon.ico',
        href: 'https://graphql.cn',
        tags: [
          'Nodejs',
          'GraphQL'
        ],
      },
      {
        name: 'ECharts',
        desc: '一个基于 JavaScript 的开源可视化图表库',
        logo: 'https://echarts.apache.org/zh/images/favicon.png',
        href: 'https://echarts.apache.org/',
        tags: [
          '图表',
          '可视化'
        ],
      },
      {
        name: 'AntV',
        desc: '蚂蚁集团全新一代数据可视化解决方案,让数据栩栩如生',
        logo: 'https://antv.vision/icons/icon-384x384.png',
        href: 'https://antv.vision/',
        tags: [
          '图表',
          '可视化'
        ],
      },
    ],
  },
  {
    name: '构建工具',
    resources: [
      {
        name: 'Webpack',
        desc: 'webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle',
        logo: 'https://www.webpackjs.com/icon_180x180.png',
        href: 'https://www.webpackjs.com',
        tags: ['构建工具'],
      },
      {
        name: 'Rollup.js',
        desc: 'Rollup 是 JavaScript 的模块打包器，它将小段代码编译成更大、更复杂的代码，例如库或应用程序',
        logo: 'https://rollupjs.org/favicon.png',
        href: 'https://rollupjs.org',
        tags: ['构建工具'],
      },
      {
        name: 'Vite',
        desc: '下一代的前端工具链，为开发提供极速响应',
        logo: 'https://cn.vitejs.dev/logo.svg',
        href: 'https://cn.vitejs.dev',
        tags: ['构建工具'],
      },
      {
        name: 'Turborepo',
        desc: 'Turborepo 是一个用于 JavaScript 和 TypeScript 代码库的高性能构建系统。',
        logo: 'https://turbo.build/images/docs/repo/repo-hero-logo-dark.svg',
        href: 'https://turbo.build/repo',
        tags: ['构建工具'],
      },
      {
        name: 'Turbopack',
        desc: 'Turbopack 是一个用 Rust 编写的针对 JavaScript 和 TypeScript 优化的增量式捆绑包。',
        logo: 'https://turbo.build/images/docs/pack/turbopack-hero-logo-dark.svg',
        href: 'https://turbo.build/pack',
        tags: ['构建工具'],
      },
      {
        name: 'SWC',
        desc: 'SWC 是下一代快速开发工具的可扩展的基于 Rust 的平台。',
        logo: 'https://swc.rs/favicon/apple-touch-icon.png',
        href: 'https://swc.rs/',
        tags: ['构建工具'],
      },
    ],
  },
  {
    name: '设计',
    resources: [
      {
        name: 'Mastergo',
        desc: '面向团队的专业 UI/UX 设计工具，多人同时编辑、随时在线评审、设计一键交付，让想法更快实现',
        logo: 'https://mastergo.com/favicon.ico',
        href: 'https://mastergo.com/',
        tags: ['设计'],
      },
      {
        name: '即时设计',
        desc: '可云端编辑的专业级 UI 设计工具，为中国设计师量身打造，Windows 也能用的「协作版 Sketch」',
        logo: 'https://img.js.design/assets/webImg/favicon.ico',
        href: 'https://js.design/',
        tags: ['设计'],
      },
      {
        name: 'Figma',
        desc: 'Figma 是为 UI 设计而生的设计工具，除了有和 Sketch 一样基本的操作和功能，还有许多专为 UI 设计而生的强大功能。',
        logo: 'https://static.figma.com/app/icon/1/icon-192.png',
        href: 'https://www.figma.com/',
        tags: ['设计'],
      },
      {
        name: 'Pixso',
        desc: '一站式完成原型、设计、交互与交付，为数字化团队协作提效',
        logo: 'https://cms.pixso.cn/images/logo.svg',
        href: 'https://pixso.cn/',
        tags: ['设计'],
      },
      {
        name: '千通彩色彩管理',
        desc: 'PANTONE潘通色卡',
        href: 'https://www.qtccolor.com/',
        logo: 'https://www.qtccolor.com/favicon.ico',
        tags: [
          '设计',
          '色彩'
        ],
      },
      {
        name: '设计导航',
        desc: '分享优秀设计网站',
        href: 'https://hao.shejidaren.com/',
        logo: 'https://hao.shejidaren.com/images/apple-touch-icon.png',
        tags: ['设计'],
      },
    ],
  },
  {
    name: '字体图标',
    resources: [
      {
        name: 'iconify',
        desc: '数千个图标，一个统一的框架',
        logo: 'https://icon-sets.iconify.design/favicon.ico',
        href: 'https://icon-sets.iconify.design/',
        tags: ['图标'],
      },
      {
        name: 'icones',
        desc: 'Icon Explorer with Instant searching, powered by Iconify',
        logo: 'https://icones.js.org/favicon.svg',
        href: 'https://icones.js.org/',
        tags: ['图标'],
      },
      {
        name: 'iconfont',
        desc: 'iconfont-国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能',
        logo: 'https://img.alicdn.com/imgextra/i4/O1CN01EYTRnJ297D6vehehJ_!!6000000008020-55-tps-64-64.svg',
        href: 'https://www.iconfont.cn/',
        tags: ['图标'],
      },
      {
        name: 'feathericons',
        desc: '简单美丽的开源图标',
        logo: 'https://feathericons.com/favicon.ico',
        href: 'https://feathericons.com/',
        tags: ['图标'],
      },
      {
        name: 'undraw',
        desc: '一个不断更新的设计项目与美丽的SVG图像，使用完全免费',
        logo: 'https://undraw.co/apple-touch-icon.png',
        href: 'https://undraw.co/',
        tags: [
          '插画',
          'svg'
        ],
      },
      {
        name: 'igoutu',
        desc: '图标、插图、照片、音乐和设计工具',
        logo: 'https://igoutu.cn/vue-static/landings/primary-landings/favs/icons8_fav_32%C3%9732.png',
        href: 'https://igoutu.cn/',
        tags: [
          '插画',
          'svg'
        ],
      },
      {
        name: 'Emojiall',
        desc: 'Emoji表情大全',
        logo: 'https://www.emojiall.com/apple-touch-icon.png',
        href: 'https://www.emojiall.com/zh-hans',
        tags: [
          '图标',
          'emoji'
        ],
      },
      {
        name: '渐变色网站',
        desc: '数百万个自动生成的渐变的网站',
        logo: 'https://gradihunt.com/favicon.ico',
        href: 'https://gradihunt.com/',
        tags: [
          '配色',
          '背景'
        ],
      },
      {
        name: '谷歌字体',
        desc: '一个生成渐变色背景的网站',
        logo: 'https://googlefonts.cn/Public/google/zh-cn/gstatic/google_fonts_ios_180dp.png',
        href: 'https://googlefonts.cn/',
        tags: ['字体'],
      },
      {
        name: 'Typing SVG',
        desc: '一个动态生成的可自定义 SVG 打字效果',
        logo: 'https://readme-typing-svg.herokuapp.com/demo/favicon.png',
        href: 'https://readme-typing-svg.herokuapp.com/demo/',
        tags: ['字体'],
      },
    ],
  },
  {
    name: '跨平台',
    resources: [
      {
        name: 'Electron',
        desc: '使用 JavaScript，HTML 和 CSS 构建跨平台的桌面应用程序',
        logo: 'https://www.electronjs.org/assets/img/favicon.ico',
        href: 'https://www.electronjs.org/',
        tags: [
          '跨平台',
          'Nodejs'
        ],
      },
      {
        name: 'Tauri',
        desc: 'Tauri是一个框架，用于为所有主要桌面平台构建小巧、快速的二进制文件',
        logo: 'https://tauri.app/meta/favicon-96x96.png',
        href: 'https://tauri.app/',
        tags: [
          '跨平台',
          'Rust'
        ],
      },
      {
        name: 'Flutter',
        desc: 'Flutter 是 Google 开源的应用开发框架，仅通过一套代码库，就能构建精美的、原生平台编译的多平台应用',
        logo: 'https://flutter.cn/assets/images/cn/flutter-icon.png',
        href: 'https://flutter.cn/',
        tags: [
          '跨平台',
          'Rust'
        ],
      },
      {
        name: 'Uni-app',
        desc: 'uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/QQ/快手/钉钉/淘宝）、快应用等多个平台',
        logo: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/d23e842c-58fc-4574-998d-17fdc7811cc3.png',
        href: 'https://uniapp.dcloud.io/',
        tags: [
          'Vue',
          '小程序'
        ],
      },
      {
        name: 'Taro',
        desc: 'Taro 是一个开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv 等框架来开发 微信 / 京东 / 百度 / 支付宝 / 字节跳动 / QQ / 飞书 小程序 / H5 / RN 等应用',
        logo: 'https://taro.jd.com/static/images/favicon.ico',
        href: 'https://taro.jd.com',
        tags: [
          '前端',
          'React',
          '小程序'
        ],
      },
    ],
  },
  {
    name: '站点生成',
    resources: [
      {
        name: 'VitePress',
        desc: 'Vue 驱动并使用Vite构建的静态网站生成器',
        logo: 'https://vuepress.vuejs.org/hero.png',
        href: 'https://vitepress.vuejs.org',
        tags: [
          '前端',
          'Vue',
          '静态站点'
        ],
      },
      {
        name: 'VuePress',
        desc: 'Vue 驱动的静态网站生成器',
        logo: 'https://vuepress.vuejs.org/hero.png',
        href: 'https://vuepress.vuejs.org',
        tags: [
          '前端',
          'Vue',
          '静态站点'
        ],
      },
      {
        name: 'Docusaurus',
        desc: '快速构建以内容为核心的最佳网站',
        logo: 'https://docusaurus.io/img/docusaurus.png',
        href: 'https://docusaurus.io',
        tags: [
          '前端',
          'React',
          '静态站点'
        ],
      },
      {
        name: 'Hexo',
        desc: '快速、简洁且高效的博客框架',
        logo: 'https://hexo.io/favicon.ico',
        href: 'https://hexo.io',
        tags: [
          '前端',
          '静态站点'
        ],
      },
      {
        name: 'GitBook',
        desc: 'GitBook帮助您为用户发布漂亮的文档，并集中您的团队的知识进行高级协作',
        logo: 'https://assets-global.website-files.com/600ead1452cf056d0e52dbed/6246d2036225eac4d74cff27_Favicon_Blue.png',
        href: 'https://www.gitbook.com/',
        tags: [
          '前端',
          '静态站点'
        ],
      },
      {
        name: 'Docsify',
        desc: 'docsify 可以快速帮你生成文档网站',
        logo: 'https://docsify.js.org/_media/icon.svg',
        href: 'https://docsify.js.org',
        tags: [
          '前端',
          '静态站点'
        ],
      },
      {
        name: 'WordPress',
        desc: 'WordPress是一款能让您建立出色网站、博客或应用程序的开源软件',
        logo: 'https://s.w.org/images/wmark.png',
        href: 'https://cn.wordpress.org/',
        tags: [
          '前端',
          '站点'
        ],
      },
    ],
  },
  {
    name: 'Github',
    resources: [
      {
        name: 'Gitstar Ranking',
        desc: '针对用户、组织和存储库的非官方 GitHub 星级排名',
        logo: 'https://gitstar-ranking.com/favicon.ico',
        href: 'https://gitstar-ranking.com/',
        tags: [],
      },
      {
        name: 'Metrics',
        desc: 'Create your own metrics',
        logo: 'https://avatars.githubusercontent.com/u/22963968?v=4',
        href: 'https://metrics.lecoq.io/',
        tags: [],
      },
      {
        name: 'Github主页 README 生成器',
        desc: '一个Github 个人主页 README 生成器',
        logo: 'https://rahuldkjain.github.io/gh-profile-readme-generator/icons/icon-384x384.png',
        href: 'https://rahuldkjain.github.io/gh-profile-readme-generator/',
        tags: [],
      },
      {
        name: 'Github 统计生成器',
        desc: 'Github 在你的 README 中获取动态生成的 GitHub 统计信息！',
        logo: 'https://camo.githubusercontent.com/9ad8cfe3215fff758ea74784f86ef0de25b6acfbd6a4fab19d9a13ff47b05843/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f616e7572616768617a72612f696d6167652f75706c6f61642f76313539343930383234322f6c6f676f5f636373776d652e737667',
        href: 'https://github.com/anuraghazra/github-readme-stats',
        tags: [],
      },
      {
        name: 'Github镜像站',
        desc: '',
        logo: 'https://assets.fgit.ml/favicons/favicon.svg',
        href: 'https://hub.fgit.ml/',
        tags: [],
      },
    ],
  },
  {
    name: '资源',
    resources: [
      {
        name: '音范丝',
        desc: '精选4K蓝光原盘下载,顶级收藏',
        logo: 'https://www.yinfans.me/wp-content/themes/Loos2/images/favicon.ico',
        href: 'https://www.yinfans.me/',
        tags: [
          '电影',
          '电视剧',
          '音乐'
        ],
      },
      {
        name: 'Themefisher',
        desc: '免费Bootstrap、Bulma、Hugo、NextJs等模板',
        href: 'https://themefisher.com/',
        logo: 'https://themefisher.com/images/logo/favicon.png',
        tags: ['资源'],
      },
      {
        name: '全民解析',
        desc: '全网影视视频在线解析',
        href: 'http://www.quanminjiexi.com/',
        logo: 'http://www.quanminjiexi.com/favicon.png',
        tags: ['资源'],
      },
      {
        name: 'Greasy Fork（油猴脚本）',
        desc: '安全、有用的用户脚本大全',
        href: 'https://greasyfork.org/',
        logo: 'https://greasyfork.org/vite/assets/blacklogo96.e0c2c761.png',
        tags: ['资源'],
      },
      {
        name: '那些免费的砖',
        desc: '发现设计/前端那些免费可商用的资源',
        href: 'https://www.thosefree.com/',
        logo: 'https://img.thosefree.com/static/logo.png',
        tags: ['资源'],
      },
      {
        name: 'Unsplash',
        desc: '美丽的免费图片和图片',
        href: 'https://unsplash.com/',
        logo: 'https://unsplash.com/safari-pinned-tab.svg',
        tags: ['资源'],
      },
      {
        name: '大众脸影视后期特效',
        desc: 'AE资源、PR模板、各种影视后期插件',
        href: 'https://www.lookae.com/',
        logo: 'https://www.lookae.com/favicon.ico',
        tags: ['资源'],
      },
      {
        name: 'Apphot',
        desc: '软件分享',
        href: 'https://apphot.cc/',
        logo: 'https://apphot.cc/wp-content/uploads/2020/10/cropped-apphot-1-192x192.png',
        tags: ['资源'],
      },
    ],
  },
]
