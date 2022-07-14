# vite-ts-starter

[![Deploy](https://github.com/pdsuwwz/vite-ts-starter/workflows/gh-pages/badge.svg)](https://github.com/pdsuwwz/vite-ts-starter/actions/workflows/deploy.yml)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/pdsuwwz/vite-ts-starter/gh-pages/main)](https://github.com/pdsuwwz/vite-ts-starter/deployments/activity_log?environment=github-pages)
[![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)
[![thanks](https://badgen.net/badge/thanks/♥/pink)](https://github.com/pdsuwwz)
[![License](https://img.shields.io/github/license/pdsuwwz/vite-ts-starter?color=blue)](https://github.com/pdsuwwz/vite-ts-starter/blob/main/LICENSE)

🐬  A Starter template built on Vite 2.x + Vue 3.x + Typescript.

**Live demo:** [Vite TS Starter](https://pdsuwwz.github.io/vite-ts-starter)


## 🎉 Features

* 支持 __Vue 3 + Vite 2 + TypeScript__
* UI 框架: __Element Plus 2.x__
* 状态管理: __Vuex 4__
* 单元测试框架: __Jest__
* 内置 __ESlint__ 和 __Stylelint__, 可在此基础上扩展你想要的 Lint 配置规范
* 内置封装了一个**可能比较好用的** Axios , 需要时配合 Vuex Actions 一起食用
* 封装了 \<IconFont \/> 组件, 可直接使用 IconFont 图标
* 内置全局 **$ModalDialog** 插件, 支持使用 service 式地动态调用此插件来显示任意组件
* 内置 i18n, 支持到 VueRouter 路由级别切换语言，可编写国际化配置文件及扩展其他语言
* 路由鉴权已帮你封装好，同时配合 Nprogress, 只需要修改 permission.ts 文件即可
* 自带一个模块化的组件开发环境，可按照 modules 目录解耦页面组件、路由组件、样式等文件
* 高度封装但不失灵活，内部抽象出了一个完整的业务流程供你参考，涉及三个核心页面：登录、列表和明细
* 节省你配置的时间，因此该项目的**轻量化**致使你只需要专心编写自己的业务代码即可


## Screenshot

<img width="1440" alt="image" src="https://user-images.githubusercontent.com/19891724/154829635-46de24db-e4c5-409f-9fa5-6a9770ace166.png">
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/19891724/154829667-a84787b0-0104-4466-bb9e-9f586be66778.png">


## Environment Support

* Vue 3.x
* Node >= 14.19.x


## Installation

Install node dependencies in all packages

```bash
pnpm install
```

## Run

Local Development

```bash
pnpm dev
```

## Test

Unit Testing

```bash
pnpm test
```

Test code coverage

```bash
pnpm test:coverage
```

## 😎 Awesome

* [awesome-vite](https://github.com/pdsuwwz/awesome-vite)
