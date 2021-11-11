const {Builder, By, Key, until} = require('selenium-webdriver');

const chromeConfig = require('./BrowserCapability/ChromeCapability');

const firefoxConfig = require('./BrowserCapability/FireFoxCapability');

const Chrome = require('selenium-webdriver/chrome');

const Firefox = require('selenium-webdriver/firefox');

const config = require('./index');

var driver;

if(config.browser == 'chrome'){
    driver = new Builder().forBrowser('chrome').build();
}

if(config.browser  == 'firefox'){
    driver = new Builder()
    .forBrowser('firefox')
    .withCapabilities(
        new Chrome.Options.addArgumats(
            firefoxConfig.capabilities['moz:firefoxOptions'].args
        )
    ).build();
}

class AppTestBasePage{

    constructor()
    {
        global.driver = driver;
    }

    async configerBrowserScreen(){
        await driver.manage().window().maximize();
    }

    async writeUrl(){
        if(config.env == 'prod'){
            console.log(config.writeLoginUrl);
            await driver.get(config.writeLoginUrl);
        }
    }

    async quitBrowser()
    {
        await driver.quit();
    }
}

module.exports = AppTestBasePage;