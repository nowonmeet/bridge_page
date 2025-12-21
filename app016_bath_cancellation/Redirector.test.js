import Redirector from './Redirector';
import { APP_CONFIG } from './AppConfig';

describe('Redirector', () => {
    let mockWindow;
    let mockParser;

    beforeEach(() => {
        mockWindow = {
            location: {
                href: ''
            }
        };
        mockParser = {
            getStoreType: jest.fn()
        };
    });

    test('redirects to App Store when user agent is iOS', () => {
        mockParser.getStoreType.mockReturnValue(APP_CONFIG.STORE_TYPE.APP_STORE);
        const redirector = new Redirector(mockWindow, mockParser);

        redirector.redirect();

        expect(mockWindow.location.href).toBe(APP_CONFIG.APP_STORE_URL);
    });

    test('redirects to Play Store when user agent is Android', () => {
        mockParser.getStoreType.mockReturnValue(APP_CONFIG.STORE_TYPE.PLAY_STORE);
        const redirector = new Redirector(mockWindow, mockParser);

        redirector.redirect();

        expect(mockWindow.location.href).toBe(APP_CONFIG.PLAY_STORE_URL);
    });

    test('does not redirect when user agent is others', () => {
        mockParser.getStoreType.mockReturnValue(APP_CONFIG.STORE_TYPE.BOTH);
        const redirector = new Redirector(mockWindow, mockParser);

        redirector.redirect();

        expect(mockWindow.location.href).toBe('');
    });
});
