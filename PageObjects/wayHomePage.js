const WayPageElemets = require('../PgaesElements/wayHomePageEle');

const AppTestBasePage = require('../AppTestBase');

const { By, until } = require('selenium-webdriver');



class WayHomePage extends AppTestBasePage
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
            await driver.wait(until.elementLocated(By.id(WayPageElemets.moreIconWayfairMenuID)),10000);

            await driver.findElement(By.id(WayPageElemets.moreIconWayfairMenuID)).click()

            
            // await driver.findElement(By.id("textInput-0")).click()
            // await driver.findElement(By.id("textInput-0")).sendKeys("cxczxc")
            // await driver.findElement(By.css(".pl-Box--mb-4 > .Button")).click()
            // await driver.findElement(By.css(".Link__StyledLink-sc-1qyv2c9-0 > svg")).click()
            // await driver.findElement(By.id("HeaderHamburgerMenuButton")).click()
            // await driver.findElement(By.css(".MyAccountDropdown-item:nth-child(2) .MyAccountLinkCard-text")).click()
            // {
            //   const element = await driver.findElement(By.css(".Link__StyledLink-sc-1qyv2c9-0 > svg"))
            //   await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
            // }
            // {
            //   const element = await driver.findElement(By.css("svg:nth-child(1) > path:nth-child(2)"))
            //   await driver.actions({ bridge: true }).moveToElement(element).release().perform()
            // }
            // await driver.findElement(By.css(".Link__StyledLink-sc-1qyv2c9-0 > svg")).click()
            // {
            //   const element = await driver.findElement(By.css(".SitewideBanner-copy--long"))
            //   await driver.actions({ bridge: true }).moveToElement(element).perform()
            // }
            // {
            //   const element = await driver.findElement(By.CSS_SELECTOR, "body")
            //   await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
            // }
            // {
            //   const element = await driver.findElement(By.css(".SitewideBanner"))
            //   await driver.actions({ bridge: true }).moveToElement(element).perform()
            // }
        }
        catch(err){
            throw err;
        }
    }
    async ClickOnMyAccountFromMoreMenu()
    {
        try{
            await driver.findElement(By.css(WayPageElemets.myAccountCSS)).click()
        }
        catch(err){
            throw err;
        }
    }

    async ClickOnWayFairHeader()
    {
        try{
            await driver.findElement(By.css(WayPageElemets.wayFairIconCss)).click()
        }
        catch(err){
            throw err;
        }
    }

} 

module.exports = new WayHomePage();