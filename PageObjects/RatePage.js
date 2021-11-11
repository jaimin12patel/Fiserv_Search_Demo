const RatePageElemets = require('../PgaesElements/RatePageEle');

const AppTestBasePage = require('../AppTestBase');
const { By } = require('selenium-webdriver');
const { util } = require('chai');


class RatePage extends AppTestBasePage
{
    async verifyTitle(titleText)
    {
        await driver.wait(util.titleIs(titleText), 20000);
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
            await driver.findElement(By.linkText(RatePageElemets.impurchasingButtonText)).click();
        }
        catch(err){
            throw err;
        }
    }
} 

module.exports = new RatePage();