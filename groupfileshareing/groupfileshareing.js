describe('One_to_one secure file shareing', function() {
  //-----------------folder protractor test cases-------------------------
  //1) Login user can see the folders/files screen
  it('Login user can see the folders/files screen', function() {
      protractor.loginHelpers.Login();
    element(by.xpath('//*[@id="navbar"]/ul/li[2]/a/i')).click();
    browser.driver.sleep(9000);
    protractor.loginHelpers.Logout();
    }); 
    //2)Login user can create folder
    it('Login user can create folder', function() {
      protractor.loginHelpers.Login();
    element(by.xpath('//*[@id="navbar"]/ul/li[2]/a/i')).click();
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[1]/div[1]/div/div[1]/button[2]')).click();
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[1]/div[1]/div/div[1]/ul/li[1]/a')).click();
    browser.driver.sleep(9000);
    element(by.id('foldernme')).sendKeys('TestFolder2');
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/aadhya-dynamic-modal/div/div/div[3]/button[2]')).click();
    browser.driver.sleep(15000);
    protractor.loginHelpers.Logout();
    }); 
    //3) user can rename the folder name
    it('user can rename the folder name', function() {
      protractor.loginHelpers.Login();
    element(by.xpath('//*[@id="navbar"]/ul/li[2]/a/i')).click();
    browser.driver.sleep(9000);
    element(by.className('fa fa-ellipsis-h')).click();
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/div/div[1]/ul/li[2]/a')).click();
    browser.driver.sleep(9000);
    element(by.name('newName')).clear();
    browser.driver.sleep(9000);
    element(by.name('newName')).sendKeys('New_folder1');
    browser.driver.sleep(9000);
    element(by.className('btn btn-primary cls-btn ')).click();
    browser.driver.sleep(15000);
    protractor.loginHelpers.Logout();
    }); 
      
          //6)user can download folder

   it('user can download', function() {
    protractor.loginHelpers.Login();
    element(by.xpath('//*[@id="navbar"]/ul/li[2]/a/i')).click();
    browser.driver.sleep(9000);
    element(by.className('fa fa-ellipsis-h')).click();
    browser.driver.sleep(9000);
    element(by.className('fa fa-download')).click();
    browser.driver.sleep(20000);
    protractor.loginHelpers.Logout();
    }); 
    //9) user can share folder to other user
    it('user can share folder to other user', function() {
      protractor.loginHelpers.Login();
    element(by.xpath('//*[@id="navbar"]/ul/li[2]/a/i')).click();
    browser.driver.sleep(9000);
    element(by.className('fa fa-ellipsis-h')).click();
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/div/div[1]/ul/li[9]/a')).click();
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/aadhya-dynamic-modal[2]/div/div/div[2]/div/div[2]/div[1]/input')).sendKeys('raheem');
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/aadhya-dynamic-modal[2]/div/div/div[2]/div/div[2]/div[2]/div[1]/ul/li/label')).click();
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/aadhya-dynamic-modal[2]/div/div/div[2]/div/div[2]/div[2]/div[1]/div/a')).click();
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/aadhya-dynamic-modal[2]/div/div/div[2]/div/div[4]/div/div/input')).click();
    browser.driver.sleep(9000);
    //date click
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/aadhya-dynamic-modal[2]/div/div/div[2]/div/div[4]/div/div/input')).sendKeys(12);
    browser.driver.sleep(5000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/aadhya-dynamic-modal[2]/div/div/div[2]/div/div[4]/div/div/input')).sendKeys(12);
    browser.driver.sleep(5000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/aadhya-dynamic-modal[2]/div/div/div[2]/div/div[4]/div/div/input')).sendKeys(2018);
    browser.driver.sleep(5000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/aadhya-dynamic-modal[2]/div/div/div[3]/button[2]')).click();
    browser.driver.sleep(9000);
    protractor.loginHelpers.Logout();
    });
 //8)user delete the folder
 it('user delete the folder', function() {
  protractor.loginHelpers.Login();
element(by.xpath('//*[@id="navbar"]/ul/li[2]/a/i')).click();
browser.driver.sleep(9000);
element(by.className('fa fa-ellipsis-h')).click();
browser.driver.sleep(9000);
element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/div/div[1]/ul/li[6]/a')).click();
browser.driver.sleep(15000);
protractor.loginHelpers.Logout();
}); 

  //-----------------------end ---------------------------------------------

  //------------------file shareing protractor test cases-------------------------
   //1) user can rename the file name
   it('user can rename the file name', function() {
      protractor.loginHelpers.Login();
    element(by.xpath('//*[@id="navbar"]/ul/li[2]/a/i')).click();
    browser.driver.sleep(9000);
    element(by.className('fa fa-ellipsis-h')).click();
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/div/div[1]/ul/li[2]/a')).click();
    browser.driver.sleep(9000);
    element(by.name('newName')).clear();
    browser.driver.sleep(9000);
    element(by.name('newName')).sendKeys('image1.jpg');
    browser.driver.sleep(9000);
    element(by.className('btn btn-primary cls-btn ')).click();
    browser.driver.sleep(15000);
    protractor.loginHelpers.Logout();
    }); 
    //2) user can preview   the file
    it('user can preview the file name', function() {
      protractor.loginHelpers.Login();
    element(by.xpath('//*[@id="navbar"]/ul/li[2]/a/i')).click();
    browser.driver.sleep(9000);
    element(by.className('fa fa-ellipsis-h')).click();
    browser.driver.sleep(9000);
    element(by.className('preview-btn')).click();
    browser.driver.sleep(9000);
    element(by.className('closeRt')).click();
    browser.driver.sleep(9000)
    protractor.loginHelpers.Logout();
    }); 
      

  //2) user can open  the file
    it('user can open the file name', function() {
      protractor.loginHelpers.Login();
    element(by.xpath('//*[@id="navbar"]/ul/li[2]/a/i')).click();
    browser.driver.sleep(9000);
    element(by.className('fa fa-ellipsis-h')).click();
    browser.driver.sleep(9000);
    element(by.className('open-btn')).click();
    browser.driver.sleep(9000);
    element(by.className('close cls-btn')).click();
    browser.driver.sleep(9000)
    protractor.loginHelpers.Logout();
    }); 
      
      //3)user can download file

   it('user can download a file', function() {
    protractor.loginHelpers.Login();
    element(by.xpath('//*[@id="navbar"]/ul/li[2]/a/i')).click();
    browser.driver.sleep(9000);
    element(by.className('fa fa-ellipsis-h')).click();
    browser.driver.sleep(9000);
    element(by.className('fa fa-download')).click();
    browser.driver.sleep(20000);
    protractor.loginHelpers.Logout();
    }); 






    
    //9)user can copy the file
   it('user can copy the file', function() {
      protractor.loginHelpers.Login();
    element(by.xpath('//*[@id="navbar"]/ul/li[2]/a/i')).click();
    browser.driver.sleep(9000);
    element(by.className('fa fa-ellipsis-h')).click();
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/div/div[1]/ul/li[8]/a')).click();
    browser.driver.sleep(10000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/aadhya-dynamic-modal[3]/div/div/div[2]/ul/li[5]/p')).click();
   browser.driver.sleep(10000);
   element(by.className('btn btn-primary cls-btn')).click();
   browser.driver.sleep(15000);
    protractor.loginHelpers.Logout();
    });
    //10)user can move the file
    it('user can move the file', function() {
      protractor.loginHelpers.Login();
    element(by.xpath('//*[@id="navbar"]/ul/li[2]/a/i')).click();
    browser.driver.sleep(9000);
    element(by.className('fa fa-ellipsis-h')).click();
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/div/div[1]/ul/li[7]/a')).click();
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/aadhya-dynamic-modal[3]/div/div/div[2]/ul/li[5]/p')).click();
   browser.driver.sleep(9000);
   element(by.className('btn btn-primary cls-btn')).click();
   browser.driver.sleep(15000);
    protractor.loginHelpers.Logout();
    }); 
    //9) user can share file to other user
    it('user can share file to other user', function() {
      protractor.loginHelpers.Login();
    element(by.xpath('//*[@id="navbar"]/ul/li[2]/a/i')).click();
    browser.driver.sleep(9000);
    element(by.className('fa fa-ellipsis-h')).click();
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/div/div[1]/ul/li[9]/a')).click();
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/aadhya-dynamic-modal[2]/div/div/div[2]/div/div[2]/div[1]/input')).sendKeys('raheem');
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/aadhya-dynamic-modal[2]/div/div/div[2]/div/div[2]/div[2]/div[1]/ul/li/label')).click();
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/aadhya-dynamic-modal[2]/div/div/div[2]/div/div[2]/div[2]/div[1]/div/a')).click();
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/aadhya-dynamic-modal[2]/div/div/div[2]/div/div[4]/div/div/input')).click();
    browser.driver.sleep(9000);
    //date click
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/aadhya-dynamic-modal[2]/div/div/div[2]/div/div[4]/div/div/input')).sendKeys(12);
    browser.driver.sleep(5000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/aadhya-dynamic-modal[2]/div/div/div[2]/div/div[4]/div/div/input')).sendKeys(12);
    browser.driver.sleep(5000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/aadhya-dynamic-modal[2]/div/div/div[2]/div/div[4]/div/div/input')).sendKeys(2018);
    browser.driver.sleep(5000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/aadhya-dynamic-modal[2]/div/div/div[3]/button[2]')).click();
    browser.driver.sleep(9000);
    protractor.loginHelpers.Logout();
    });
     //9) user can share file to other groups
     it('user can share file to other groups', function() {
      protractor.loginHelpers.Login();
    element(by.xpath('//*[@id="navbar"]/ul/li[2]/a/i')).click();
    browser.driver.sleep(9000);
    element(by.className('fa fa-ellipsis-h')).click();
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/div/div[1]/ul/li[9]/a')).click();
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/aadhya-dynamic-modal[2]/div/div/div[2]/div/div[2]/div[1]/input')).sendKeys('Testing GroupRoles');
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/aadhya-dynamic-modal[2]/div/div/div[2]/div/div[2]/div[2]/div[1]/ul/li/label')).click();
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/aadhya-dynamic-modal[2]/div/div/div[2]/div/div[2]/div[2]/div[1]/div/a')).click();
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/aadhya-dynamic-modal[2]/div/div/div[2]/div/div[4]/div/div/input')).click();
    browser.driver.sleep(9000);
    //date click
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/aadhya-dynamic-modal[2]/div/div/div[2]/div/div[4]/div/div/input')).sendKeys(11);
    browser.driver.sleep(5000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/aadhya-dynamic-modal[2]/div/div/div[2]/div/div[4]/div/div/input')).sendKeys(10);
    browser.driver.sleep(5000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/aadhya-dynamic-modal[2]/div/div/div[2]/div/div[4]/div/div/input')).sendKeys(2018);
    browser.driver.sleep(5000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/aadhya-dynamic-modal[2]/div/div/div[3]/button[2]')).click();
    browser.driver.sleep(9000);
    protractor.loginHelpers.Logout();
    });
     //8)user delete the file
 it('user delete the file', function() {
  protractor.loginHelpers.Login();
element(by.xpath('//*[@id="navbar"]/ul/li[2]/a/i')).click();
browser.driver.sleep(9000);
element(by.xpath('fa fa-ellipsis-h')).click();
browser.driver.sleep(9000);
element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/aadhya-file-operations/div/div[1]/ul/li[10]/a')).click();
browser.driver.sleep(10000);
protractor.loginHelpers.Logout();

}); 
  

//---------------------end file shareing ----------------------------------------


        
//------------------------searing------------------------------------------
            //15)user can search based on the filename

            it('user can search based on the filename', function() {
              protractor.loginHelpers.Login();
              element(by.xpath('//*[@id="navbar"]/ul/li[2]/a/i')).click();
              browser.driver.sleep(9000);
              element(by.xpath('//*[@id="search"]')).click();
              browser.driver.sleep(9000);
              element(by.xpath('//*[@id="search"]')).sendKeys('sample.pdf');
              browser.driver.sleep(1500);
              protractor.loginHelpers.Logout();
              }); 

              //16)user can search based on the folder
              it('user can search based on the folder', function() {
                protractor.loginHelpers.Login();
                element(by.xpath('//*[@id="navbar"]/ul/li[2]/a/i')).click();
                browser.driver.sleep(9000);
                element(by.xpath('//*[@id="search"]')).click();
                browser.driver.sleep(9000);
                element(by.xpath('//*[@id="search"]')).sendKeys('Testing1');
                browser.driver.sleep(1500);
                protractor.loginHelpers.Logout();
                }); 

                //17)user search search file type based search filter
                it('user search search file type based search filter', function() {
                  protractor.loginHelpers.Login();
                  element(by.xpath('//*[@id="navbar"]/ul/li[2]/a/i')).click();
                  browser.driver.sleep(9000);
                  element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[1]/div[2]/ul/li[3]/div/a/i')).click();
                  browser.driver.sleep(9000);
                  element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[1]/div[2]/ul/li[3]/div/div/form/div/div/div[4]/label/span')).click();
                  browser.driver.sleep(1500);
                  element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[1]/div[2]/ul/li[3]/div/div/form/div/div/div[1]/label/span')).click();
                  browser.driver.sleep(1500);
                  protractor.loginHelpers.Logout();
                  }); 

                  //18)user can see full information about folder/file

                  it('user can see full information about folder/file', function() {
                    protractor.loginHelpers.Login();
                    element(by.xpath('//*[@id="navbar"]/ul/li[2]/a/i')).click();
                    browser.driver.sleep(9000);
                    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[1]/div[2]/ul/li[2]/a/i')).click();
                    browser.driver.sleep(1500);
                    protractor.loginHelpers.Logout();
                    }); 
                    //19)user can see remaining free space
                    it('user can see remaining free space', function() {
                      protractor.loginHelpers.Login();
                    element(by.xpath('//*[@id="navbar"]/ul/li[2]/a/i')).click();
                    browser.driver.sleep(9000);
                    protractor.loginHelpers.Logout();
                    }); 

                     //15)user can search based on the filename by using file list

            it('user can search based on the filename', function() {
              protractor.loginHelpers.Login();
              element(by.xpath('//*[@id="navbar"]/ul/li[2]/a/i')).click();
              browser.driver.sleep(9000);
              element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[1]/div[2]/ul/li[2]/a/i')).click();
              browser.driver.sleep(9000);

              element(by.xpath('//*[@id="search"]')).click();
              browser.driver.sleep(9000);
              element(by.xpath('//*[@id="search"]')).sendKeys('sample.pdf');
              browser.driver.sleep(1500);
              protractor.loginHelpers.Logout();
              }); 

              //16)user can search based on the folder by useing folder list
              it('user can search based on the folder', function() {
                protractor.loginHelpers.Login();
                element(by.xpath('//*[@id="navbar"]/ul/li[2]/a/i')).click();
                browser.driver.sleep(9000);
                element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[1]/div[2]/ul/li[2]/a/i')).click();
                browser.driver.sleep(9000);
  
                element(by.xpath('//*[@id="search"]')).click();
                browser.driver.sleep(9000);
                element(by.xpath('//*[@id="search"]')).sendKeys('Testing1');
                browser.driver.sleep(1500);
                protractor.loginHelpers.Logout();
                }); 
                 //17)user search search file type based search filter by using folder list
                 it('user search search file type based search filter', function() {
                  protractor.loginHelpers.Login();
                  element(by.xpath('//*[@id="navbar"]/ul/li[2]/a/i')).click();
                  browser.driver.sleep(9000);
                  element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[1]/div[2]/ul/li[2]/a/i')).click();
                browser.driver.sleep(9000);
  
                  element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[1]/div[2]/ul/li[3]/div/a/i')).click();
                  browser.driver.sleep(9000);
                  element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[1]/div[2]/ul/li[3]/div/div/form/div/div/div[4]/label/span')).click();
                  browser.driver.sleep(1500);
                  element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[1]/div[2]/ul/li[3]/div/div/form/div/div/div[1]/label/span')).click();
                  browser.driver.sleep(1500);
                  protractor.loginHelpers.Logout();
                  }); 

                   //20)user can delete file list of files
                   it('user can see full information about folder/file', function() {
                    protractor.loginHelpers.Login();
                    element(by.xpath('//*[@id="navbar"]/ul/li[2]/a/i')).click();
                    browser.driver.sleep(9000);
                    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[1]/div[2]/ul/li[2]/a/i')).click();
                    browser.driver.sleep(4000);
                    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[3]/div/div/div/div/div/div/div[1]/aadhya-file-details-tileview/div/div/div[2]/div/div/input')).click();
                    browser.driver.sleep(4000);
                    element(by.className('fa fa-trash')).click();
                    browser.driver.sleep(4000);
                    protractor.loginHelpers.Logout();
                    }); 

    //4)login user can upload photo/video/documents/html content/excel
    it('login user can upload photo/video/documents/html content/excel', function() {
      protractor.loginHelpers.Login();
    element(by.xpath('//*[@id="navbar"]/ul/li[2]/a/i')).click();
    browser.driver.sleep(9000);
    //uploading png image
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[1]/div[1]/div/div[1]/button[2]')).click();
    browser.driver.sleep(9000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/div/div[1]/div[1]/div/div[1]/ul/li[3]/a')).click();
    browser.driver.sleep(9000);
    element(by.className('btn btn-default image-preview-input')).click();
    browser.driver.sleep(20000);
    element(by.xpath('/html/body/aadhya-root/app-chat-page/div/div/div/div/div/aadhya-filesharing/aadhya-dynamic-modal[2]/div/div/div[2]/div[1]/div[3]/input')).sendKeys('123');
    browser.driver.sleep(9000);
    element(by.className('btn btn-primary btn-md')).click();
    browser.driver.sleep(9000);
    protractor.loginHelpers.Logout();
    }); 

});
