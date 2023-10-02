
let { assert } = require('chai');
let Data = require('../TestData/search_data.json');
let GoogleSearchPage = require('../PageObjects/google-search-page');
let BasePage = require('../BasePage');

describe('Go to Google Search and Validate functionality', function(){
    this.timeout(300000);
    beforeEach(async function(){
        await new BasePage().writeUrl();
        await new BasePage().configureBrowserScreen()
    })

    afterEach(async function() {
        await new BasePage().quitBrowser();
    })

    it('Alex should be able to search via google search engine', async function(){
        await GoogleSearchPage.verifyGoogleSearchEngineTitle(Data.google_search_engine_title);
        assert.isTrue(await GoogleSearchPage.validateGoogleImageDisplayed());
        await GoogleSearchPage.searchOnTheSearchBarAndClickSearch(Data.fiserv_input);
        await GoogleSearchPage.clickOnTheFistResult();
        assert.isTrue(await GoogleSearchPage.validateFiservImageDisplayed());
    })

})