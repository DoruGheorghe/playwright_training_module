import { Page } from '@playwright/test';

const ITEMS = [
    'Tshirt',
    'Dress',
    'Top'
  ];

export async function fillProducts(page: Page) {
    await page.fill("//input[@placeholder='Search Product']", ITEMS[0]);
}
export async function fillProductsTwo(page: Page) {
    await page.fill("//input[@placeholder='Search Product']", ITEMS[1]);
}