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
      .pause(2000)
      .click('div[title="ENG4UR-E120-English (ENG4UR)-Hobbins - EL_1617__OTH_ENG4UR-836265_E120_ELO"]')
      .pause(5000)
      .useXpath()
      .assert.containsText('//*[@id="z_k_c"]/li[1]/a/div/div/div/div[3]/div/span', 'St. Nicholas Orientation')
      .pause(31000)
      .refresh()
      .pause(5000)
      .end();
  }
};
