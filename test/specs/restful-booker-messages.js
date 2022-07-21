describe('Restful Booker Messages', () => {
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

    it('Should be able to add lots of messages', async () => {
        await browser.url(`https://automationintesting.online/`)

        //add message1
        await send("TestName1", "testemail1@email.com", "011111111111111", "TestSubject1", "This is a new test message 1", 'h2=Thanks for getting in touch TestName1!');
        await browser.url(`https://automationintesting.online/`)

        //add message2
        await send("TestName2", "testemail2@email.com", "011111111111111", "TestSubject2", "This is a new test message 2", 'h2=Thanks for getting in touch TestName2!');
        await browser.url(`https://automationintesting.online/`)

        //add message3
        await send("TestName2", "testemail2@email.com", "011111111111111", "TestSubject2", "This is a new test message 2", 'h2=Thanks for getting in touch TestName2!');
        await browser.url(`https://automationintesting.online/`)

        //add message4
        await send("TestName2", "testemail2@email.com", "011111111111111", "TestSubject2", "This is a new test message 2", 'h2=Thanks for getting in touch TestName2!');
        await browser.url(`https://automationintesting.online/`)

        //add message5
        await send("TestName2", "testemail2@email.com", "011111111111111", "TestSubject2", "This is a new test message 2", 'h2=Thanks for getting in touch TestName2!');
        await browser.url(`https://automationintesting.online/`)

        //add message6
        await send("TestName2", "testemail2@email.com", "011111111111111", "TestSubject2", "This is a new test message 2", 'h2=Thanks for getting in touch TestName2!');
        await browser.url(`https://automationintesting.online/`)

        //add message7
        await send("TestName2", "testemail2@email.com", "011111111111111", "TestSubject2", "This is a new test message 2", 'h2=Thanks for getting in touch TestName2!');
        await browser.url(`https://automationintesting.online/`)

        //add message8
        await send("TestName2", "testemail2@email.com", "011111111111111", "TestSubject2", "This is a new test message 2", 'h2=Thanks for getting in touch TestName2!');
        await browser.url(`https://automationintesting.online/`)

        //add message9
        await send("TestName2", "testemail2@email.com", "011111111111111", "TestSubject2", "This is a new test message 2", 'h2=Thanks for getting in touch TestName2!');
        await browser.url(`https://automationintesting.online/`)

        //add message10
        await send("TestName2", "testemail2@email.com", "011111111111111", "TestSubject2", "This is a new test message 2", 'h2=Thanks for getting in touch TestName2!');
        await browser.url(`https://automationintesting.online/`)

        //add message11
        await send("TestName2", "testemail2@email.com", "011111111111111", "TestSubject2", "This is a new test message 2", 'h2=Thanks for getting in touch TestName2!');
        await browser.url(`https://automationintesting.online/`)

        //add message12
        await send("TestName2", "testemail2@email.com", "011111111111111", "TestSubject2", "This is a new test message 2", 'h2=Thanks for getting in touch TestName2!');
        await browser.url(`https://automationintesting.online/`)

        //add message13
        await send("TestName2", "testemail2@email.com", "011111111111111", "TestSubject2", "This is a new test message 2", 'h2=Thanks for getting in touch TestName2!');
        await browser.url(`https://automationintesting.online/`)

        //add message14
        await send("TestName2", "testemail2@email.com", "011111111111111", "TestSubject2", "This is a new test message 2", 'h2=Thanks for getting in touch TestName2!');
        await browser.url(`https://automationintesting.online/`)

        //add message15
        await send("TestName2", "testemail2@email.com", "011111111111111", "TestSubject2", "This is a new test message 2", 'h2=Thanks for getting in touch TestName2!');
        await browser.url(`https://automationintesting.online/`)

        //add message16
        await send("TestName2", "testemail2@email.com", "011111111111111", "TestSubject2", "This is a new test message 2", 'h2=Thanks for getting in touch TestName2!');
        await browser.url(`https://automationintesting.online/`)

        //add message17
        await send("TestName2", "testemail2@email.com", "011111111111111", "TestSubject2", "This is a new test message 2", 'h2=Thanks for getting in touch TestName2!');
        await browser.url(`https://automationintesting.online/`)

        //add message18
        await send("TestName2", "testemail2@email.com", "011111111111111", "TestSubject2", "This is a new test message 2", 'h2=Thanks for getting in touch TestName2!');
        await browser.url(`https://automationintesting.online/`)

        //add message19
        await send("TestName2", "testemail2@email.com", "011111111111111", "TestSubject2", "This is a new test message 2", 'h2=Thanks for getting in touch TestName2!');
        await browser.url(`https://automationintesting.online/`)

        //add message20
        await send("TestName2", "testemail2@email.com", "011111111111111", "TestSubject2", "This is a new test message 2", 'h2=Thanks for getting in touch TestName2!');
        await browser.url(`https://automationintesting.online/`)

        //add message21
        await send("TestName2", "testemail2@email.com", "011111111111111", "TestSubject2", "This is a new test message 2", 'h2=Thanks for getting in touch TestName2!');
        await browser.url(`https://automationintesting.online/`)

        //add message22
        await send("TestName2", "testemail2@email.com", "011111111111111", "TestSubject2", "This is a new test message 2", 'h2=Thanks for getting in touch TestName2!');
        await browser.url(`https://automationintesting.online/`)

        //add message23
        await send("TestName2", "testemail2@email.com", "011111111111111", "TestSubject2", "This is a new test message 2", 'h2=Thanks for getting in touch TestName2!');
        await browser.url(`https://automationintesting.online/`)

        //add message24
        await send("TestName2", "testemail2@email.com", "011111111111111", "TestSubject2", "This is a new test message 2", 'h2=Thanks for getting in touch TestName2!');
        await browser.url(`https://automationintesting.online/`)

        //add message25
        await send("TestName2", "testemail2@email.com", "011111111111111", "TestSubject2", "This is a new test message 2", 'h2=Thanks for getting in touch TestName2!');
        await browser.url(`https://automationintesting.online/`)

        //add message26
        await send("TestName2", "testemail2@email.com", "011111111111111", "TestSubject2", "This is a new test message 2", 'h2=Thanks for getting in touch TestName2!');
        await browser.url(`https://automationintesting.online/`)

        //add message27
        await send("TestName2", "testemail2@email.com", "011111111111111", "TestSubject2", "This is a new test message 2", 'h2=Thanks for getting in touch TestName2!');
        await browser.url(`https://automationintesting.online/`)

        //add message28
        await send("TestName2", "testemail2@email.com", "011111111111111", "TestSubject2", "This is a new test message 2", 'h2=Thanks for getting in touch TestName2!');
        await browser.url(`https://automationintesting.online/`)

        //add message29
        await send("TestName2", "testemail2@email.com", "011111111111111", "TestSubject2", "This is a new test message 2", 'h2=Thanks for getting in touch TestName2!');
        await browser.url(`https://automationintesting.online/`)

        //add message30
        await send("TestName2", "testemail2@email.com", "011111111111111", "TestSubject2", "This is a new test message 2", 'h2=Thanks for getting in touch TestName2!');

        //go to admin and check messages
        await browser.url(`https://automationintesting.online/#/admin`)
        await expect(browser.$('//*[@id="root"]/div/nav/div[3]/ul/li[1]/a')).toBeExisting();
        await browser.$('//*[@id="root"]/div/nav/div[3]/ul/li[1]/a').click();
        await expect(browser.$('//*[@id="message30"]')).toBeExisting();

        async function send(name, email, phone, subject, description, message) {
            await browser.$('//*[@id="name"]').setValue(name);
            await browser.$('//*[@id="email"]').setValue(email);
            await browser.$('//*[@id="phone"]').setValue(phone);
            await browser.$('//*[@id="subject"]').setValue(subject);
            await browser.$('//*[@id="description"]').setValue(description);
            await browser.$('button[id="submitContact"]').click();

            await expect(browser.$(message)).toBeExisting();
        }
    })

})


