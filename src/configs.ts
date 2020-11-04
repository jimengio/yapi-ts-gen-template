import { pathPreferences } from "./preference";

let apiHost = "/public";
// let bbbApiHost = "/bbb";

let mockHost = "/mock";
let pathsMocked: string[] = [];

export let insertPublicHost = (path?: string) => {
  if (pathsMocked.includes(path)) {
    return mockHost;
  }
  return apiHost;
};

let defaultPathsOverwritten = false;

interface IHostOptions {
  /** 默认 /public */
  apiHost: string;
  /** 默认 /bbb */
  // bbbHost?: string;
  /** 默认 /mock */
  mockHost?: string;
  mockedPaths?: string[];
}

/** TODO, 需要根据项目名称替换 */
export let configureSeedHosts = (options: IHostOptions) => {
  apiHost = options.apiHost;
  // bbbApiHost = options.bbbHost;

  if (options.mockHost != null) {
    mockHost = options.mockHost;
  }
  if (options.mockedPaths) {
    pathsMocked = options.mockedPaths;
    pathsMocked.forEach((p) => {
      if (pathPreferences[p] == null) {
        let choices = Object.keys(pathPreferences);
        let p0 = p.split("/").filter((x) => x.length > 0)[0];
        let possibleChices = choices.filter((x) => x.includes(p0));
        if (possibleChices.length > 0) {
          choices = possibleChices;
        }
        console.error("invalid API path for mocking", JSON.stringify(p), "according to", choices);
      } else {
        console.warn("API mocked:", p);
      }
    });
  }

  defaultPathsOverwritten = true;
};

let warnNotConfigured = `
异步检测到 apiHosts 没有被设定.
请在 main.tsx 文件开头调用 configureHosts(...) 函数配置两个 apiHost 路径.
注意在所有请求发起之前要配置好 apiHosts, 否则线上环境调用路径会出错.
`.trim();

setTimeout(() => {
  if (defaultPathsOverwritten === false) {
    console.error(warnNotConfigured);
  }
}, 0);
