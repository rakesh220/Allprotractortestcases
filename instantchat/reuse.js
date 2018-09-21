exports.Login= function () {
    browser.get(browser.params.url);
    browser.waitForAngularEnabled(false);
  element(by.id("Username")).sendKeys("rakesh");
  element(by.id("Password")).sendKeys("rakesh");
  element(by.buttonText("Sign In")).click();
  browser.driver.sleep(15000);
  //element(by.id('userId79')).click();
  browser.actions().mouseMove(element(by.id('leftscroll'))).perform();
  browser.driver.sleep(5000);
    var value = browser.executeScript("return $('.col-md-3.col-lg-2.leftBar.scrollbar.hidden-sm.hidden-xs.noselect').scrollTop(10000);");
  browser.driver.sleep(15000);
  element(by.xpath('//*[@id="leftscroll"]/ul[3]/li[144]/div/a')).click();
  browser.driver.sleep(8000);
};
exports.Logout = function () {
    element(by.className('fa fa-user-circle dropdown-toggle font3x cur')).click();
    browser.driver.sleep(4000);
    element(by.linkText('Signout')).click();
    browser.driver.sleep(4000);
};
exports.TestLogin= function () {
    browser.get(browser.params.url);
    browser.waitForAngularEnabled(false);
  element(by.id("Username")).sendKeys("nagaraju");
  element(by.id("Password")).sendKeys("nag");
  element(by.buttonText("Sign In")).click();
  browser.driver.sleep(50000);
  browser.waitForAngularEnabled(false);
  element(by.id(browser.params.testuserid)).click();
  browser.driver.sleep(30000);
};
exports.TestLogout = function () {
    element(by.className('fa fa-user-circle dropdown-toggle font3x cur')).click();
    browser.driver.sleep(4000);
    element(by.linkText('Signout from AAIL')).click();
    browser.driver.sleep(4000);
};