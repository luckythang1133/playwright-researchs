class BasePage {
  // Init selectors using constructor
  constructor(page) {
    this.page = page;
    this.signUpButton = page.locator("xpath");
  }
  // Define dynamic Xpath
  getMenuItemXpath(menuItem) {
    return `//header//a[contains(text(),"${menuItem}")]`;
  }
  async navigateToPageOnHeader(menuItem) {
    const xpath = this.getMenuItemXpath(menuItem);
    await this.page.locator(xpath).click();
  }

  // Define page method
}
module.exports = { BasePage };
