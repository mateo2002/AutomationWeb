const { $, browser ,driver} = require('@wdio/globals')
const Page = require('./page');

class ProductPage extends Page {

    get addToCartButton() {
        return $("#tbodyid > div.row > div > a")
    }

    async addToCart() {
        (await this.addToCartButton).click()
        await browser.waitUntil(() => browser.isAlertOpen())
        await browser.acceptAlert()
    }
}

module.exports=new ProductPage()