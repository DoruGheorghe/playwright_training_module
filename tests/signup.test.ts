import { test, expect, chromium } from '@playwright/test';
import { setupBrowser } from '../test_utils/chromeBrowserSetup.ts';
import { fillAndSubmitFormNewUserSignup } from '../test_utils/loginData.ts';


test('User Signup', async () => {

    const { browser, context, page } = await setupBrowser();
    await page.goto('./');
    const signIn = page.getByText("Signup / Login");
    await signIn.click();
    await fillAndSubmitFormNewUserSignup(page, 'something', 'something@something.com');
    await page.waitForTimeout(5000);
});
test('Signup User - User already exists', async () => {

    const { browser, context, page } = await setupBrowser();
    await page.goto('./');
    const signIn = page.getByText("Signup / Login");
    await signIn.click();
    await fillAndSubmitFormNewUserSignup(page, 'olaf', 'olaf@gg.com');
    const incorrectEmailMessage = await page.textContent("//p[text()='Email Address already exist!']");
    expect(incorrectEmailMessage).toContain('Email Address already exist!');
    console.log(incorrectEmailMessage);
    const expectedIncorrectEmailMessage = 'Email Address already exist!';
    if (incorrectEmailMessage === expectedIncorrectEmailMessage) {
    console.log(true);
    } else {
    console.log(false);
    }
    await page.waitForTimeout(5000);
});



test('User Signup full process', async () => {
  
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    // 3. Verify that home page is visible successfully
    
    const { browser, context, page } = await setupBrowser();
    await page.goto('./');


    //4. Click on 'Signup / Login' button 
    const signIn = page.getByText("Signup / Login");
    await signIn.click(); 

    // 5. Verify 'New User Signup!' is visible
    
    expect(await page?.locator("//h2[text()='New User Signup!']").textContent()).toContain("New User Signup!");
    
    // 6. Enter name and email address
    await page.fill("input[name='name']", "ana");
    await page.fill("input[data-qa='signup-email']", "ana@ana.com");
    // 7. Click 'Signup' button
    await page.click("button[data-qa='signup-button']");

    // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
    //expect(await page?.locator("b[text()='Enter Account Information']").textContent()).toContain("ENTER ACCOUNT INFORMAION");
    

    //radioButton
    const radioButtonMr = await page.$('#id_gender1');
    await radioButtonMr?.check();
    const radioIsChecked = await radioButtonMr?.isChecked();
    console.log('Is radio button for Mr. checked?', radioIsChecked);

    /*In JavaScript, the ? is called the optional chaining operator. 
    It is used to access properties of an object when it's uncertain whether the object or any of its nested properties are null 
    or undefined. If the property or method exists, it is accessed normally. If the property or method does not exist, 
    instead of throwing an error, undefined is returned.

     radioButtonMr?.check() is equivalent to:

     if (radioButtonMr !== null && radioButtonMr !== undefined) {
     radioButtonMr.check();
  }
    It ensures that if radioButtonMr is null or undefined, the check() method will not be called, avoiding a runtime error. 
    Instead, it will simply return undefined. This is particularly useful when dealing with complex data structures or APIs 
    where certain properties or methods may or may not exist.*/






    await page.waitForTimeout(5000);
    await page.fill("input[name='password']", "pass123");

    

    // 9. Fill details: Title, Name, Email, Password, Date of birth
    const dropdownDay = await page.$('#days');
    const dropdownMonth = await page.$('#months');
    const dropdownYear = await page.$('#years');
    await dropdownDay?.selectOption("12");
    await dropdownMonth?.selectOption("12"); // It can select the number of the month or the name of the month
    await dropdownYear?.selectOption("1999");

    /* The $ symbol is used to select the element with the ID 'days' on the web page. 
    This line of code finds and returns the first element that matches the CSS selector '#days', 
    and assigns it to the variable dropdownDay.*/

    

    // 10. Select checkbox 'Sign up for our newsletter!'
    // 11. Select checkbox 'Receive special offers from our partners!'
    const signUpForNewsletterCheckbox = await page.$('#newsletter');
    const receiveSpecialOffersCheckbox = await page.$('#optin');
    await signUpForNewsletterCheckbox?.check();
    await receiveSpecialOffersCheckbox?.check();
    const isNewsChecked = await signUpForNewsletterCheckbox?.isChecked();
    const isReceiveChecked = await signUpForNewsletterCheckbox?.isChecked();
    console.log('Is checkbox checked?', isNewsChecked, isReceiveChecked);

    // 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    await page.fill("input[data-qa='first_name']", "ana");
    await page.fill("input[data-qa='last_name']", "ana");
    await page.fill("input[data-qa='company']", "SC");
    await page.fill("input[name ='address1']", "Strada B");
    await page.fill("input[name='address2']", "nr 12");
    const dropdownCountry = await page.$("select[data-qa='country']");
    await dropdownCountry?.selectOption("Canada");
    await page.fill("input[data-qa='state']", "Timis");
    await page.fill("input[data-qa='city']", "Timisoara");
    await page.fill("input[data-qa='zipcode']", "100200");
    await page.fill("input[data-qa='mobile_number']", "Timisoara");
    
    // 13. Click 'Create Account button'
    await page.click("button[data-qa='create-account']");
    await page.waitForTimeout(5000);

    // 14. Verify that 'ACCOUNT CREATED!' is visible
    const isUserCreated = await page.$("//h2[@data-qa='account-created']//b[1]");
    console.log('Account successfuly created', isUserCreated)

});