# vite-ts-starter

English | [中文](README.md)

[![Deploy](https://github.com/pdsuwwz/vite-ts-starter/workflows/gh-pages/badge.svg)](https://github.com/pdsuwwz/vite-ts-starter/actions/workflows/deploy.yml)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/actions/workflow/status/pdsuwwz/vite-ts-starter/deploy.yml?branch=main)](https://github.com/pdsuwwz/vite-ts-starter/deployments/activity_log?environment=github-pages)
[![thanks](https://badgen.net/badge/thanks/♥/pink)](https://github.com/pdsuwwz)
[![License](https://img.shields.io/github/license/pdsuwwz/vite-ts-starter?color=blue)](https://github.com/pdsuwwz/vite-ts-starter/blob/main/LICENSE)

🐬 A Starter template built on Vite 5.x + Vue 3.x + Element Plus 2.x + TypeScript + Husky + lint-staged.

A ready-to-use prototype template framework for quickly developing management systems using Vue3 + Vite5 + TS, with continuous updates on the latest tech stack 💪

[🚀 Online Playground](https://pdsuwwz.github.io/vite-ts-starter)


## 🌱 Different Versions
Five different tech stack repo templates are maintained. Try them and pick the one that fits you.

- 💥 (Recommended) [TS + Pinia + 🌐 Low-coupling (i18n) multilingual Vite5 + Vue3 + TS + Element-Plus2 + vue-i18n@next](https://github.com/pdsuwwz/vue-boilerplate-i18n)

- ⚡️ TS + Pinia [Vite5 + Vue3 + TS + Pinia + Element-Plus2 + useLocale + i18n](https://github.com/pdsuwwz/pinia-starter-ts)
- ⚡️ JS + Pinia [Vite5 + Vue3 + Pinia + Element-Plus2 + useLocale + i18n](https://github.com/pdsuwwz/vite-pinia-starter)

- ⚡️ TS + Vuex4 (Current Repo)[Vite5 + Vue3 + TS + Vuex4 + Element-Plus2 + useLocale + i18n](https://github.com/pdsuwwz/vite-ts-starter)
- ⚡️ JS + Vuex4 [Vite5 + Vue3 + Vuex4 + Element-Plus2 + useLocale + i18n](https://github.com/pdsuwwz/vite-starter)

## 🪄 Using Different UI Libraries

If you prefer using [Naive UI](https://www.naiveui.com/) as your UI library, we've also prepared several corresponding template projects for you. You can use these as a foundation for secondary business development and customization:

- 🏄‍♂️ [Naive UI basic template](https://github.com/pdsuwwz/vite-naive-template)
- 🗂️ [Naive UI Tab switching demo](https://github.com/pdsuwwz/vue3-tab-demo)


## 🎉 Features

* Supports __Vite 5 + Vue 3 + TypeScript__
* UI framework: __Element Plus 2.x__
* State management: __Vuex 4__
* Code standardization: __Husky + lint-staged__
* Unit testing framework: ~~__Jest__~~ upgraded to __Vitest__
* Built-in __ESlint__ and __Stylelint__, expandable for your desired Lint configuration
* Built-in encapsulation of a **potentially useful** Axios, to be used with Vuex Actions when needed
* Encapsulated \<IconFont \/> component for direct use of IconFont icons
* Built-in global **$ModalDialog** plugin, supports dynamic service-style calls to display any component
* Built-in i18n, supports language switching at VueRouter route level, allows writing internationalization config files and extending other languages
* Pre-configured route authentication, along with Nprogress, just modify the `permission.ts` file
* Comes with a modular component development environment, allowing decoupling of page components, route components, styles, etc. in the modules directory
* Highly encapsulated yet flexible, with an abstracted complete business process for reference, involving three core pages: login, list, and details
* Saves your configuration time, the project's **lightweight** nature allows you to focus solely on writing your business code


## Environment Support

* Vue 3.x
* Node >= 18.12.x
* Pnpm 9.x
* **VSCode Extension `dbaeumer.vscode-eslint` >= v3.0.5 (pre-release)**


## Screenshot

<img width="1440" alt="image" src="https://user-images.githubusercontent.com/19891724/154829635-46de24db-e4c5-409f-9fa5-6a9770ace166.png">
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/19891724/154829667-a84787b0-0104-4466-bb9e-9f586be66778.png">


## Install

Run `pnpm i` to install the dependencies.

```bash
pnpm i
```

## Run

Run `pnpm dev` to start the frontend dev server.

```bash
pnpm dev
```

## Test

Unit Testing.

```bash
pnpm test
```

Test code coverage.

```bash
pnpm test:coverage
```

## 💡 Tip

* If Husky is not working, it may be due to incomplete initialization. Try running the following command to initialize:

```bash
pnpm run prepare
```


## 😎 Awesome

* [awesome-vite](https://github.com/pdsuwwz/awesome-vite)
