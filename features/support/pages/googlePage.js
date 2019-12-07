const { Selector } = require('testcafe');

exports.google = {
  url: function () {
    return 'https://www.google.co.uk/';
  },

  logo: function () {
    return Selector('img[alt=Google]').with({ boundTestRun: testController });
  },
  searchField: function () {
    return Selector('input[aria-label=Search]').with({ boundTestRun: testController });
  },
  searchByVoice: function () {
    return Selector('div[aria-label="Search by voice"]').with({ boundTestRun: testController });
  },
  googleSearchBtn: function () {
    return Selector('input[aria-label="Google Search"]').with({ boundTestRun: testController });
  },
  feelingLuckyBtn: function () {
    return Selector('input[name=btnI]').with({ boundTestRun: testController });
  },
};