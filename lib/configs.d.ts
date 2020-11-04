export declare let insertPublicHost: (path?: string) => string;
interface IHostOptions {
    /** 默认 /public */
    apiHost: string;
    /** 默认 /bbb */
    /** 默认 /mock */
    mockHost?: string;
    mockedPaths?: string[];
}
/** TODO, 需要根据项目名称替换 */
export declare let configureSeedHosts: (options: IHostOptions) => void;
export {};
