import UserAgentParser from './UserAgentParser';

describe('UserAgentParser', () => {
    // Tests for iOS
    test('returns "APP_STORE" for iPhone', () => {
        const parser = new UserAgentParser('Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)');
        expect(parser.getStoreType()).toBe('APP_STORE');
    });

    test('returns "APP_STORE" for iPad', () => {
        const parser = new UserAgentParser('Mozilla/5.0 (iPad; CPU OS 14_0 like Mac OS X)');
        expect(parser.getStoreType()).toBe('APP_STORE');
    });

    test('returns "APP_STORE" for iPod', () => {
        const parser = new UserAgentParser('Mozilla/5.0 (iPod; CPU iPhone OS 14_0 like Mac OS X)');
        expect(parser.getStoreType()).toBe('APP_STORE');
    });

    // Tests for Android
    test('returns "PLAY_STORE" for Android', () => {
        const parser = new UserAgentParser('Mozilla/5.0 (Linux; Android 11; Pixel 5)');
        expect(parser.getStoreType()).toBe('PLAY_STORE');
    });

    // Tests for others (PC, Mac, Linux Desktop)
    test('returns "BOTH" for Windows PC', () => {
        const parser = new UserAgentParser('Mozilla/5.0 (Windows NT 10.0; Win64; x64)');
        expect(parser.getStoreType()).toBe('BOTH');
    });

    test('returns "BOTH" for Mac', () => {
        const parser = new UserAgentParser('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)');
        expect(parser.getStoreType()).toBe('BOTH');
    });
});
