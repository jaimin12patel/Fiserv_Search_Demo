let {Builder, until} = require('selenium-webdriver');

let webdriver = require('selenium-webdriver');
let chromeConfig = require('./BrowserCapability/ChromeCapability');
let firefoxConfig = require('./BrowserCapability/FireFoxCapability');
let config = require('./index');
var driver;


if(config.browser == 'chrome'){
    driver = new Builder().forBrowser('chrome').build();
}

if(config.browser  == 'firefox'){
    driver = new webdriver.Builder().forBrowser('firefox').build();
}

module.exports = class BasePage{

    constructor(){
        global.driver = driver;
    }

    async configureBrowserScreen(){
        await driver.manage().window().maximize();
    }

    async writeUrl(){
        console.log(config.writeLoginUrl);
        await driver.get(config.writeLoginUrl);
        await driver.manage().setTimeouts( { implicit: 10000 } );  
    }

    async quitBrowser(){
        await driver.quit();
    }

    async validateTheTitle(titleText){
        try{
        await driver.wait(until.titleIs(titleText), 20000);
        }
        catch(err){
            console.log("error:" + err);
        }
    }

    async writeOnTextBox(locator, text){
        try{
            await driver.wait(until.elementsLocated(locator), 1000);
            await driver.findElement(locator).sendKeys(text);
        }
        catch(err){
            console.log("error:" + err);
        }
    }

    async writeTextBoxAndHitEnter(locator, text){
        try{
            await driver.wait(until.elementsLocated(locator), 1000);
            await driver.findElement(locator).sendKeys(text, webdriver.Key.RETURN);
        }
        catch(err){
            console.log("error:" + err);
        }
    }

    async clickOnElement(locator){
        try{
            await driver.wait(until.elementsLocated(locator), 1000);
            await driver.findElement(locator).click();
        }
        catch(err){
            console.log("error:" + err);
        }
    }

    async getText(locator){
        try{
            await driver.wait(until.elementsLocated(locator), 1000);
            return await driver.findElement(locator).getText();
        }
        catch(err){ 
            console.log("error:" + err);
        }  
    }


    async isElementDisplayed(locator){
        try{
            return await driver.findElement(locator).isDisplayed();
        }
        catch(err){ 
            console.log("error:" + err);
        }  
    }

    async switchToNewTab(){
        try{
            await driver.wait(
                async () => (await driver.getAllWindowHandles()).length === 2,
                10000
              );
        }
        catch(err){ 
            console.log("error:" + err);
        }  
    }

}

