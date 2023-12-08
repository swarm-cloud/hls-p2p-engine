
export interface CacheLimit {
    pc: number;
    mobile: number;
}

export interface SignalConfig {
    main: string;
    backup: string;
}

export enum LogLevel {
    Warn = 'warn',
    Error = 'error',
    None = 'none',
}

export enum TrackerZone {
    China = 'cn',
    Europe = 'eu',
    HongKong = 'hk',
    USA = 'us',
}

export interface P2pConfig {
    logLevel?: LogLevel | boolean;
    live?: boolean;
    signalConfig?: string | SignalConfig;
    announce?: string;
    trackerZone?: TrackerZone;
    memoryCacheLimit?: CacheLimit;
    diskCacheLimit?: CacheLimit;
    p2pEnabled?: boolean;
    hlsjsInstance?: any;
    proxyOnly?: boolean;
    dcDownloadTimeout?: number;
    webRTCConfig?: any;
    useHttpRange?: boolean;
    httpLoadTime?: number;
    sharePlaylist?: boolean;
    tag?: string;
    swFile?: string;
    swScope?: string;
    swAutoRegister?: boolean;
    token?: string;
    appName?: string;
    appId?: string;
    showSlogan?: boolean;
    trickleICE?: boolean;
    geoIpPreflight?: boolean;
    getStats?: (totalP2PDownloaded: number, totalP2PUploaded: number, totalHTTPDownloaded: number, p2pDownloadSpeed: number)=>void;
    getPeerId?: (peerId: string)=>void;
    getPeersInfo?: (peers: string[])=>void;
    channelId?: ((m3u8Url: string)=>string) | string;
    segmentId?: (streamId: string, sn: number, url: string, range: string)=>string;
    segmentBypass?: (url: string, tags: string[])=>boolean;
    validateSegment?: (segId: string, buffer: ArrayBufferLike)=>boolean;
    mediaElem?: HTMLMediaElement | string;
    useDiskCache?: boolean;
    strictSegmentId?: boolean;
    httpStreamEnabled?: boolean;
    waitForPeer?: boolean;
    waitForPeerTimeout?: number;
    sourceUrl?: string;
}

export declare class P2pEngineHls {
    static isSupported(): boolean;
    static isMSESupported(): boolean;
    static isServiceWorkerSupported(): boolean;
    static getBrowser(): string;
    static tryRegisterServiceWorker(p2pConfig?: P2pConfig): Promise<void>;
    static readonly version: string;
    static readonly protocolVersion: string;
    public readonly version: string;
    public readonly engineName: string;
    public readonly ServiceWorkerEngine: HlsSwP2pEngine;
    public readonly HlsjsEngine: HlsjsP2pEngine;
    constructor(p2pConfig?: P2pConfig);
    registerServiceWorker(): Promise<ServiceWorkerRegistration>;
    unregisterServiceWorker(): Promise<void>;
    enableP2P(): void;
    disableP2P(): void;
    destroy(): void;
    on(name: string, func: (...args)=>void): P2pEngineHls;
    off(name: string, func: (...args)=>void): P2pEngineHls;
    once(name: string, func: (...args)=>void): P2pEngineHls;
    removeListener(name: string, func: (...args)=>void);
    removeAllListeners(name: string);
}

export declare class HlsSwP2pEngine {
    static isServiceWorkerSupported(): boolean;
    static readonly name: string;
    constructor(p2pConfig?: P2pConfig);
    registerServiceWorker(): Promise<ServiceWorkerRegistration>;
    unregisterServiceWorker(): Promise<void>;
    enableP2P(): void;
    disableP2P(): void;
    destroy(): void;
    on(name: string, func: (...args)=>void): HlsSwP2pEngine;
    off(name: string, func: (...args)=>void): HlsSwP2pEngine;
    once(name: string, func: (...args)=>void): HlsSwP2pEngine;
    removeListener(name: string, func: (...args)=>void);
    removeAllListeners(name: string);
}

export declare class HlsjsP2pEngine {
    static readonly name: string;
    constructor(hlsjs: any, p2pConfig?: P2pConfig);
    enableP2P(): void;
    disableP2P(): void;
    destroy(): void;
    on(name: string, func: (...args)=>void): HlsjsP2pEngine;
    off(name: string, func: (...args)=>void): HlsjsP2pEngine;
    once(name: string, func: (...args)=>void): HlsjsP2pEngine;
    removeListener(name: string, func: (...args)=>void);
    removeAllListeners(name: string);
}

export default P2pEngineHls;
