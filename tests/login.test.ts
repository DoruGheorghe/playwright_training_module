import { test, expect, chromium } from '@playwright/test';
import { setupBrowser } from '../test_utils/chromeBrowserSetup.ts';
import { fillAndSubmitFormLoginToYourAccount } from '../pages/loginPage.ts';


test('Press Login/Signup button', async () => {

    const { browser, context, page } = await setupBrowser();
    await page.goto('./');
    const locator = page.getByText("Signup / Login");
    await locator.click();
    expect(await page?.locator("//h2[text()='Login to your account']").textContent()).toContain("Login to your account");
    await page.waitForTimeout(5000);


});

test('Login User - happy flow', async () => {

    const { browser, context, page } = await setupBrowser();
    await page.goto('./');
    const signIn = page.getByText("Signup / Login");
    await signIn.click();
    await fillAndSubmitFormLoginToYourAccount(page, 'ana@ana.com', 'parola');
    await page.waitForTimeout(5000);
    const showLogoutButton = await page.textContent("//a[contains(.,'Logout')]");
    expect(showLogoutButton).toContain('Logout');
    console.log(showLogoutButton);
    const expectedButton = ' Logout';
    if (showLogoutButton === expectedButton) {
    console.log(true);
    } else {
    console.log(false);
    }
});

test('Login User - Incorect Password', async () => {

    const { browser, context, page } = await setupBrowser();
    await page.goto('./');
    const signIn = page.getByText("Signup / Login");
    await signIn.click();
    await fillAndSubmitFormLoginToYourAccount(page, 'name@bb.password', 'parola');
    const incorectPasswordMessage = await page.textContent("//p[text()='Your email or password is incorrect!']");
    expect(incorectPasswordMessage).toContain('Your email or password is incorrect!');
    console.log(incorectPasswordMessage, true);
    await page.waitForTimeout(5000);
});


test('Login User - No email and password provided', async () => {

    const { browser, context, page } = await setupBrowser();
    await page.goto('./');
    const signIn = page.getByText("Signup / Login");
    await signIn.click();
    await fillAndSubmitFormLoginToYourAccount(page, '', '');
    const errorMessage = await page.textContent('[data-qa="password-error-message"]');
    expect(errorMessage).toContain('Please fill out this field.');
    await page.waitForTimeout(5000);
});
test('Login User - No email provided', async () => {

    const { browser, context, page } = await setupBrowser();
    await page.goto('./');
    const signIn = page.getByText("Signup / Login");
    await signIn.click();
    await fillAndSubmitFormLoginToYourAccount(page, '', '');
    const errorMessage = await page.textContent('[data-qa="password-error-message"]');
    expect(errorMessage).toContain('Please fill out this field.');
    await page.waitForTimeout(5000);
});
test('Login User - No password provided', async () => {

    const { browser, context, page } = await setupBrowser();
    await page.goto('./');
    const signIn = page.getByText("Signup / Login");
    await signIn.click();
    await fillAndSubmitFormLoginToYourAccount(page, '', '');
    const errorMessage = await page.textContent('[data-qa="password-error-message"]');
    expect(errorMessage).toContain('Please fill out this field.');
    await page.waitForTimeout(5000);
});

