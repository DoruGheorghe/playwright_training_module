import { chromium, Browser, BrowserContext, Page } from '@playwright/test';

export async function fillAndSubmitFormContactPage(page: Page, name: string, email: string, subject: string,
     message: string) {
    await page.fill("input[data-qa='name']", name);
    await page.fill("input[name='email']", email);
    await page.fill("input[data-qa='subject']", subject);
    await page.fill("//textarea[@data-qa='message']", message);
    
}
export async function chooseFile(page: Page) {
    const uploadFile = page.locator("//input[@type='file']");
    await uploadFile.setInputFiles("C:\Users\dogheorghe\OneDrive - ENDAVA\Desktop\Notes.txt");

}

export async function submitContactForm(page: Page) {
   await page.click("//input[@data-qa='submit-button']");
}

export async function getMessage(page: Page){
    const messageSubmited = await page.$("//div[contains(@class,'status alert')]");
    if (messageSubmited) {
        const actualMessage = await messageSubmited.innerText();
        if (actualMessage === 'Success! Your details have been submitted successfully.') {
            console.log('Message has been submited');
        } else {
            console.log('Message has not been submited');
        }
    } else {
        console.log('There has been an error, please try again.');
    }
}