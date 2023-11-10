const { expect } = require('@wdio/globals')
const HomePage = require('../pageobjects/home.page')
const ProductPage = require('../pageobjects/product.page')
const CartPage = require('../pageobjects/cart.page')


describe('demo app', () => {
    it('should sign up user', async () => {
        await HomePage.open("")

        await HomePage.signupUser("pruebaalejandro20231109-2", "password")
        
      
    })
    it('should log in', async () => {
        await HomePage.open("")

        await HomePage.loginUser("pruebaalejandro20231109-2", "password")
    })
    it('should add laptop to cart', async () => {
       await HomePage.selectLaptop()
        await browser.pause(5000)
        await ProductPage.addToCart()
    })

    it('cart should contain items', async () => {
         await CartPage.open("cart.html")
         await CartPage.validateCartNotEmpty()
     })


    it('should log out', async () => {
        await HomePage.logoutUser()
    })
    
})

