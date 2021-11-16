const WayPageElemets = require('../PgaesElements/wayHomePageEle');

const AppTestBasePage = require('../AppTestBase');

const { By, until } = require('selenium-webdriver');



class RatePage extends AppTestBasePage
{
    async verifyTitle(titleText)
    {
        await driver.wait(until.titleIs(titleText), 20000);
    }

    async verifyHeaderTitleisDisplayed()
    {
        
        try{
             await driver.findElement(By.xpath(WayPageElemets.wayfairTitlexpath)).getTitle();
        }
        catch(err)
        {
            throw err;
        }
    }

    async ClickOnWayFairMoreIcon()
    {
        try{
            await driver.wait(until.elementLocated(By.id(WayPageElemets.moreIconWayfairMenuID)), 30000);

            await driver.findElement(By.id(WayPageElemets.moreIconWayfairMenuID)).click();
        }
        catch(err){
            throw err;
        }
    }
} 

module.exports = new RatePage();