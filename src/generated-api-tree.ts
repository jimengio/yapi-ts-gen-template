import { IJimuApiOption } from "@jimengio/api-base";
import { Id, EApiKind } from "@jimengio/yapi-ts-generator/lib/types";
import { insertPublicHost } from "./configs";
import {
  ajaxGet,
  ajaxDelete,
  ajaxPost,
  ajaxPut,
  hooksGet,
  hooksPost,
  hooksPut,
  hooksDelete,
  dynamicGet,
  dynamicPost,
  dynamicPut,
  dynamicDelete,
} from "@jimengio/yapi-ts-generator/lib/funcs";

/** Generated by generator */

export let genSeedApiTree = {
  tasks: {
    /** 任务列表 */
    GET: (q?: IApiQuery_Tasks, opts?: IJimuApiOption) => ajaxGet<IApiResultGet_Tasks>(insertPublicHost("/tasks"), `/tasks`, q, opts),
    /** 任务列表 */
    useGET: (q?: IApiQuery_Tasks, opts?: IJimuApiOption) => hooksGet<IApiResultGet_Tasks, IApiQuery_Tasks>(insertPublicHost("/tasks"), `/tasks`, q, opts),
    /** 任务列表 */
    dynamicGET: () => dynamicGet<IApiResultGet_Tasks, IApiQuery_Tasks, {}>(insertPublicHost("/tasks"), "/tasks"),
    /** 添加任务 */
    POST: (body: IApiBodyPost_Tasks, opts?: IJimuApiOption) => ajaxPost<IApiResultPost_Tasks>(insertPublicHost("/tasks"), `/tasks`, body, {}, opts),
    /** 添加任务 */
    usePOST: () => hooksPost<IApiResultPost_Tasks, IApiBodyPost_Tasks>(insertPublicHost("/tasks"), `/tasks`),
    /** 添加任务 */
    dynamicPOST: () => dynamicPost<IApiResultPost_Tasks, IApiBodyPost_Tasks, {}, {}>(insertPublicHost("/tasks"), "/tasks"),
    dict: {
      /** 任务字典 */
      GET: (opts?: IJimuApiOption) => ajaxGet<IApiResultGet_TasksDict>(insertPublicHost("/tasks/dict"), `/tasks/dict`, {}, opts),
      /** 任务字典 */
      useGET: (opts?: IJimuApiOption) => hooksGet<IApiResultGet_TasksDict>(insertPublicHost("/tasks/dict"), `/tasks/dict`, {}, opts),
      /** 任务字典 */
      dynamicGET: () => dynamicGet<IApiResultGet_TasksDict, {}, {}>(insertPublicHost("/tasks/dict"), "/tasks/dict"),
    },
    _: {
      /** 更新任务 */
      PUT: (id: Id, body: IApiBodyPut_Tasks_, opts?: IJimuApiOption) =>
        ajaxPut<IApiResultPut_Tasks_>(insertPublicHost("/tasks/{id}"), `/tasks/${id}`, body, {}, opts),
      /** 更新任务 */
      usePUT: (id: Id) => hooksPut<IApiResultPut_Tasks_, IApiBodyPut_Tasks_>(insertPublicHost("/tasks/{id}"), `/tasks/${id}`),
      /** 更新任务 */
      dynamicPUT: () => dynamicPut<IApiResultPut_Tasks_, IApiBodyPut_Tasks_, {}, { id: Id }>(insertPublicHost("/tasks/{id}"), "/tasks/${id}"),
      /** 删除任务 */
      DELETE: (id: Id, opts?: IJimuApiOption) => ajaxDelete(insertPublicHost("/tasks/{id}"), `/tasks/${id}`, opts),
      /** 删除任务 */
      useDELETE: (id: Id) => hooksDelete(insertPublicHost("/tasks/{id}"), `/tasks/${id}`),
      /** 删除任务 */
      dynamicDELETE: () => dynamicDelete<{ id: Id }>(insertPublicHost("/tasks/{id}"), "/tasks/${id}"),
    },
  },
  user: {
    accesses: {
      _: {
        /** 删除登录记录 */
        DELETE: (id: Id, opts?: IJimuApiOption) => ajaxDelete(insertPublicHost("/user/accesses/{id}"), `/user/accesses/${id}`, opts),
        /** 删除登录记录 */
        useDELETE: (id: Id) => hooksDelete(insertPublicHost("/user/accesses/{id}"), `/user/accesses/${id}`),
        /** 删除登录记录 */
        dynamicDELETE: () => dynamicDelete<{ id: Id }>(insertPublicHost("/user/accesses/{id}"), "/user/accesses/${id}"),
      },
    },
    info: {
      /** 更新用户信息 */
      POST: (body: IApiBodyPost_UserInfo, opts?: IJimuApiOption) =>
        ajaxPost<IApiResultPost_UserInfo>(insertPublicHost("/user/info"), `/user/info`, body, {}, opts),
      /** 更新用户信息 */
      usePOST: () => hooksPost<IApiResultPost_UserInfo, IApiBodyPost_UserInfo>(insertPublicHost("/user/info"), `/user/info`),
      /** 更新用户信息 */
      dynamicPOST: () => dynamicPost<IApiResultPost_UserInfo, IApiBodyPost_UserInfo, {}, {}>(insertPublicHost("/user/info"), "/user/info"),
      /** 更新用户信息 */
      PUT: (body: IApiBodyPut_UserInfo, opts?: IJimuApiOption) => ajaxPut<IApiResultPut_UserInfo>(insertPublicHost("/user/info"), `/user/info`, body, {}, opts),
      /** 更新用户信息 */
      usePUT: () => hooksPut<IApiResultPut_UserInfo, IApiBodyPut_UserInfo>(insertPublicHost("/user/info"), `/user/info`),
      /** 更新用户信息 */
      dynamicPUT: () => dynamicPut<IApiResultPut_UserInfo, IApiBodyPut_UserInfo, {}, {}>(insertPublicHost("/user/info"), "/user/info"),
    },
    me: {
      /** 用户信息 */
      GET: (q?: IApiQuery_UserMe, opts?: IJimuApiOption) => ajaxGet<IApiResultGet_UserMe>(insertPublicHost("/user/me"), `/user/me`, q, opts),
      /** 用户信息 */
      useGET: (q?: IApiQuery_UserMe, opts?: IJimuApiOption) =>
        hooksGet<IApiResultGet_UserMe, IApiQuery_UserMe>(insertPublicHost("/user/me"), `/user/me`, q, opts),
      /** 用户信息 */
      dynamicGET: () => dynamicGet<IApiResultGet_UserMe, IApiQuery_UserMe, {}>(insertPublicHost("/user/me"), "/user/me"),
    },
  },
  users: {
    /** 用户列表 */
    GET: (q?: IApiQuery_Users, opts?: IJimuApiOption) => ajaxGet<IApiResultGet_Users>(insertPublicHost("/users"), `/users`, q, opts),
    /** 用户列表 */
    useGET: (q?: IApiQuery_Users, opts?: IJimuApiOption) => hooksGet<IApiResultGet_Users, IApiQuery_Users>(insertPublicHost("/users"), `/users`, q, opts),
    /** 用户列表 */
    dynamicGET: () => dynamicGet<IApiResultGet_Users, IApiQuery_Users, {}>(insertPublicHost("/users"), "/users"),
    _: {
      /** 获取特定用户 */
      GET: (id: Id, opts?: IJimuApiOption) => ajaxGet<IApiResultGet_Users_>(insertPublicHost("/users/{id}"), `/users/${id}`, {}, opts),
      /** 获取特定用户 */
      useGET: (id: Id, opts?: IJimuApiOption) => hooksGet<IApiResultGet_Users_>(insertPublicHost("/users/{id}"), `/users/${id}`, {}, opts),
      /** 获取特定用户 */
      dynamicGET: () => dynamicGet<IApiResultGet_Users_, {}, { id: Id }>(insertPublicHost("/users/{id}"), "/users/${id}"),
    },
  },
};

export interface IApiBodyPost_Tasks {
  title?: string;
  content?: string;
  createdAt?: string;
  /** 优先级 1-5 */
  priority?: number;
  finished?: boolean;
}
export interface IApiBodyPost_UserInfo {
  name: string;
  gender: string;
}
export interface IApiBodyPut_Tasks_ {
  id?: string;
  title: string;
  content: string;
  createdAt?: string;
  priority?: number;
  finished: boolean;
}
export interface IApiBodyPut_UserInfo {
  id?: string;
  name?: string;
  position?: { id: string; name: string };
}
export interface IApiQuery_Tasks {
  priority?: any;
  createdAt?: any;
  finished?: any;
}
export interface IApiQuery_UserMe {
  /** 包含详细职位信息 */
  withPosition?: any;
}
export interface IApiQuery_Users {
  /** 按照职位筛选 */
  positionId?: string;
}
export interface IApiResultGet_TasksDict {
  [taskId: string]: { id: string; title: string; content: string; finished: string; createdAt?: string; priority?: string };
}
export interface IApiResultGet_UserMe {
  id: string;
  name: string;
  /** 职位信息 */
  position?: { id?: string; name?: string };
}
export interface IApiResultGet_Users {
  result?: { id?: string; name?: string; position?: { id?: string; name?: string } }[];
  total?: number;
}
export interface IApiResultGet_Users_ {
  id: string;
  name: string;
  position?: { id: string; name: string };
}
export interface IApiResultPost_Tasks {}
export interface IApiResultPost_UserInfo {
  id: string;
  name: string;
}
export interface IApiResultPut_Tasks_ {
  id: string;
  title: string;
  content: string;
  createdAt?: string;
  priority?: number;
  finished?: boolean;
}
export interface IApiResultPut_UserInfo {
  id: string;
  name: string;
  position: { id: string; name: string };
}
export type IApiResultGet_Tasks = {
  id: string;
  title: string;
  content: string;
  createdAt?: string;
  /** 优先级, 1 - 5 */
  priority?: number;
  /** 完成状态 */
  finished: boolean;
}[];
