describe('Restful Booker Create Rooms', () => {

    it('Should be able to access create room page', async () => {
        await browser.url(`https://automationintesting.online/#/admin`)
        await browser.$('#username').setValue("admin")
        await browser.$('#password').setValue("password")
        await browser.$('button[type="submit"]').click()

        await browser.pause(5000)

        const line = await browser.$('/html/body/div/div/div/div/div/div/div[2]/div')
        await expect(line).toBeExisting()
        await expect(line).toHaveTextContaining(101)
        await expect(line).toHaveTextContaining('single')
        await expect(line).toHaveTextContaining('true')
        await expect(line).toHaveTextContaining(100)
        await expect(line).toHaveTextContaining('TV, WiFi, Safe')
    })

    it('Should be able to create new room', async () => {
        await browser.$('//*[@id="roomName"]').setValue(102)
        await browser.$('//*[@id="roomPrice"]').setValue(500)
        await browser.$('//*[@id="createRoom"]').click()

        const line = await browser.$('/html/body/div/div/div/div/div/div/div[2]/div')
        await expect(line).toBeExisting()
        await expect(line).toHaveTextContaining(101)
        await expect(line).toHaveTextContaining('single')
        await expect(line).toHaveTextContaining('true')
        await expect(line).toHaveTextContaining(100)
        await expect(line).toHaveTextContaining('TV, WiFi, Safe')
    })

    it('Should see created room on home page', async () => {
        await browser.url(`https://automationintesting.online/`)
        const room2 = browser.$('//*[@id="root"]/div/div/div[4]/div/div/div[3]')
        await expect(room2).toBeExisting()
        await expect(room2).toHaveTextContaining('single')
    })

})