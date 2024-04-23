import { test, expect, chromium } from '@playwright/test';
import { setupBrowser } from '../test_utils/chromeBrowserSetup.ts';
import { fillAndSubmitFormContactPage, chooseFile, submitContactForm, getMessage } from '../pages/contacUsPage.ts';


test('Submit message', async () => {

    const { browser, context, page } = await setupBrowser();
    await page.goto('./');
    const locator = page.getByText("Contact us");
    await locator.click();
    fillAndSubmitFormContactPage(page, 'qa', 'wa@wa.com', 'something', 'something something')
    await page.waitForTimeout(5000);
    chooseFile(page);
    await page.waitForTimeout(5000);
    page.once('dialog', (dialog) =>{
        console.log(dialog.message)
        dialog.accept();
    });
    await page.waitForTimeout(5000);
    submitContactForm(page);
    await page.waitForTimeout(5000);
    getMessage(page);
    await page.waitForTimeout(5000);
});