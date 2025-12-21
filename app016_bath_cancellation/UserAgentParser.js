import { APP_CONFIG } from './AppConfig.js';

export default class UserAgentParser {
    constructor(userAgent) {
        this.userAgent = userAgent || '';
    }

    getStoreType() {
        const ua = this.userAgent.toLowerCase();
        if (ua.includes('iphone') || ua.includes('ipad') || ua.includes('ipod')) {
            return APP_CONFIG.STORE_TYPE.APP_STORE;
        }
        if (ua.includes('android')) {
            return APP_CONFIG.STORE_TYPE.PLAY_STORE;
        }
        return APP_CONFIG.STORE_TYPE.BOTH;
    }
}
