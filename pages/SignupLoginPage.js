import { BasePage } from "./BasePage";

export class SignupLoginPage extends BasePage {
  // Init selectors using constructor
  constructor(page) {
    super(page);
    this.lblNewUserSignup = page.locator('//div[@class="signup-form"]//h2');
    this.txtNewUserName = page.locator('//form[contains(@action,"signup")]//input[@name="name"]');
    this.txtNewUserEmail = page.locator('//form[contains(@action,"signup")]//input[@name="email"]');
    this.txtLoginEmail = page.locator('//form[contains(@action,"login")]//input[@name="email"]');
    this.txtLoginPassword = page.locator('//form[contains(@action,"login")]//input[@name="password"]');
    this.btnLogin = page.locator('//button[@data-qa="login-button"]');
    this.btnSignup = page.locator('//button[@data-qa="signup-button"]');
    this.lblEnterAccountInformation = page.locator('//div[@class="login-form"]/h2');
    this.rbMr = page.locator("");
    this.rbMrs = page.locator("");
  }
  // Define page method
  async navigateToSignupLoginPage() {
    await this.clickMenuItem(" Signup / Login");
  }
  async fillNewUserInformation(userName, userMail) {
    await this.txtNewUserName.fill(userName);
    await this.txtNewUserEmail.fill(userMail);
  }
  async fillAccountInformation(title, name, email, password, dateOfBirth, signUpForOurNewsletter, receiveSpecialOffersFromOurPartners) {}
  async fillAddressInformation(firstName, lastName, company, address, address2, country, state, city, zipCode, mobileNumber) {}
}
export default { SignupLoginPage };
