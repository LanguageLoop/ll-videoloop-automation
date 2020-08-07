When(/^I select language "(.*)"$/, function(language){
    browser.pause(2000)
    createRequestPage.languageDropdown.click()
    browser.pause(2000)
   // browser.keys(language)
   //driver.sendKeys("ARABIC")'
   createRequestPage.dropdownWheel.addValue(language)
   createRequestPage.wheelDoneButton.click()

   
})

When(/^I select gender "(.*)"$/,function(gender){
    switch(gender)
    {
        case "Male":
            createRequestPage.maleGender.click()
            break
        case "Female":
            createRequestPage.femaleGender.click()
            break
        case "Any":
            createRequestPage.anyGender.click()
            break
    }
})

When(/^I select duration "(.*)","(.*)"$/, function(hours,minutes){
    createRequestPage.durationHoursDropdown.click()
    browser.pause(2000)
    createRequestPage.dropdownWheel.addValue((hours+" hours"))
    createRequestPage.wheelDoneButton.click()
 
    createRequestPage.durationMinutesDropdown.click()
    browser.pause(1000)
    createRequestPage.dropdownWheel.addValue((minutes+" minutes"))
    createRequestPage.wheelDoneButton.click()
    
})

When(/^I enter nes name "(.*)"$/, function(name){
    createRequestPage.nesNameInput.click()
    createRequestPage.nesNameInput.setValue(name)
})

When(/^I enter nes external "(.*)"$/, function(external){
    createRequestPage.nesExternalInput.click()
    createRequestPage.nesExternalInput.setValue(external)
})

When(/^I enter note "(.*)"$/, function(note){
    createRequestPage.noteForInterpreterInput.click()
    createRequestPage.noteForInterpreterInput.setValue(note)
})

When(/^I click createrequest button$/, function(){
    createRequestPage.createRequestButton.click()
})

Then(/^I verify the request is created successfully$/, function(){
    chai.expect(createRequestPage.successMessage.waitForExist(5000)).to.be.true
})