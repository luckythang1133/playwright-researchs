import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  // Init selectors using constructor
  constructor(page) {
    super(page);
    this.signUpButton = page.locator("xpath");
  }
  // Define page method
  async navigateToHomePage() {
    await this.clickMenuItem("Home");
  }
}
// export default { HomePage };
