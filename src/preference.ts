import { IPathPreference } from "@jimengio/yapi-ts-generator/lib/preference";

export let pathPreferences: { [k: string]: IPathPreference } = {
  '/user/accesses/{id}': {},
  '/user/info': {},
  '/user/me': {},
  '/users': {},
  '/users/{id}': {},
  '/tasks': {},
  '/tasks/dict': {},
  '/tasks/{id}': {},
};

// query 默认类型都是 any, 特殊的字段通过字典定义
export let definedQueryTypes = {
  id: "string",
  search: "string",
  keyword: "string",
  deleted: "boolean",
  limit: "number",
  offset: "number",
  showDeleted: "boolean",
  showInstalled: "boolean",
  departmentRecursive: "boolean",
};
