import { test, expect } from '@playwright/test';
import { getJsonArray, getJsonObject, getTestData } from '../src/utils/testdataReader.js';
import { customLogger } from '../src/logger/customLogger.js';
import { TestDataGenerator } from '../src/utils/testdataGenerator.js';



//using loop to run the same test with different data sets from json file. This is called data driven testing. 
// We are using test.each() method to achieve this. We can also use test.describe() method to group the tests together. 
// We can also use test.only() method to run only one test case. We can also use test.skip() method to skip a test case.
//  We can also use test.fixme() method to mark a test case as a known issue. 
// We can also use test.fail() method to mark a test case as expected to fail. 
// We can also use test.setTimeout() method to set a timeout for a test case. 
// We can also use test.setRetry() method to set the number of retries for a test case. 
// We can also use test.setTag() method to set tags for a test case. 
// We can also use test.info() method to log information about a test case. 
// We can also use test.step() method to log steps in a test case. 
// We can also use test.attach() method to attach files to a test case. 
// We can also use test.addContext() method to add context to a test case. 
// We can also use test.getContext() method to get context of a test case. 
// We can also use test.clearContext() method to clear context of a test case.

// test('generate random test data', () => {
//   // Random string
//   const randomString = TestDataGenerator.generateRandomString(10);
//   console.log('Random String:', randomString);

//   // Random alphanumeric string
//   const randomAlphanumeric = TestDataGenerator.generateRandomAlphanumeric(12);
//   console.log('Random Alphanumeric:', randomAlphanumeric);

//   // Random integer between 1 and 100
//   const randomInt = TestDataGenerator.generateRandomInteger(1, 100);
//   console.log('Random Integer:', randomInt);

//   // Random email
//   const randomEmail = TestDataGenerator.generateRandomEmail();
//   console.log('Random Email:', randomEmail);

//   // Random phone number
//   const randomPhone = TestDataGenerator.generateRandomPhone();
//   console.log('Random Phone:', randomPhone);

//   // Random date between Jan 1, 2020 and Dec 31, 2025
//   const randomDate = TestDataGenerator.generateRandomDate(new Date('2020-01-01'), new Date('2025-12-31'));
//   console.log('Random Date:', randomDate);
// });


//?????????????????????**********************************************************
//  example of using custom logger in a test case.
//  We are logging the steps of the test case and also logging the success or failure of the test case.
// const logger = new customLogger();

// test('Login test with logger', async ({ page }) => {
//  logger.info('Navigating to login page');
//  await page.goto('https://www.saucedemo.com/v1/');


//  logger.info('Filling username and password');
//  await page.fill('#user-name', 'standard_user');
//  await page.fill('#password', 'secret_sauce');


//  logger.warn('Clicking login button, it can be risky if the credentials are wrong');
 
//  await page.click('#login-button');

// // we have to put this in try catch block because if the login fails, 
// // it will throw an error and we want to catch that error and log it. 
// // If we don't catch the error, the test will fail and we won't get the chance to log the failure.
//  try {
//   // After clicking the login button, we expect to be navigated to the inventory page. 
//   // We can assert this by checking the URL or by checking for an element that is only present on the inventory page.
//    logger.info('Checking for inventory page load');
//    await expect(page.getByText('Products')).toHaveText('Products');
//    logger.info('✅ Login successful');
//  } catch (error) {// If the assertion fails, it will throw an error which we catch here to log the failure.
//    logger.error('❌ Login failed');
//    throw error; // rethrow the error to fail the test
//  }

// });

///////////////////////////////////////////////////////////////////////////////////
//using loop to run the same test with different data sets from json file. This is called data driven testing. 
// const loginData = getJsonArray("loginData");

// Or we can directly mention data in the test file as below. But it is not a good practice to hard code the data in the test file. It is better to keep the data in a separate json file and read it from there. This way we can easily manage the test data and also we can easily run the same test with different data sets.
// const loginData = [
//  { username: 'standard_user', password: 'secret_sauce' },   // valid creds
//  { username: 'locked_out_user', password: 'secret_sauce' }, // locked user
//  { username: 'invalid_user', password: 'wrong_pass' }       // invalid creds
// ];


// test.describe("Login Tests with Data Provider", () => {

//   for (const data of loginData) {
//     test(`Login test with username: ${data.username}`, async ({ page }) => {

//       await page.goto("https://www.saucedemo.com/v1/");
//       await page.fill("#user-name", data.username);
//       await page.fill("#password", data.password);
//       await page.click("#login-button");


//       if (data.username === "standard_user" && data.password === "secret_sauce") {
//         // successful login
//         await expect(page).toHaveURL(/inventory.html/);
//       } else {
//         // failed login
//         await expect(page.locator('[data-test="error"]')).toBeVisible();
//       }
//     });
//   }
// });


//????????????????????????????????????????????????????????????????????????????
// test('Testing complaex json', async ({ page }) => {

//   const user = getJsonObject('user');
//   console.log(`User Name: ${user.name}, Role: ${user.role}`);

//   const ids = getJsonArray('ids');
//   console.log(`IDs: ${ids.join(', ')}`);

//   console.log("************"+ids[0]); // 101
//   console.log("************"+ids[2]); // 103
//   console.log("************"+ids[3]); // 101    

// });
//????????????????????????????????????????????????????????????????????????????
/* test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
}); 
*/
//////////////////////////////////////////////////////////////////////////
// test('get started link', async ({ page }) => {

//   const url = getTestData('base_url');

//   console.log(`Navigating to URL: ${url}`);

//   await page.goto(url);
//   await page.goto('https://playwright.dev/');

//   //Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
