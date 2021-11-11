module.exports = {
    capabilities: {
        browser: 'firefox',
        'moz:firefoxOptions': {
            args: [
                'disable-gpu',
                'window-size=1000,800',
                'start-maximized',
                'disable-popup-blocking'
            ]
        }
    }
}