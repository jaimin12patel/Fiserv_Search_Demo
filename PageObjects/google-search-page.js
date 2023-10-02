
let { By } = require('selenium-webdriver');
let BasePage = require('../BasePage');


const GOOGLE_IMAGE = By.id(`hplogo`);
const GOOGLE_SEARCH_BAR = By.name(`q`);
const GOOGLE_SEARCH_BUTTON = By.name(`btnK`);
const FISERV_RESULT = By.xpath(`//*[@id="rso"]//span/a/div`);
const FISERV_LOGO = By.xpath(`//*[@id="page-77f7783654"]//nav/div[1]/a/img`);



class GoogleSearchPage extends BasePage
{
    async verifyGoogleSearchEngineTitle(titleText)
    {
       await this.validateTheTitle(titleText);
    }

    async validateGoogleImageDisplayed()
    {
        
        try{
            return await this.isElementDisplayed(GOOGLE_IMAGE);
        }
        catch(err)
        {
            throw err;
        }
    }

    async searchOnTheSearchBarAndClickSearch(inputText)
    {
        try{
            await this.writeOnTextBox(GOOGLE_SEARCH_BAR, inputText);
            await this.clickOnElement(GOOGLE_SEARCH_BUTTON);
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
            return await this.isElementDisplayed(FISERV_LOGO);
        }
        catch(err)
        {
            throw err;
        }
    }

} 

module.exports = new GoogleSearchPage();