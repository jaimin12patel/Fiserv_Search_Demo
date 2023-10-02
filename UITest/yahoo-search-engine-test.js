let { assert } = require('chai');
let Data = require('../TestData/search_data.json');
let YahooSearchPage = require('../PageObjects/yahoo-search-page');
let BasePage = require('../BasePage');


describe('Go to Yahoo Search and Validate functionality', function(){
    this.timeout(300000);
    beforeEach(async function(){
        await new BasePage().writeUrl();
        await new BasePage().configureBrowserScreen()
    })

    afterEach(async function() {
        await new BasePage().quitBrowser();
    })

    it('Alex should be able to search via yahoo search engine', async function(){
        await YahooSearchPage.verifyYahooSearchEngineTitle(Data.yahoo_search_engine_title);
        assert.isTrue(await YahooSearchPage.validateYahooLogoDisplayed());
        await YahooSearchPage.searchOnTheSearchBarAndHitEnter(Data.fiserv_input);
        await YahooSearchPage.clickOnTheFistResult();
        //assert.isTrue(await YahooSearchPage.validateFiservImageDisplayed());
    })

})