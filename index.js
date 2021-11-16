const env = process.env.RATE_ENV.toLowerCase() || 'prod'; 
const browser = process.env.BROWSER.toLowerCase() || 'chrome';

const Urls = {
    prod: 'https://www.wayfair.com/'
}

module.exports = {
    writeLoginUrl : Urls[env],
    env,
    browser
}