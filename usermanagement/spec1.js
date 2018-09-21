describe('User Management Test Cases', function() {
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
 
});
