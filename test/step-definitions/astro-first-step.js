const { Given, When, Then } = require('cucumber');
const AstroPage= require('../page-object/astro.page');

Given(/^I open page with the url astro-first$/, () => {
    browser.url('/astro-first');
    browser.maximizeWindow();
    browser.pause(5000);
  
});

Then(/^I can see the astro-first webpage with content$/, () => {
    AstroPage.contentCheck;
});