
const { expect } = require('chai');

const WayFairPageobj = require('../PageObjects/wayHomePage');

describe('Go to Rate Home Page and verify header', function(){
    this.timeout(3000000);
    beforeEach(async function(){
        //await RatePageobj.configerBrowserScreen();
        await WayFairPageobj.writeUrl();
    })

    afterEach(async function() {
        await WayFairPageobj.quitBrowser();
    })

    it('Verify Header on Rate Home Page', async function(){

        await WayFairPageobj.verifyTitle('Wayfair.com - Online Home Store for Furniture, Decor, Outdoors & More');
        
        var headerText = WayFairPageobj.verifyHeaderTitleisDisplayed()
        console.log('Verification.......' + headerText)
        expect(await headerText).to.equal('Wayfair');

        await WayFairPageobj.ClickOnWayFairMoreIcon();
    })

})