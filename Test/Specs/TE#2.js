describe('Technical Excercise #2', () => {
    it('Lowest Price Shirt and Checkout', () => {
        browser.url('https://react-shopping-cart-67954.firebaseapp.com/');
        browser.maximizeWindow()
        $('div > select').selectByVisibleText('Lowest to highest')
        browser.pause(1000)
        $('div.shelf-container > div:nth-child(2)').click()
        browser.saveScreenshot('Screenshots/TE#2/Test - Lowest2Highest.png')
        browser.pause(1000)
        $('div > select').selectByVisibleText('Highest to lowest')
        browser.pause(1000)
        $('div.shelf-container > div:nth-child(17)').click()
        browser.saveScreenshot('Screenshots/TE#2/Test - Highest2Lowest.png')
    });
});
