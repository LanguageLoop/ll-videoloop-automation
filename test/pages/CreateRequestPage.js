
module.exports ={

    get languageDropdown()
    {
        const selector = `value == 'Select Language'`
        return $(`-ios predicate string:${selector}`)
    },

    get dropdownWheel()
    {
        const selector = `type == "XCUIElementTypePickerWheel"`  
        return $(`-ios predicate string:${selector}`)
    },

    get wheelDoneButton()
    {
        return $('[name="Done"]')
    },

    get maleGender()
    {
        return $('[name="Male"]')
    },

    get femaleGender()
    {
        return $('[name="Female"]')
    },

    get anyGender()
    {
        return $('[name="Any"]')
    },

    get durationHoursDropdown()
    {
        const selector = `value == '0 hours'`
        return $(`-ios predicate string:${selector}`)
        //return $('[value="0 hours")]')
    },

    get durationMinutesDropdown()
    {
        const selector = `value == '30 minutes'`
        return $(`-ios predicate string:${selector}`)
      //  return $('//*[contains(@value,"minutes")]')
    },

    get nesNameInput()
    {
        return $$('//*[@type="XCUIElementTypeTextField"]/..')[0]
    },

    get nesExternalInput()
    {
        return $$('//*[@type="XCUIElementTypeTextField"]/..')[1]
    },

    get noteForInterpreterInput()
    {
        return $('//*[@type="XCUIElementTypeTextView"]/..')
    },

    get createRequestButton()
    {
        return $('[name="Create Request"]')
    },

    get successMessage()
    {
        return $(['name="Request Created Successfully'])
    },

    get dismissButton()
    {
        return $('[name="Dismiss"]')
    }
}
