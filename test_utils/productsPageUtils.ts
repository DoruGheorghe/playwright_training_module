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
export async function addToCart(page: Page) {
    const productAddedToCart = await page.$("(//p[@class='text-center'])[1]");
        if (productAddedToCart) {
            const addedMessage = await productAddedToCart.innerText();
            if (addedMessage === 'Your product has been added to cart.') {
                console.log('The product has been added to cart');
            } else {
                console.log('The product has not been added to cart');
            }
        } else {
                console.log('The product has not been found');
        }
}
export async function addToCartAndCheckIt(page: Page) {
    const productDescriptionInTheCart = await page.$("//p[text()='Men > Tshirts']");
    const productPriceInTheCart = await page.$("(//p[text()='Rs. 400'])[1]");
    if (productDescriptionInTheCart && productPriceInTheCart) {
        const [descriptionText, priceText] = await Promise.all([
            productDescriptionInTheCart.innerText(),
            productPriceInTheCart.innerText()
        ]);
        if (descriptionText === 'Men > Tshirts' && priceText === 'Rs. 400') {
            console.log('The product is in the cart');
        } else {
            console.log('The product is not in the cart');
        }
    } else {
        console.log('The product has not been found');
    }
}
