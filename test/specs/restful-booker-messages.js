describe('Restful Booker Messages', ()=>{
    it('Front page should be displayed correctly', async () => {
        await browser.url(`https://automationintesting.online/`)
        await browser.$('//*[text()="Let me hack!"]').click()

        await expect(browser.$('.hotel-logoUrl')).toBeExisting();
        await expect(browser.$('h2=Rooms')).toBeExisting();
        await expect(browser.$('//*[@id="name"]')).toBeExisting();
        await expect(browser.$('//*[@id="email"]')).toBeExisting();
        await expect(browser.$('//*[@id="phone"]')).toBeExisting();
        await expect(browser.$('//*[@id="subject"]')).toBeExisting();
        await expect(browser.$('//*[@id="description"]')).toBeExisting();
        await expect(browser.$('button[id="submitContact"]')).toBeExisting();
    })

    it('Should be able to submit message', async () => {
        await browser.$('//*[@id="name"]').setValue("TestName")
        await browser.$('//*[@id="email"]').setValue("testemail@email.com")
        await browser.$('//*[@id="phone"]').setValue("011111111111111")
        await browser.$('//*[@id="subject"]').setValue("TestSubject")
        await browser.$('//*[@id="description"]').setValue("This is a new test message")
        await browser.$('button[id="submitContact"]').click()

        await expect(browser.$('h2=Thanks for getting in touch TestName!')).toBeExisting();
    })

    it('Should be able to view submitted message', async () => {
        await browser.url(`https://automationintesting.online/#/admin`)
        await browser.$('#username').setValue("admin")
        await browser.$('#password').setValue("password")
        await browser.$('button[type="submit"]').click()

        await expect(browser.$('//*[@id="root"]/div/nav/div[3]/ul/li[1]/a')).toBeExisting();
        await browser.$('//*[@id="root"]/div/nav/div[3]/ul/li[1]/a').click();

        await browser.$('//*[@id="message1"]').click()
        await expect(browser.$('p=From: TestName')).toBeExisting();
        await expect(browser.$('p=Email: testemail@email.com')).toBeExisting();
        await expect(browser.$('p=This is a new test message')).toBeExisting();
        await expect(browser.$('p=Phone: 011111111111111')).toBeExisting();
    })

    it('Should be able to delete messages', async () => {
        await browser.url(`https://automationintesting.online/#/admin`)
        await expect(browser.$('//*[@id="root"]/div/nav/div[3]/ul/li[1]/a')).toBeExisting();
        await browser.$('//*[@id="root"]/div/nav/div[3]/ul/li[1]/a').click();

        await expect(browser.$('//*[@id="message1"]')).toBeExisting();
        await browser.$('//*[@id="message1"]/div[3]/span').click()
        await expect(browser.$('//*[@id="message1"]')).not.toBeExisting()
    })
})


