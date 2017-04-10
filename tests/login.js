module.exports = {
  'Login test': function (client) {
    client
      .url('https://ocsb.elearningontario.ca/d2l/login')
      .useXpath()
      .setValue('//*[@id="userName"]', 'YOUR LOGIN')
      .setValue('//*[@id="password"]', 'YOUR  PASSWORD')
      .pause(500)
      .useCss()
      .click('a[role="button"]')
      .pause(5000)
      .click('a[role="button"]')
      .pause(31000)
      .refresh()
      .pause(5000)
      .end();
  }
};
