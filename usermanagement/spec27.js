describe('User Management Test Cases', function() {

    it('dnd setting every message ', function() {
      browser.get(browser.params.url);
      browser.waitForAngularEnabled(false);
    element(by.xpath('//*[@id="Username"]')).sendKeys("rakesh");
    element(by.id("Password")).sendKeys("rakesh220");
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(30000);
    element(by.xpath('//*[@id="navbar"]/ul/li[6]/a')).click();
browser.driver.sleep(10000); 
   element(by.id('radio3')).click();
   browser.driver.sleep(8000);
    element(by.xpath('//*[@id="prefSettings"]/div/div/div[3]/button[2]')).click();
     browser.driver.sleep(20000);  
     element(by.xpath('//*[@id="prefSettings"]/div/div/div[3]/button[1]')).click();
     browser.driver.sleep(10000); 
     element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
     browser.driver.sleep(4000);
     element(by.linkText('Signout')).click();
     browser.driver.sleep(4000);
});
    });