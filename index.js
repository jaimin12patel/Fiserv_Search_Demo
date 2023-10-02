const env = process.env.SEARCH_ENV.toLowerCase() || 'google'; 
const browser = process.env.BROWSER.toLowerCase() || 'chrome';

const url = {
    google: 'https://www.google.com/',
    bing: 'https://www.bing.com/',
    yahoo: 'https://search.yahoo.com/'
}

module.exports = {
    writeLoginUrl : url[env],
    env,
    browser
}