
const { expect } = require('chai');

const WayFairPageobj = require('../PageObjects/wayHomePage');

const LoginPageobj = require('../PageObjects/LoginPage');

describe('Go to Rate Home Page and verify header', function(){
    this.timeout(3000000);
    beforeEach(async function(){
        //await RatePageobj.configerBrowserScreen();
        await WayFairPageobj.writeUrl();
        await WayFairPageobj.configerBrowserScreen();
    })

    afterEach(async function() {
        await WayFairPageobj.quitBrowser();
    })

    it('Make sure Login Page displyed from create account menu in More tab', async function(){

        await WayFairPageobj.verifyTitle('Wayfair.com - Online Home Store for Furniture, Decor, Outdoors & More');
        
        await WayFairPageobj.ClickOnWayFairMoreIcon();

        await WayFairPageobj.ClickOnMyAccountFromMoreMenu()

        await LoginPageobj.FocusandWritePasswordOnLogin();

        await LoginPageobj.FocusandWritePasswordOnLogin();

    })

})