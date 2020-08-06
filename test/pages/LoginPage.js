module.exports = {

    
    get usernameInput()
    { 
        return $('//*[@type="XCUIElementTypeTextField"]/..')
    },
        
    get passwordInput()
    { 
        return $('//*[@type="XCUIElementTypeSecureTextField"]') 
    },

    get loginButton()
    { 
         return $('[name="Login"]') 
    },

    get allowButton()
    {
        return $('[name="Allow"]')
    }

}
