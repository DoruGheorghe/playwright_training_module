import { chromium, Browser, BrowserContext, Page } from '@playwright/test';

export async function fillAndSubmitFormContactPage(page: Page, name: string, email: string, subject: string,
     message: string) {
    await page.fill("input[data-qa='login-email']", name);
    await page.fill("input[name='password']", email);
    await page.fill("input[data-qa='login-email']", subject);
    await page.fill("input[name='password']", message);
}
export async function chooseFile(page: Page) {
   await page.click("upload_file");
}

export async function submitContactForm(page: Page) {
   await page.click("button[data-qa='submit-button']");
}