import { chromium, Browser, BrowserContext, Page } from '@playwright/test';


export async function fillAndSubmitFormLoginToYourAccount(page: Page, email: string, password: string) {
    await page.fill("input[data-qa='login-email']", email);
    await page.fill("input[name='password']", password);
    await page.click("button[data-qa='login-button']");
}
export async function fillAndSubmitFormNewUserSignup(page: Page, name: string, email: string) {
    await page.fill("input[name='name']", name);
    await page.fill("input[data-qa='signup-email']", email);
    await page.click("button[data-qa='signup-button']");
}