describe('Technical Excercise #1', () => {
    it('Should select all small sizes and checkout', () => {
        browser.url('https://react-shopping-cart-67954.firebaseapp.com/');
        browser.maximizeWindow()
        const sizeSmall = $('.checkmark=S');
        sizeSmall.click()
        const selectShirt1 = $('.shelf-item=Cat Tee Black T-Shirt');
        selectShirt1.click()
        const selectShirt2 = $('.shelf-item=Crazy Monkey Black T-Shirt');
        selectShirt2.click()
        browser.saveScreenshot('Screenshots/TE#1/test.png')
        const clickCheckout = $('.buy-btn=Checkout');
        clickCheckout.click()
        browser.acceptAlert()
        browser.saveScreenshot('Screenshots/TE#1/Checkout.png')    
    });
});
