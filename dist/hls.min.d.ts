import Hlsjs from 'hls.js'
import P2pEngineHls from "./p2p-engine.min";

export declare class SWHlsjs extends Hlsjs {
    static engineVersion: string;
    static protocolVersion: string;
    static WEBRTC_SUPPORT: boolean;
    constructor(config?: any);
    readonly p2pEngine: P2pEngineHls;
    enableP2P(): void;
    disableP2P(): void;
}

export default SWHlsjs
