
let { assert } = require('chai');
let Data = require('../TestData/search_data.json')
let BingSearchPage = require('../PageObjects/bing-search-page')
let BasePage = require('../BasePage');

describe('Go to Bing Search engine and Validate functionality', function(){
    this.timeout(300000);
    beforeEach(async function(){
        await new BasePage().writeUrl();
        await new BasePage().configureBrowserScreen()
    })

    afterEach(async function() {
        await new BasePage().quitBrowser();
    })

    it('Alex should be able to search via Bing search engine', async function(){
        await BingSearchPage.verifyBingSearchEngineTitle(Data.bing_search_engine_title);
        console.log(1);
        assert.isTrue(await BingSearchPage.validateBingLogoDisplayed());
        await BingSearchPage.searchOnTheSearchBarAndHitEnter(Data.fiserv_input);
        await BingSearchPage.clickOnTheFistResult();
        assert.isTrue(await BingSearchPage.validateFiservImageDisplayed());
    })


})