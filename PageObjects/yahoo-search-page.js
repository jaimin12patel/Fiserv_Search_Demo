
let { By } = require('selenium-webdriver');
let BasePage = require('../BasePage');


const YAHOO_LOGO = By.id(`logo`);
const YAHOO_SEARCH_BAR = By.name(`p`);
const FISERV_RESULT = By.xpath(`//*[@id="web"]/ol/li[1]/div/div[1]/h3/a`);
const FISERV_LOGO = By.xpath(`//*[@id="page-77f7783654"]//nav/div[1]/a/img`);



class YahooSearchPage extends BasePage
{
    async verifyYahooSearchEngineTitle(titleText)
    {
       await this.validateTheTitle(titleText);
    }

    async validateYahooLogoDisplayed()
    {
        
        try{
            return await this.isElementDisplayed(YAHOO_LOGO);
        }
        catch(err)
        {
            throw err;
        }
    }

    async searchOnTheSearchBarAndHitEnter(inputText)
    {
        try{
            await this.writeTextBoxAndHitEnter(YAHOO_SEARCH_BAR, inputText);
        }
        catch(err){
            throw err;
        }
    }

    async clickOnTheFistResult()
    {
        try{
            await this.clickOnElement(FISERV_RESULT);
        }
        catch(err){
            throw err;
        }
    }

    async validateFiservImageDisplayed()
    {
        
        try{
            await this.switchToNewTab();
            return await this.isElementDisplayed(FISERV_LOGO);
        }
        catch(err)
        {
            throw err;
        }
    }

} 

module.exports = new YahooSearchPage();