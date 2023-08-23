const {test, expect} = require('@playwright/test');
//const { expect} = require('../playwright.config');


// test('Browser Context Playwright Test',async ({browser})=>
// {

//     //Playwright code
//     const context = await browser.newContext();
//     const page= await browser.newPage();
//     await page.goto("http://eaapp.somee.com/");

// });


test('Register User',async ({browser})=>
{

    //Playwright code
    const context = await browser.newContext();
    const page= await browser.newPage();
    await page.goto("http://eaapp.somee.com/");
    const RegisterBtnLink = page.locator('#registerLink')
    const userNameField = page.locator('#UserName');
    const PasswordField = page.locator('#Password');
    const ConfirmPasswordField = page.locator('#ConfirmPassword');
    const EmailField = page.locator('#Email');
    const RegisterBtn= page.locator('input.btn.btn-default');
    await RegisterBtnLink.click();
    await userNameField.type("RAJARAM");
    await PasswordField.type("Raja@123");
    await ConfirmPasswordField.type("Raja@123");
    await EmailField.type("RAJA@Yahoo.com");
    //await RegisterBtn.click();
    // await page.pause();

    


});

// test('Page Playwright Test',async ({page})=>
// {

//     //Playwright code
//     // const context =await browser.newContext();
//     // const page= await browser.newPage();
//     await page.goto("https://www.google.co.in/");
//     //get title - assertion

//     console.log('PAGE TITLE :',await page.title());
    
//     await expect(page).toHaveTitle("Google");

// });