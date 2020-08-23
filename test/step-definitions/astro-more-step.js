const { Given, When, Then } = require('cucumber');
const AstroPage =  require('../page-object/astro.page');

Given(/^I am on the astro-best page$/, () =>  {
    browser.url("/astro-best");
    browser.pause(5000);
});

Then(/^I click on More button till the last page$/, () =>  {
    let flag=true;

    const moreBtn=browser.$("//*[text()='more']");
    
    while(flag==true)
    {
        moreBtn.click();
        browser.pause(10000);
        flag=moreBtn.isDisplayed();
        
    }
    
    browser.pause(5000);
});
