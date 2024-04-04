describe('My Login application', async () => {
    
    beforeEach(async () => {
        await browser.url("https://demoqa.com/")
        await browser.maximizeWindow();

        //Getting the Elements tab and clicking it
        const elements = await $('//*[@id="app"]/div/div/div[2]/div/div[1]')
        
        //Assert visible
        await expect(elements).toExist();

        //Click elements tab
        elements.click();
    })

    it('Text Box', async () => {
            // Text Box
            const item1 = await $('//*[@id="item-0"]');
        
            // Assert that item 1 is visible
            await item1.waitForDisplayed();
            expect(await item1.isDisplayed()).toBe(true, "Item is not Displayed");
        
            // Clicking item 1
            await item1.click();
        
            // Fill Form
            // Full Name field
            const fullnameLabel = await $('#userName-label');
            await fullnameLabel.waitForDisplayed();
            expect(await fullnameLabel.isDisplayed()).toBe(true);
            const fullnameField = await $('#userName');
            await fullnameField.setValue("John Damadah");
            expect(await fullnameField.isDisplayed()).toBe(true);
        
            // Email
            const emailLabel = await $('#userEmail-label');
            await emailLabel.waitForDisplayed();
            expect(await emailLabel.isDisplayed()).toBe(true);
            const emailField = await $('#userEmail');
            await emailField.setValue("jondoe@gmail.com");
        
            // Current Address
            const addressLabel = await $('#currentAddress-label');
            await addressLabel.waitForDisplayed();
            expect(await addressLabel.isDisplayed()).toBe(true);
            const addressField = await $('#currentAddress');
            await addressField.setValue("currentAddress");
        
            // Permanent Address
            const permanentLabel = await $('#permanentAddress-label');
            await permanentLabel.waitForDisplayed();
            expect(await permanentLabel.isDisplayed()).toBe(true);
            const permanentField = await $('#permanentAddress');
            await permanentField.setValue("permanentAddress");
        
            await browser.pause(3000);
        
            // Submit button and assertions
            // Scroll to button command
            await browser.execute("window.scroll(0, 600)");
            await browser.pause(3000);
            await browser.execute("document.querySelector('#submit').scrollTop=500");
            const submit = await $('#submit');
            await submit.click();
        
            await browser.pause(3000);
    })


    it('Check Box', async () => {
        // Wait for page to load
        await browser.pause(2000);

        //Check Box
        const item2 = await $('#item-1');

        //Assert that item 2 is visible
        await expect(item2).toBeDisplayed();

        //Click item 2
        await item2.click();

        //Get the dropdown svg
        const dropdown = await $('//button[@title="Toggle"]//*[name()="svg"]');
        await expect(dropdown).toBeDisplayed();
        dropdown.scrollIntoView();

        //Click the svg
        await dropdown.click();

        //Select the Downloads Check Box
        await browser.pause(1000); // Adjust the pause as needed
        const downloads = await $('[for="tree-node-downloads"]');

        //Click Download check box
        await downloads.click();

        //Assert that the success message
        const successMsg = await $('#result');
        const expectedMsg = "You have selected :\n" +
            "downloads\n" +
            "wordFile\n" +
            "excelFile";
        const actualMsg = await successMsg.getText();
        await expect(actualMsg).toContain(expectedMsg);
        
        await browser.pause(2000); // Adjust the pause as needed
    })
})

