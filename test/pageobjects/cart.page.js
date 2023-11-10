const { $, browser ,driver} = require('@wdio/globals')
const Page = require('./page');

class CartPage extends Page {

    get firstItem() {
        return $("#tbodyid > tr:nth-child(1)")
    }


 async validateCartNotEmpty() {
    await expect(this.firstItem).toBeExisting()
 }
}

module.exports=new CartPage()