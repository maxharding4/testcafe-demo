const { Given, When, Then } = require('cucumber');
const googlePage = require('../support/pages/googlePage');

Then(/^the Google logo is present$/, async function () {
  await testController.expect(googlePage.google.logo().visible).ok();
});

Then(/^the Google search field is present$/, async function () {
  await testController.expect(googlePage.google.searchField().visible).ok({ timeout: 5000 });
});

Then(/^the Google microphone is present$/, async function () {
  await testController.expect(googlePage.google.searchByVoice().visible).ok({ timeout: 5000 });
});

Then(/^the Google search button is present$/, async function () {
  await testController.expect(googlePage.google.googleSearchBtn().nth(1).visible).ok({ timeout: 5000 });
});

Then(/^the Google I'm feeling lucky button is present$/, async function () {
  await testController.expect(googlePage.google.feelingLuckyBtn().nth(1).visible).ok({ timeout: 5000 });
});

When(/^I enter the text "([^"]*)?" into the search field$/, async function (text) {
  await testController
    .expect(googlePage.google.searchField().visible).ok({ timeout: 5000 })
    .typeText(googlePage.google.searchField(), text);
});

When(/^I select the search button$/, async function () {
  await testController.click(googlePage.google.googleSearchBtn());
});

Then(/^the search field contains the text "([^"]*)?"$/, async function (text) {
  await testController
    .expect(googlePage.google.searchField().visible).ok({ timeout: 5000 })
    .expect(googlePage.google.searchField().value).eql(text);
});