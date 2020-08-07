const LoginPage = require("../pages/LoginPage")

When(/^I login using "(.*)","(.*)"$/,function(username,password){
    //handle the allow notification confirmation
    try{
        loginPage.allowButton.waitForExist({timeout:6000})
        loginPage.allowButton.click()
      }
      catch(Err)
      {
      }
    
    browser.pause(2000)

    //enter username
   loginPage.usernameInput.click()
    browser.pause(2000)
    loginPage.usernameInput.setValue(username)
    browser.pause(2000)

    //enter password
    loginPage.passwordInput.click()
    browser.pause(2000)
    loginPage.passwordInput.setValue(password)
    //click login button
    loginPage.loginButton.click()

    // click the got it button on the welcome screen
    loginPage.gotItButton.click()

    //handle the microphone and camera usage confirmation 
    try{
        loginPage.micCameraOkButton.waitForExist({timeout:6000})
        loginPage.micCameraOkButton.click()
      }
      catch(Err)
      {
      }
    try{
        loginPage.micCameraOkButton.waitForExist({timeout:6000})
        loginPage.micCameraOkButton.click()
      }
      catch(Err)
      {
      }
    
})
