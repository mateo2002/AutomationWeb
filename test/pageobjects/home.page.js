const { $, browser ,driver} = require('@wdio/globals')
const Page = require('./page');

class HomePage extends Page {

   
    async displaySignupDialog() {
        await this.signUpLink.click()
        await expect(this.signUpModal).toBeDisplayed()
    }

    async displayloginDialog() {
        await this.loginLink.click()
        await expect(this.loginModal).toBeDisplayed()
    }

    async signupUser(username, password) {
        await this.displaySignupDialog()
        await this.signupUsername.setValue(username)
        await this.signupPassword.setValue(password)
        await this.signupButton.click()
        await browser.waitUntil(() => browser.isAlertOpen())
        await browser.acceptAlert()

    }

    async loginUser(username, password) {
        await this.displayloginDialog()
        await this.loginUsername.setValue(username)
        await this.loginPassword.setValue(password)
        await this.loginButton.click()
        await expect(this.logoutLink).toBeDisplayed()
        // await browser.waitUntil(() => this.nameOfUser.getText() == `Welcome ${username}`)

    } 
    async logoutUser() {
        (await this.logoutLink).click()
        await expect(this.loginLink).toBeDisplayed()
       
    }

    async viewLaptops() {
        (await this.laptopsLink).click()
        await browser.pause(5000)
    }

    async selectLaptop() {
        await this.viewLaptops()
        await this.firstProductLink.click()
        await browser.pause(5000)
    }
}

module.exports = new HomePage()