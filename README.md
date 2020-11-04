## template project for yapi-ts-generator

### 模板使用步骤

- 基于模板创建新项目, 以及访问到 yapi 的 swaggerjson 文件.
- YAPI > 数据管理 > 数据导出 > swaggerjson, 下载得到 JSON 配置, 替换 `generator/swagger-api.json` 文件
- 查找替换所有 `genSeedApiTree` `configureSeedHosts` 命名, 按照项目需要定义新名称
- 替换 `src/preference.ts` 当中的路径, 跟所需要的 API 对应
- 运行 `yarn gen` 生成所需要的文件
- 增加 `package.json` 当中的版本号, 发布到仓库, 生成对应的 Tag/Release

注意当前模板中默认根据 `api.*` 过于 YAPI 侧边栏上的分类, 生成单个文件. 如果需要,

- 不限制前缀 -> 修改 `generator/main.ts` 替换掉 `byPublicApi` 定义的过滤逻辑,
- 根据前缀生成多个文件 -> 在 `generator/main.ts` 中复制逻辑, 按照前缀过滤出 API 生成另一个文件, 以及增设对应的配置入口.

### Usages

```yarn
yarn add <internal-git-host>/npm-seed-apis#0.0.1 # 注意调整对应的版本或者分支名, 所私有仓库安装
```

```ts
import { genSeedApiTree, configureSeedHosts } from "@beego/npm-platform-apps-apis";

// 注意尽可能早调用
configureSeedHosts({
  apiHost: "/public",

  // 可选, 开发环境 mock 配置,
  mockHost: "/mock",
  mockedPaths: __DEV__ ? [] : null, // 注意不要把 mock 带到生产环境
});
```

### 更新 API

- 从 `<YAPI 项目路径>/data` 下载 "数据导出 > swaggerjson" 的数据, 替换 `generator/swagger-api.json` 文件.
- 修改 `generator/preference.ts` 当中路径的配置, 新增 API 要加上对应的项.
- 运行 `yarn gen` 生成新的 API, 留意下 log 中有没有明显问题.
- merge 以后升级版本, 然后打 tag 发 release. (如有需要, PR 同时也可以发 alpha release).

### Workflow

https://github.com/jimengio/yapi-ts-gen-template

### License

MIT
