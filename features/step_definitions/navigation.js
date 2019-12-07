const { Given, When, Then } = require('cucumber');
const googlePage = require('../support/pages/googlePage');

Given(/^I navigate to the "([^"]*)?" homepage$/, async function (url) {
  switch (url) {
    case ('Google'):
      await testController.navigateTo(googlePage.google.url());
      break
  }
});