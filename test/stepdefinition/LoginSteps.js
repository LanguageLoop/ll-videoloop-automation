const LoginPage = require("../pages/LoginPage")

Given(/^The app is launched$/,function(){

    console.log("Launched")
    console.log("CURRENT &&&&&&&&&&******** "+process.cwd())
    loginPage.allowButton.click()
    browser.pause(5000)

    //browser.keys('Tab')
   loginPage.usernameInput.click()
    browser.pause(3000)
    loginPage.usernameInput.setValue("sarah@vloop.com")
    browser.pause(5000)

    
})
