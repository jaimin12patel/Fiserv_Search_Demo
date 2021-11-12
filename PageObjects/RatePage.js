const RatePageElemets = require('../PgaesElements/RatePageEle');

const AppTestBasePage = require('../AppTestBase');
const { By, until } = require('selenium-webdriver');



class RatePage extends AppTestBasePage
{
    async verifyTitle(titleText)
    {
        await driver.wait(until.titleIs(titleText), 20000);
    }

    async getHeaderText()
    {
        
        try{
            await driver.findElement(By.xpath(RatePageElemets.rateHeaderxPath)).getAttribute("value");
        }
        catch(err)
        {
            throw err;
        }
    }

    async ClickOnimPurchasingButton()
    {
        try{
            await driver.wait(until.elementLocated(By.xpath(RatePageElemets.impurchasingButtonXpath)), 30000);

            await driver.findElement(By.xpath(RatePageElemets.impurchasingButtonXpath)).click();
        }
        catch(err){
            throw err;
        }
    }
} 

module.exports = new RatePage();