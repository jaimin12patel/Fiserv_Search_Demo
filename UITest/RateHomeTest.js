
const { expect } = require('chai');
const ratePage = require('../PageObjects/RatePage');
const RatePageobj = require('../PageObjects/RatePage');

describe('Go to Rate Home Page and verify header', function(){
    this.timeout(3000000);
    beforeEach(async function(){
        //await RatePageobj.configerBrowserScreen();
        await RatePageobj.writeUrl();
    })

    afterEach(async function() {
        await RatePageobj.quitBrowser();
    })

    it('Verify Header on Rate Home Page', async function(){

        await RatePageobj.verifyTitle('Mortgages, Loans, Home Buying & Refinance Mortgage Company | Guaranteed Rate');
        
        //var headerText = await RatePageobj.getHeaderText();
        //expect(headerText).to.equal('YOUR DREAM HOME IS POSSIBLE');

        await RatePageobj.ClickOnimPurchasingButton();
    })

})