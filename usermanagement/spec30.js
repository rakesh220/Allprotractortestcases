describe('User Management Test Cases', function() {
    it('user status gry color ', function() {
      browser.get(browser.params.url);
      browser.waitForAngularEnabled(false);
    element(by.xpath('//*[@id="Username"]')).sendKeys("rakesh");
    element(by.id("Password")).sendKeys("rakesh220");
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(20000);
    element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
    browser.driver.sleep(10000);
    element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/ul/li[2]/a')).click();
    browser.driver.sleep(10000);
element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
browser.driver.sleep(5000);
   element(by.linkText('Signout')).click();
     browser.driver.sleep(5000);
    });

    });