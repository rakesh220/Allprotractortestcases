describe('themes color changeing', function() {
    //1) Themes color changeing
    it('themes color changeing', function() {
      protractor.loginHelpers.Login();
    element(by.xpath('//*[@id="navbar"]/ul/li[6]/a/i')).click();
    browser.driver.sleep(6000);
    element(by.xpath('//*[@id="prefSettings"]/div/div/div[2]/div/div/div/div[1]/ul/li[4]/a')).click();
    browser.driver.sleep(6000);
    element(by.xpath('//*[@id="theme"]/form/div/div/div[1]/div[1]/label')).click();
    browser.driver.sleep(6000);
    element(by.xpath('//*[@id="theme"]/form/div/div/div[1]/div[2]/div/label')).click();
    browser.driver.sleep(6000);
    element(by.xpath('//*[@id="theme"]/form/div/div/div[2]/div[1]/label')).click();
    browser.driver.sleep(6000);
    element(by.xpath('//*[@id="theme"]/form/div/div/div[2]/div[2]/div/label')).click();
    browser.driver.sleep(6000);
    element(by.xpath('//*[@id="theme"]/form/div/div/div[3]/div/label')).click();
    browser.driver.sleep(6000);
    element(by.xpath('//*[@id="theme"]/form/div/div/div[4]/div/label')).click();
    browser.driver.sleep(6000);
    element(by.xpath('//*[@id="theme"]/form/div/div/div[5]/div/label')).click();
    browser.driver.sleep(6000);
    element(by.xpath('//*[@id="prefSettings"]/div/div/div[3]/button[2]')).click();
    browser.driver.sleep(9000);
    element(by.xpath('//*[@id="prefSettings"]/div/div/div[3]/button[1]')).click();
    browser.driver.sleep(9000);
    protractor.loginHelpers.Logout();
    }); 
    







    
    


});
