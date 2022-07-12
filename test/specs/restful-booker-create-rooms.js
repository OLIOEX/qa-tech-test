describe('Restful Booker Create Rooms', ()=>{

    it('Should be able to view submitted message', async () => {
        await browser.url(`https://automationintesting.online/#/admin`)
        await browser.$('#username').setValue("admin")
        await browser.$('#password').setValue("password")
        await browser.$('button[type="submit"]').click()

        
    })

})