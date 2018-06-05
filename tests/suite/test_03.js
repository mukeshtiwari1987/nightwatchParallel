var request = require("request");

module.exports = {
  'Google\'s Search Functionality' : function (browser) {
    browser
      .url('https://www.google.com/ncr')
      .waitForElementVisible('body', 1000)
      .pause(1000)
      .setValue('input[type=text]', 'BrowserStack\n')
      .pause(1000);
      browser.session(function(session) {
        console.log(session.sessionId);
        request({uri: "https://" + process.env.BROWSERSTACK_USERNAME + ":" + process.env.BROWSERSTACK_ACCESS_KEY + "@api.browserstack.com/automate/sessions/" + session.sessionId + ".json", method:"PUT", form:{"status":"failed","reason":""}})
      });
      browser
      .assert.title('BrowserStack - Google Search')
      .end();
  }
};
