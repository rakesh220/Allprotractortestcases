describe('User Management Test Cases', function() {
    it('user can see other user information', function() {
      browser.get(browser.params.url);
      browser.waitForAngularEnabled(false);
    element(by.xpath('//*[@id="Username"]')).sendKeys("rakesh");
    element(by.id("Password")).sendKeys("rakesh220"); 
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(20000);
    browser.actions().mouseMove(element(by.id('leftscroll'))).perform();
      var value = browser.executeScript("return $('.col-md-3.col-lg-2.leftBar.scrollbar.hidden-sm.hidden-xs').scrollTop(10000);");
      browser.driver.sleep(8000);
    element(by.id('userIdrakesh')).click();
browser.driver.sleep(10000);    
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-topbar-innerleft/div/div/div[1]/div/div/div[1]/a/img')).click();
     browser.driver.sleep(10000);  
     element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
     browser.driver.sleep(4000);
     element(by.linkText('Signout')).click();
     browser.driver.sleep(4000);
       });
    });