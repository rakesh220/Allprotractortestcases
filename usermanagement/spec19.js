describe('User Management Test Cases', function() {
    it('User can search for other users in the current organization.', function() {
     browser.get(browser.params.url);
      browser.waitForAngularEnabled(false);
    element(by.xpath('//*[@id="Username"]')).sendKeys("rakesh");
    element(by.id("Password")).sendKeys("rakesh220"); 
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(30000);
    browser.actions().mouseMove(element(by.id('leftscroll'))).perform();
    browser.driver.sleep(10000);
      var value = browser.executeScript("return $('.col-md-3.col-lg-2.leftBar.scrollbar.hidden-sm.hidden-xs.noselect').scrollTop(10000);");
      browser.driver.sleep(9000);
    element(by.xpath('//*[@id="leftscroll"]/h4[3]/span[2]/a/i')).click();
    browser.driver.sleep(10000);
element(by.xpath('//*[@id="User"]')).sendKeys("sunil");
browser.driver.sleep(10000); 
//element(by.xpath('//*[@id="leftscroll"]/div/span/button')).click();
//browser.driver.sleep(10000); 

element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
browser.driver.sleep(10000);
element(by.linkText('Signout')).click();
browser.driver.sleep(10000);
    });
    });