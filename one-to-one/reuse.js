exports.Login= function () {
    browser.get(browser.params.url);
    browser.waitForAngularEnabled(false);
  element(by.id("Username")).sendKeys("nagaraju");
  element(by.id("Password")).sendKeys("nag");
  element(by.buttonText("Sign In")).click();
  browser.driver.sleep(30000);
  browser.switchTo().alert().accept();
  //let ale=browser.switchTo().alert();
//browser.driver.sleep(15000);
//ale.accept();
//browser.driver.sleep(10000);
  element(by.id('userId79')).click();
 // element(by.linkText('Testing GroupRoles')).click();
  browser.driver.sleep(15000);
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
  element(by.id(browser.params.testuserid)).click();
  browser.driver.sleep(30000);
};
exports.TestLogout = function () {
    element(by.className('fa fa-user-circle dropdown-toggle font3x cur')).click();
    browser.driver.sleep(4000);
    element(by.linkText('Signout from AAIL')).click();
    browser.driver.sleep(4000);
};