import { APP_CONFIG } from './AppConfig.js';

export default class Redirector {
    constructor(window, parser) {
        this.window = window;
        this.parser = parser;
    }

    redirect() {
        const type = this.parser.getStoreType();
        if (type === APP_CONFIG.STORE_TYPE.APP_STORE) {
            this.window.location.href = APP_CONFIG.APP_STORE_URL;
        } else if (type === APP_CONFIG.STORE_TYPE.PLAY_STORE) {
            this.window.location.href = APP_CONFIG.PLAY_STORE_URL;
        }
    }
}
