
import { type Page } from '@playwright/test';
import { getTestData } from '../utils/locatorReader.js';

const username = getTestData('username');
// console.log(`Username from test data: ${username}`);
const password = getTestData('password');
// console.log(`Password from test data: ${password}`);
const loginButton = getTestData('loginButton');
// console.log(`Login button from test data: ${loginButton}`);



export class LoginPage {

    readonly page: Page;
    readonly usernameInput;
    readonly passwordInput;
    readonly loginButton;
    readonly welcomeMessage;


  constructor(page: Page) {
    
    this.page = page;
    // this.usernameInput = page.locator('#user-name');
    // this.passwordInput = page.locator('#password');
    // this.loginButton = page.locator('#login-button');
    this.usernameInput = page.locator(username); // Using locator from locator reader
    this.passwordInput = page.locator(password); // Using locator from locator reader
    this.loginButton = page.locator(loginButton); // Using locator from locator reader
    this.welcomeMessage = page.locator('welcomeMessage');
  }

  async goto(url:string) {
    await this.page.goto(url);
  }

  async login(username1: string, password1: string) {
    await this.usernameInput.fill(username1);
    await this.passwordInput.fill(password1);
    await this.loginButton.click();
  }

//   async verifyLoginSuccess(username: string) {
//     await expect(this.welcomeMessage).toHaveText(`Welcome ${username}`);
//   }
}
