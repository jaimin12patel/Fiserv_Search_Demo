const WayPageElemets = require('../PgaesElements/wayHomePageEle');

const AppTestBasePage = require('../AppTestBase');

const { By, until } = require('selenium-webdriver');

class LoginPage extends AppTestBasePage
{
    async FocusandWritePasswordOnLogin()
    {
        try{
            await driver.findElement(By.css(WayPageElemets.loginPasswordCss)).click()
            await driver.findElement(By.id(WayPageElemets.loginPasswordCss)).sendKeys("JaiminP")
        }
        catch(err){
            throw err;
        }
    }

    async ClickOnSignIn()
    {
        try{
            await driver.findElement(By.css(WayPageElemets.loginPageSignin)).click()
        }
        catch(err){
            throw err;
        }
    }

} 

module.exports = new LoginPage()