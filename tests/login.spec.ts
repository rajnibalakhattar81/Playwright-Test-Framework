import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/loginPage.js';
import { getJsonArray, getTestData } from '../src/utils/testdataReader.js';

const loginData = getJsonArray("loginData");
const url = getTestData('sauce_url');


test.describe("Login Tests single", () => {

test('Login with valid credentials @smoke @regression', async ({ page }) => {
//test('Login with valid credentials',{ tag: ['@smoke'] }, async ({ page }) => {

  const loginPage = new LoginPage(page);
  
  console.log(`Navigating to URL: ${url}`);

  await loginPage.goto(url);

  console.log(`Attempting to login with username and password from test data`);
  //const loginData = getJsonArray("loginData");
  console.log("&&&&&&&&&&&&"+loginData[0].username);
  console.log("&&&&&&&&&&&&"+loginData[0].password);
  
  await loginPage.login(loginData[0].username, loginData[0].password);
  await expect(page).toHaveURL(/inventory.html/);

})
});



// test.describe("Login Tests with Data Provider", () => {

//   for (const data of loginData) {

//     test(`Login test with username: ${data.username} @regression`, async ({ page }) => {
      
//     const loginPage = new LoginPage(page);
  
//     console.log(`Navigating to URL: ${url}`);
//     await loginPage.goto(url);         
//     console.log(`Attempting to login with username and password from test data`);  
//     //console.log('\x1b[32m',data.username);
//     //console.log('\x1b[31m',data.password);  
//     await loginPage.login(data.username, data.password);
//     if (data.username === "standard_user" && data.password === "secret_sauce") {
//         // successful login
//         await expect(page).toHaveURL(/inventory.html/);
//       } else { 
//         // failed login
//         await expect(page.locator('[data-test="error"]')).toBeVisible();
//       }
//     });
//   }
// // });

// test('demo ignoreHTTPSIssues', async ({ page }) => {
//     await page.goto('https://self-signed.badssl.com/');
//     await expect(page.locator('h1')).toHaveText('self-signed.badssl.com');
// });