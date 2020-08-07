
module.exports ={
    get requestNewButton()
    {
        return $('[name="Request New"]')
    },

    get notificationsButton()
    {
        return $('[name="Notifications"]')
    },

    get settingsButton()
    {
        return $('[name="Settings"]')
    },

    get homeButton()
    {
        return $('[name="Home"]')
    },

    get prebookedButton()
    {
        return $('[name="Pre-Booked"]')
    },

    get asapButton()
    {
        return $('//*[contains(@name,"ASAP Valid for 60 mins")]')
    }
}