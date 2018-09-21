describe('User Management Test Cases', function() {
 //1
  it('login with correct userid and password', function() {
browser.get(browser.params.url);
browser.waitForAngularEnabled(false);
  element(by.id("Username")).sendKeys("rakesh");
  element(by.id("Password")).sendKeys("rakesh");
  element(by.buttonText("Sign In")).click();
  browser.driver.sleep(9000);
  var a=element(by.xpath('//*[@id="loginform"]/p'));
  expect(a.isPresent()).toBe(false);
  browser.driver.sleep(5000);
 element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
browser.driver.sleep(5000);
element(by.linkText('Signout')).click();
browser.driver.sleep(5000);
  });
 //2
  it('login with invalid userid and valid password', function() { 
    browser.get(browser.params.url);
    browser.waitForAngularEnabled(false);
  element(by.id("Username")).sendKeys("rakesh11");
  element(by.id("Password")).sendKeys("rakesh");
  element(by.buttonText("Sign In")).click();
  browser.driver.sleep(15000);
  var a=element(by.xpath('//*[@id="loginform"]/p'));
  expect(a.isPresent()).toBe(true);
  browser.driver.sleep(5000);
  });
//3
  it('login with valid userid and invalid password', function() {
    browser.get(browser.params.url);
    browser.waitForAngularEnabled(false);
  element(by.id("Username")).sendKeys("rakesh");
  element(by.id("Password")).sendKeys("rakesh1");
  element(by.buttonText("Sign In")).click();
  browser.driver.sleep(10000);
  var a=element(by.xpath('//*[@id="loginform"]/p'));
  expect(a.isPresent()).toBe(true);
  browser.driver.sleep(5000);


});
//6
 it('user can change password', function() {
            browser.get(browser.params.url);
            browser.waitForAngularEnabled(false);
            element(by.id("Username")).clear();
  element(by.id("Password")).clear();
          element(by.xpath('//*[@id="Username"]')).sendKeys("rakesh");
          element(by.id("Password")).sendKeys("rakesh");
          element(by.buttonText("Sign In")).click();
          browser.driver.sleep(30000);
          element(by.xpath('//*[@id="navbar"]/ul/li[6]/a')).click();
      browser.driver.sleep(10000);   
      element(by.xpath('//*[@id="prefSettings"]/div/div/div[2]/div/div/div/div[1]/ul/li[3]/a')).click();
      browser.driver.sleep(10000);    
          element(by.xpath('//*[@id="oldPassword"]')).sendKeys("rakesh");
          element(by.xpath('//*[@id="newPassword"]')).sendKeys("rakesh220");
          element(by.xpath('//*[@id="confirmPassword"]')).sendKeys("rakesh220");
          element(by.xpath('//*[@id="prefSettings"]/div/div/div[3]/button[2]')).click();
           browser.driver.sleep(10000); 
           var a=element(by.xpath('//*[@id="prefSettings"]/div/div/div[3]/div'));
           expect(a.getText()).toBe('Success! Setting has been saved.');
           browser.driver.sleep(5000);
           element(by.xpath('//*[@id="prefSettings"]/div/div/div[3]/button[1]')).click();
           browser.driver.sleep(10000); 
           element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
           browser.driver.sleep(10000);
           element(by.linkText('Signout')).click();
           browser.driver.sleep(10000);
             });
//7
 it('cannot change password with old password enter wrong', function() {
        browser.get(browser.params.url);
        browser.waitForAngularEnabled(false);
        element(by.id("Username")).clear();
  element(by.id("Password")).clear();
      element(by.xpath('//*[@id="Username"]')).sendKeys("rakesh");
      element(by.id("Password")).sendKeys("rakesh220");
      element(by.buttonText("Sign In")).click();
      browser.driver.sleep(30000);
      element(by.xpath('//*[@id="navbar"]/ul/li[6]/a')).click();
    browser.driver.sleep(10000);   
    element(by.xpath('//*[@id="prefSettings"]/div/div/div[2]/div/div/div/div[1]/ul/li[3]/a')).click();
    browser.driver.sleep(10000);    
      element(by.xpath('//*[@id="oldPassword"]')).sendKeys("rakeshk");
      element(by.xpath('//*[@id="newPassword"]')).sendKeys("rakesh221");
      element(by.xpath('//*[@id="confirmPassword"]')).sendKeys("rakesh221");
      element(by.xpath('//*[@id="prefSettings"]/div/div/div[3]/button[2]')).click();
       browser.driver.sleep(10000); 
       var a=element(by.xpath('//*[@id="prefSettings"]/div/div/div[3]/div'));
       expect(a.getText()).toBe('Oops! Old password seems incorrect');
       browser.driver.sleep(5000);
       element(by.xpath('//*[@id="prefSettings"]/div/div/div[3]/button[1]')).click();
       browser.driver.sleep(5000); 
       element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
       browser.driver.sleep(5000);
       element(by.linkText('Signout')).click();
       browser.driver.sleep(5000);
         });
//8
 it('user cannot change password when newpassword and repeat password not same', function() {
        browser.get(browser.params.url);
        browser.waitForAngularEnabled(false);
        element(by.id("Username")).clear();
  element(by.id("Password")).clear();
      element(by.xpath('//*[@id="Username"]')).sendKeys("rakesh");
      element(by.id("Password")).sendKeys("rakesh220");
      element(by.buttonText("Sign In")).click();
      browser.driver.sleep(20000);
      element(by.xpath('//*[@id="navbar"]/ul/li[6]/a')).click();
    browser.driver.sleep(10000);   
    element(by.xpath('//*[@id="prefSettings"]/div/div/div[2]/div/div/div/div[1]/ul/li[3]/a')).click();
    browser.driver.sleep(10000);    
      element(by.xpath('//*[@id="oldPassword"]')).sendKeys("rakesh220");
      element(by.xpath('//*[@id="newPassword"]')).sendKeys("rakesh220");
      element(by.xpath('//*[@id="confirmPassword"]')).sendKeys("rakesh221");
      browser.driver.sleep(5000);
      expect(element(by.xpath('//*[@id="profile"]/form/p')).getText()).toBe('');
      browser.driver.sleep(5000);
      element(by.xpath('//*[@id="prefSettings"]/div/div/div[3]/button[2]')).click();
       browser.driver.sleep(5000); 
       element(by.xpath('//*[@id="prefSettings"]/div/div/div[3]/button[1]')).click();
       browser.driver.sleep(5000); 
       element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
       browser.driver.sleep(5000);
       element(by.linkText('Signout')).click();
       browser.driver.sleep(5000);
         });
//9
    it('user cannot login with old password', function() {
      browser.get(browser.params.url);
    element(by.id("Username")).sendKeys("rakesh");
    element(by.id("Password")).sendKeys("rakesh221");
    element(by.buttonText("Sign In")).click();
   browser.driver.sleep(30000);
    });
   //10
    it('user cannot login with new password', function() {
      browser.get(browser.params.url);
browser.waitForAngularEnabled(false);
  element(by.id("Username")).sendKeys("rakesh");
  element(by.id("Password")).sendKeys("rakesh220");
  element(by.buttonText("Sign In")).click();
  browser.driver.sleep(9000);
  var a=element(by.xpath('//*[@id="loginform"]/p'));
  expect(a.isPresent()).toBe(false);
  browser.driver.sleep(5000);
 element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
browser.driver.sleep(5000);
element(by.linkText('Signout')).click();
browser.driver.sleep(5000);
    });
//14
    it('user can set security questions', function() {
      browser.get(browser.params.url);
      browser.waitForAngularEnabled(false);
    element(by.xpath('//*[@id="Username"]')).sendKeys("rakesh");
    element(by.id("Password")).sendKeys("rakesh220");
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(30000);
    element(by.xpath('//*[@id="navbar"]/ul/li[6]/a')).click();
browser.driver.sleep(10000);
element(by.xpath('//*[@id="prefSettings"]/div/div/div[2]/div/div/div/div[1]/ul/li[3]/a')).click();
 browser.driver.sleep(10000);  
    element(by.xpath('//*[@id="profile"]/form/form/fieldset[2]/div/a')).click();
    browser.driver.sleep(10000); 
   element(by.name("questquestionOne")).$('[value="599d76f418450231573081fa"]').click();
   element(by.xpath('//*[@id="answerOne"]')).sendKeys("dog");
   element(by.name("questquestionTwo")).$('[value="599d76ef18450231573081f9"]').click();
   element(by.xpath('//*[@id="answerTwo"]')).sendKeys("madhu");
   element(by.xpath('/html/body/aadhya-root/aadhya-find-user/div/div/div/div/div[1]/form/div[3]/button')).click();
     browser.driver.sleep(10000);  
     element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
     browser.driver.sleep(5000);
     element(by.linkText('Signout')).click();
     browser.driver.sleep(5000);
       });
//15
    it('user canot set same security questions', function() {
      browser.get(browser.params.url);
      browser.waitForAngularEnabled(false);
    element(by.xpath('//*[@id="Username"]')).sendKeys("rakesh");
    element(by.id("Password")).sendKeys("rakesh220");
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(30000);
    element(by.xpath('//*[@id="navbar"]/ul/li[6]/a')).click();
browser.driver.sleep(10000);   
element(by.xpath('//*[@id="prefSettings"]/div/div/div[2]/div/div/div/div[1]/ul/li[3]/a')).click();
 browser.driver.sleep(10000);  
    element(by.xpath('//*[@id="profile"]/form/form/fieldset[2]/div/a')).click();
    browser.driver.sleep(10000);
   element(by.name("questquestionOne")).$('[value="599d76ef18450231573081f9"]').click();
   element(by.xpath('//*[@id="answerOne"]')).sendKeys("madhu");
   element(by.name("questquestionTwo")).$('[value="599d76ef18450231573081f9"]').click();
   element(by.xpath('//*[@id="answerTwo"]')).sendKeys("madhu");
   element(by.xpath('/html/body/aadhya-root/aadhya-find-user/div/div/div/div/div[1]/form/div[3]/button')).click(); 
     browser.driver.sleep(8000);  
     /*element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
     browser.driver.sleep(5000);
     element(by.linkText('Signout')).click();
     browser.driver.sleep(5000);*/
       });
//16
    it('user cannot set onw security question', function() {
      browser.get(browser.params.url);
      browser.waitForAngularEnabled(false);
    element(by.xpath('//*[@id="Username"]')).sendKeys("rakesh");
    element(by.id("Password")).sendKeys("rakesh220");
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(20000);
    element(by.xpath('//*[@id="navbar"]/ul/li[6]/a')).click();
browser.driver.sleep(10000); 
element(by.xpath('//*[@id="prefSettings"]/div/div/div[2]/div/div/div/div[1]/ul/li[3]/a')).click();
 browser.driver.sleep(10000);  
    element(by.xpath('//*[@id="profile"]/form/form/fieldset[2]/div/a')).click();
    browser.driver.sleep(10000);
   element(by.name("questquestionOne")).$('[value="599d76ef18450231573081f9"]').click();
   browser.driver.sleep(5000);  
   element(by.xpath('//*[@id="answerOne"]')).sendKeys("madhu");
   element(by.xpath('/html/body/aadhya-root/aadhya-find-user/div/div/div/div/div[1]/form/div[3]/button')).click();
     browser.driver.sleep(10000);  
       });
//19
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
//20
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
element(by.xpath('//*[@id="leftscroll"]/ul[3]/li[1]')).click();
browser.driver.sleep(8000);
element(by.xpath('//*[@id="leftscroll"]/div/span/button')).click();
browser.driver.sleep(8000);
element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
browser.driver.sleep(5000);
element(by.linkText('Signout')).click();
browser.driver.sleep(5000);
    });
//21
    it('user can remove another user', function() {
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
    element(by.id('userId91')).click();
    browser.driver.sleep(8000);
element(by.xpath('//*[@id="leftscroll"]/ul[3]/li[93]/div/span[2]/a/i')).click();
     browser.driver.sleep(8000);
     element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
     browser.driver.sleep(5000);
     element(by.linkText('Signout')).click();
     browser.driver.sleep(5000);
    });
//22
 it('user can see contact list scroll up and down', function() {
      browser.get(browser.params.url);
      browser.waitForAngularEnabled(false);
    element(by.id("Username")).sendKeys("rakesh");
    element(by.id("Password")).sendKeys("rakesh220");
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(30000);
    browser.actions().mouseMove(element(by.id('leftscroll'))).perform();
    browser.driver.sleep(10000);
      var value = browser.executeScript("return $('.col-md-3.col-lg-2.leftBar.scrollbar.hidden-sm.hidden-xs').scrollTop(10000);");
      browser.driver.sleep(8000);
   element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
  browser.driver.sleep(4000);
  element(by.linkText('Signout')).click();
  browser.driver.sleep(4000);
  
    });
//23
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
//24
it('dnd setting', function() {
      browser.get(browser.params.url);
      browser.waitForAngularEnabled(false);
    element(by.xpath('//*[@id="Username"]')).sendKeys("rakesh");
    element(by.id("Password")).sendKeys("rakesh220");
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(30000);
    element(by.xpath('//*[@id="navbar"]/ul/li[6]/a')).click();
browser.driver.sleep(10000); 
   // element(by.name("messageTone")).$('[value="messageToneName3"]').click();
    element(by.xpath('//*[@id="dispableTime"]')).click();
   browser.driver.sleep(4000);
    element(by.name("startTime")).$('[value="01:00 AM"]').click();
    browser.driver.sleep(4000);
    element(by.name("endTime")).$('[value="07:00 PM"]').click();
   browser.driver.sleep(4000);
    element(by.xpath('//*[@id="prefSettings"]/div/div/div[3]/button[2]')).click();
     browser.driver.sleep(20000);  
     element(by.xpath('//*[@id="prefSettings"]/div/div/div[3]/button[1]')).click();
     browser.driver.sleep(10000); 
     element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
     browser.driver.sleep(4000);
     element(by.linkText('Signout')).click();
     browser.driver.sleep(4000);
});
//25
 it('dnd setting every message ', function() {
      browser.get(browser.params.url);
      browser.waitForAngularEnabled(false);
    element(by.xpath('//*[@id="Username"]')).sendKeys("rakesh");
    element(by.id("Password")).sendKeys("rakesh220");
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(30000);
    element(by.xpath('//*[@id="navbar"]/ul/li[6]/a')).click();
browser.driver.sleep(10000); 
   element(by.id('radio1')).click();
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
//26
it('dnd setting every message ', function() {
      browser.get(browser.params.url);
      browser.waitForAngularEnabled(false);
    element(by.xpath('//*[@id="Username"]')).sendKeys("rakesh");
    element(by.id("Password")).sendKeys("rakesh220");
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(30000);
    element(by.xpath('//*[@id="navbar"]/ul/li[6]/a')).click();
browser.driver.sleep(10000); 
   element(by.id('radio2')).click();
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
//27
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
//28
    it('timezone setting', function() {
      browser.get(browser.params.url);
      browser.waitForAngularEnabled(false) 
    element(by.xpath('//*[@id="Username"]')).sendKeys("rakesh");
    element(by.id("Password")).sendKeys("rakesh220");
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(30000);
    element(by.xpath('//*[@id="navbar"]/ul/li[6]/a')).click();
    browser.driver.sleep(10000);
element(by.xpath('//*[@id="prefSettings"]/div/div/div[2]/div/div/div/div[1]/ul/li[3]/a')).click();
 browser.driver.sleep(10000);  
    element(by.id("timezone")).$('[value="(GMT -6:00) Central Time (US & Canada), Mexico City"]').click();
    browser.driver.sleep(10000);
    element(by.xpath('//*[@id="prefSettings"]/div/div/div[3]/button[2]')).click();
     browser.driver.sleep(10000);  
     element(by.xpath('//*[@id="prefSettings"]/div/div/div[3]/button[1]')).click();
     browser.driver.sleep(10000); 
     element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
     browser.driver.sleep(4000);
     element(by.linkText('Signout')).click();
     browser.driver.sleep(4000);
       });
//29
    it('user status green color ', function() {
      browser.get(browser.params.url);
      browser.waitForAngularEnabled(false);
    element(by.xpath('//*[@id="Username"]')).sendKeys("rakesh");
    element(by.id("Password")).sendKeys("rakesh220");
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(30000);
    element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
    browser.driver.sleep(10000);
    element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/ul/li[1]/a')).click();
    browser.driver.sleep(10000);
element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
browser.driver.sleep(10000);
   element(by.linkText('Signout')).click();
     browser.driver.sleep(10000);
    
    });
//30
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
//31
    it('user status red color ', function() {
      browser.get(browser.params.url);
      browser.waitForAngularEnabled(false);
    element(by.xpath('//*[@id="Username"]')).sendKeys("rakesh");
    element(by.id("Password")).sendKeys("rakesh220");
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(30000);
    element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
    browser.driver.sleep(10000);
    element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/ul/li[3]/a')).click();
    browser.driver.sleep(10000);
element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
browser.driver.sleep(10000);
   element(by.linkText('Signout')).click();
     browser.driver.sleep(10000);
    
    });
//32
      it('user status icon changeing ', function() {
    browser.get(browser.params.url);
    browser.waitForAngularEnabled(false);
  element(by.xpath('//*[@id="Username"]')).sendKeys("rakesh");
  element(by.id("Password")).sendKeys("rakesh220");
  element(by.buttonText("Sign In")).click();
  browser.driver.sleep(30000);
  element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
  browser.driver.sleep(10000);
  element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/ul/li[9]/a')).click();
  browser.driver.sleep(10000);
element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
browser.driver.sleep(10000);
 element(by.linkText('Signout')).click();
   browser.driver.sleep(10000);
  
  });
//33
    it('ringtone setting', function() {
      browser.get(browser.params.url);
      browser.waitForAngularEnabled(false);
    element(by.xpath('//*[@id="Username"]')).sendKeys("rakesh");
    element(by.id("Password")).sendKeys("rakesh220");
   // element(by.xpath('//*[@id="loginform"]/div[3]/button')).click();
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(30000);
    element(by.xpath('//*[@id="navbar"]/ul/li[6]/a')).click();
browser.driver.sleep(10000); 
    element(by.name("messageTone")).$('[value="messageToneName3"]').click();
    browser.driver.sleep(10000); 
    element(by.xpath('//*[@id="prefSettings"]/div/div/div[3]/button[2]')).click();
     browser.driver.sleep(10000);  
     element(by.xpath('//*[@id="prefSettings"]/div/div/div[3]/button[1]')).click();
     browser.driver.sleep(10000); 
     element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
     browser.driver.sleep(4000);
     element(by.linkText('Signout')).click();
     browser.driver.sleep(4000);
       }); 
//34
    it('set call rigtone', function() {
      browser.get(browser.params.url);
      browser.waitForAngularEnabled(false);
    element(by.xpath('//*[@id="Username"]')).sendKeys("rakesh");
    element(by.id("Password")).sendKeys("rakesh220");
   // element(by.xpath('//*[@id="loginform"]/div[3]/button')).click();
    element(by.buttonText("Sign In")).click();
    browser.driver.sleep(30000);
    element(by.xpath('//*[@id="navbar"]/ul/li[6]/a')).click();
browser.driver.sleep(10000); 
    element(by.name("callTone")).$('[value="ringtoneName2"]').click();
    browser.driver.sleep(10000); 
    element(by.xpath('//*[@id="prefSettings"]/div/div/div[3]/button[2]')).click();
     browser.driver.sleep(10000);  
     element(by.xpath('//*[@id="prefSettings"]/div/div/div[3]/button[1]')).click();
     browser.driver.sleep(10000); 
     element(by.xpath('//*[@id="navbar"]/ul/li[8]/a/i')).click();
     browser.driver.sleep(4000);
     element(by.linkText('Signout')).click();
     browser.driver.sleep(4000);
       }); 
});




























   
  });
//4
 
});
