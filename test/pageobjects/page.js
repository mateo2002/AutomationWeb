const { browser } = require('@wdio/globals')

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {

    get signUpLink () {
        return $("#signin2")
    }

    get signUpModal () {
        return $("#signInModal")
    }

    get signupUsername() {
        return $("#sign-username")
    }

    get signupPassword() {
        return $("#sign-password")
    }

    get signupButton() {
        return $("#signInModal > div > div > div.modal-footer > button.btn.btn-primary")
    }

    get loginLink() {
        return $("#login2")
    } 
    
    get logoutLink() {
        return $("#logout2")
    }
    get loginModal () {
        return $("#logInModal")
    }

    get loginUsername() {

        return $("#loginusername")
    }

    get loginPassword() {
        return $("#loginpassword")
    }

    get loginButton() {
        return $("#logInModal > div > div > div.modal-footer > button.btn.btn-primary")
    }

    get nameOfUser() {
        return $("#nameofuser")
    }

    get laptopsLink() {
        return $("#contcont > div > div.col-lg-3 > div > a:nth-child(3) ")
    }

    get firstProductLink() {
        return $("#tbodyid > div:nth-child(1) > div > a")
    }
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`https://www.demoblaze.com/${path}`)
    }
}
