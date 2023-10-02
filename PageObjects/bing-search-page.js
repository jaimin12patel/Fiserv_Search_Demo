
let { By } = require('selenium-webdriver');
let BasePage = require('../BasePage');


const BING_LOGO = By.id(`bLogo`);
const BING_SEARCH_BAR = By.name(`q`);
const FISERV_RESULT = By.xpath(`//*[@id="b_results"]/li[1]/div/div[1]`);
const FISERV_LINK_TEXT = By.linkText(`Financial Services Technology, Mobile Banking, Payments | Fiserv`);
const FISERV_LOGO = By.xpath(`//*[@id="page-77f7783654"]//nav/div[1]/a/img`);



class BingSearchPage extends BasePage
{
    async verifyBingSearchEngineTitle(titleText)
    {
       await this.validateTheTitle(titleText);
    }

    async validateBingLogoDisplayed()
    {
        
        try{
            return await this.isElementDisplayed(BING_LOGO);
        }
        catch(err)
        {
            throw err;
        }
    }

    async searchOnTheSearchBarAndHitEnter(inputText)
    {
        try{
            await this.writeTextBoxAndHitEnter(BING_SEARCH_BAR, inputText);
        }
        catch(err){
            throw err;
        }
    }

    async clickOnTheFistResult()
    {
        try{
            await this.clickOnElement(FISERV_LINK_TEXT);
        }
        catch(err){
            throw err;
        }
    }

    async validateFiservImageDisplayed()
    {
        
        try{
            return await this.isElementDisplayed(FISERV_LOGO);
        }
        catch(err)
        {
            throw err;
        }
    }

} 

module.exports = new BingSearchPage();