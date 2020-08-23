const { Given, When, Then } = require('cucumber');
const AstroPage= require('../page-object/astro.page');

Given(/^I open page with the url astro-best$/, () => {
    browser.url('/astro-best');
    browser.maximizeWindow();
    browser.pause(5000);
  
});

Then(/^I can see the astro-best webpage with content$/, () => {
    AstroPage.contentCheck;
});