import { chromium, Browser, BrowserContext, Page } from '@playwright/test';

export async function setupBrowser(): Promise<{ browser: Browser, context: BrowserContext, page: Page }> {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    return { browser, context, page };
}


/*Promise = an object representing the eventual completion or failure of an asynchronous operation. 
When declare a function as async, it means that the function will always return a promise. 
In the case of setupBrowser, it returns a promise that resolves to an object containing a browser, a browser context, and a page. */