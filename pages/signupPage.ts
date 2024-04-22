import { Page } from '@playwright/test';


export async function fillAndSubmitFormNewUserData(page: Page, firstName: string, lastName: string, company: string, address1: string,
    address2: string, country: string, state: string, city: string, zipcode: string, mobileNumber: string,) {
    
    await page.fill("input[data-qa='first_name']", firstName);
    await page.fill("input[data-qa='last_name']", lastName);
    await page.fill("input[data-qa='company']", company);
    await page.fill("input[name ='address1']", address1);
    await page.fill("input[name='address2']", address2);
    const dropdownCountry = await page.$("select[data-qa='country']");
    await dropdownCountry?.selectOption(country);
    await page.fill("input[data-qa='state']", state);
    await page.fill("input[data-qa='city']", city);
    await page.fill("input[data-qa='zipcode']", zipcode);
    await page.fill("input[data-qa='mobile_number']", mobileNumber);
}
export async function fillAndSubmitFormNewUserDOB(page: Page, day: string, month: string, year: string) {
    
    const dropdownDay = await page.$("#days'");
    await dropdownDay?.selectOption(day);
    const dropdownMonth = await page.$("#months'");
    await dropdownMonth?.selectOption(month);
    const dropdownYear = await page.$("#years'");
    await dropdownYear?.selectOption(year);
}