# vite-ts-starter

中文 | [English](README-en.md)

[![Deploy](https://github.com/pdsuwwz/vite-ts-starter/workflows/gh-pages/badge.svg)](https://github.com/pdsuwwz/vite-ts-starter/actions/workflows/deploy.yml)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/actions/workflow/status/pdsuwwz/vite-ts-starter/deploy.yml?branch=main)](https://github.com/pdsuwwz/vite-ts-starter/deployments/activity_log?environment=github-pages)
[![thanks](https://badgen.net/badge/thanks/♥/pink)](https://github.com/pdsuwwz)
[![License](https://img.shields.io/github/license/pdsuwwz/vite-ts-starter?color=blue)](https://github.com/pdsuwwz/vite-ts-starter/blob/main/LICENSE)

🐬 A Starter template built on Vite 5.x + Vue 3.x + Element Plus 2.x + TypeScript + Husky + lint-staged.

一个开箱即用，适合快速开发 Vue3 + Vite5 + TS 中小型 B 端后台管理系统的原型模板项目框架，持续更新最新技术栈 💪

[🚀 Live Demo 在线体验](https://pdsuwwz.github.io/vite-ts-starter)


## 🌱 不同版本
目前一共有以下五个不同技术栈的仓库模板在持续维护，请尝试后选择适合自己的模板使用

- 💥 (推荐) [TS + Pinia + 🌐 低耦合(i18n)多语言 Vite5 + Vue3 + TS + Element-Plus2 + vue-i18n@next](https://github.com/pdsuwwz/vue-boilerplate-i18n)

- ⚡️ TS + Pinia 版 [Vite5 + Vue3 + TS + Pinia + Element-Plus2 + useLocale + i18n](https://github.com/pdsuwwz/pinia-starter-ts)
- ⚡️ JS + Pinia 版 [Vite5 + Vue3 + Pinia + Element-Plus2 + useLocale + i18n](https://github.com/pdsuwwz/vite-pinia-starter)

- ⚡️ TS + Vuex4 版 (当前仓库)[Vite5 + Vue3 + TS + Vuex4 + Element-Plus2 + useLocale + i18n](https://github.com/pdsuwwz/vite-ts-starter)
- ⚡️ JS + Vuex4 版 [Vite5 + Vue3 + Vuex4 + Element-Plus2 + useLocale + i18n](https://github.com/pdsuwwz/vite-starter)

## 🪄 使用不同的 UI 库

如果更偏好使用 [Naive UI](https://www.naiveui.com/) 作为 UI 库, 这里也为你准备了几个相应的模板项目，可在此基础上进行业务二次开发和定制：

- 🏄‍♂️ [Naive UI 基础模板，集成常用技术栈](https://github.com/pdsuwwz/vite-naive-template)
- 🗂️ [基于 Naive UI 的 Tab 多页签切换选项卡演示](https://github.com/pdsuwwz/vue3-tab-demo)


## 🎉 Features

* 支持 __Vite 5 + Vue 3 + TypeScript__
* UI 框架: __Element Plus 2.x__
* 状态管理: __Vuex 4__
* 代码规范化检测: __Husky + lint-staged__
* 单元测试框架: ~~__Jest__~~ 升级为 __Vitest__
* 内置 __ESlint__ 和 __Stylelint__, 可在此基础上扩展你想要的 Lint 配置规范
* 内置封装了一个**可能比较好用的** Axios , 需要时配合 Vuex Actions 一起食用
* 封装了 \<IconFont \/> 组件, 可直接使用 IconFont 图标
* 内置全局 **$ModalDialog** 插件, 支持使用 service 式地动态调用此插件来显示任意组件
* 内置 i18n, 支持到 VueRouter 路由级别切换语言，可编写国际化配置文件及扩展其他语言
* 路由鉴权已帮你封装好，同时配合 Nprogress, 只需要修改 permission.ts 文件即可
* 自带一个模块化的组件开发环境，可按照 modules 目录解耦页面组件、路由组件、样式等文件
* 高度封装但不失灵活，内部抽象出了一个完整的业务流程供你参考，涉及三个核心页面：登录、列表和明细
* 节省你配置的时间，因此该项目的**轻量化**致使你只需要专心编写自己的业务代码即可


## 前置条件

* Vue 3.x
* Node >= 18.12.x
* Pnpm 9.x
* **VS Code 插件 `dbaeumer.vscode-eslint` >= v3.0.5 (pre-release)**


## 运行效果截图

<img width="1440" alt="image" src="https://user-images.githubusercontent.com/19891724/154829635-46de24db-e4c5-409f-9fa5-6a9770ace166.png">
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/19891724/154829667-a84787b0-0104-4466-bb9e-9f586be66778.png">


## 安装和运行

* 安装依赖

```bash
pnpm i
```

* 本地开发

```bash
pnpm dev
```

## 单元测试

* 执行单测

```bash
pnpm test
```

* 执行覆盖率测试

```bash
pnpm test:coverage
```

## 🌍 国际化 i18n 设置

本项目支持多语言设置，默认语言为 `English`.

### 默认语言配置


默认语言通过 [`defaultLanguageLocale`](src/locales/index.ts#L43) 常量设置。要更改默认语言，只需修改此常量的值：

```ts
export const defaultLanguageLocale = 'en'
```

### 扩展支持的语言


项目当前支持以下语言，详见代码[src/locales/index.ts](src/locales/index.ts#L13):

```ts
export const localesMapping = [
  {
    localeCode: 'zh-hans',
    localeName: '简体中文',
    localeLang: {...}
  },
  {
    localeCode: 'en',
    localeName: 'English',
    localeLang: {...}
  }
]
```

要添加新的语言支持:

  * 在 [`localesMapping`](src/locales/index.ts#L13) 数组中添加新的语言对象
  * 在 [`src/locales/lang/`](src/locales/lang/) 目录下创建对应的语言文件（如 de.ts 为德语）

    ```
    ./lang
    ├── en.ts
    └── zh-hans.ts
    ```
  * 导入并合并 `Element Plus` 语言包和自定义语言文件，确保 UI 组件和自定义内容均被本地化


## 💡 提示

* 若 Husky 未生效，可能是由于未完成初始化，尝试执行以下命令进行初始化:

```bash
pnpm run prepare
```


## 😎 Awesome

* [awesome-vite](https://github.com/pdsuwwz/awesome-vite)
