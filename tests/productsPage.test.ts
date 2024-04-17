import { test, expect, chromium } from '@playwright/test';
import { setupBrowser } from '../test_utils/chromeBrowserSetup.ts';
import { fillProducts } from '../test_utils/productsPageUtils.ts';


test('Go to Products page and assert that the search bar is visible', async () => {

    const { browser, context, page } = await setupBrowser();
    await page.goto('./');
    const pressProductsButton = page.getByText("Products");
    await pressProductsButton.click();
    const searchProductBar = await page.$("//input[@placeholder='Search Product']");
    if (searchProductBar) {
        await searchProductBar.fill('Test');
        const searchText = await searchProductBar.inputValue();
        if (searchText === 'Test') {
            console.log('Search bar is editable and contains the input text.');
        } else {
            console.log('Search bar is not editable or does not contain the input text.');
        }
    } else {
        console.log('Search bar is not visible.');
    }
    await page.waitForTimeout(5000);
});

test('Search product - positive test', async () => {

    const { browser, context, page } = await setupBrowser();
    await page.goto('./');
    const pressProductsButton = page.getByText("Products");
    await pressProductsButton.click();
    await fillProducts(page);
    await page.click("button[type='button']");
    const firstTshirtProduct = await page.$("(//p[text()='Men Tshirt'])[1]");
        if (firstTshirtProduct) {
            const productText = await firstTshirtProduct.innerText();
            if (productText === 'Men Tshirt') {
                console.log('The first T-shirt product matches the expected text.');
            } else {
                console.log('The first T-shirt product does not match the expected text.');
            }
        } else {
                console.log('The first T-shirt product element was not found.');
        }
    await page.waitForTimeout(5000);
});
test('Search product - negative test', async () => {

    const { browser, context, page } = await setupBrowser();
    await page.goto('./');
    const pressProductsButton = page.getByText("Products");
    await pressProductsButton.click();
    await fillProducts(page);
    await page.click("button[type='button']");
    const firstTshirtProduct = await page.$("(//p[text()='Men Tshirt'])[1]");
        if (firstTshirtProduct) {
            const productText = await firstTshirtProduct.innerText();
            if (productText === 'Alabala') {
                console.log('The first T-shirt product matches the expected text.');
            } else {
                console.log('The first T-shirt product does not match the expected text.');
            }
        } else {
                console.log('The first T-shirt product element was not found.');
        }
    await page.waitForTimeout(5000);
});