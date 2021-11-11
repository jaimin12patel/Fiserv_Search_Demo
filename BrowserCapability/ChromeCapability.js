module.exports = {
    capabilities: {
        browser: 'chrome',
        chromeOptions: {
            args: [
                'disable-gpu',
                'window-size=1000,800',
                'start-maximized',
                'disable-popup-blocking'
            ]
        }
    }
}