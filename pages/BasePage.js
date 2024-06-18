export class BasePage {
  // Init selectors using constructor
  constructor(page) {
    this.page = page;
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
// export default { BasePage };
