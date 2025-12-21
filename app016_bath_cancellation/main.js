import UserAgentParser from './UserAgentParser.js';
import Redirector from './Redirector.js';

document.addEventListener('DOMContentLoaded', () => {
    const parser = new UserAgentParser(navigator.userAgent);
    const redirector = new Redirector(window, parser);
    redirector.redirect();
});
