const { BasePage } = require("./BasePage");

class HomePage extends BasePage {
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
module.exports = { HomePage };
