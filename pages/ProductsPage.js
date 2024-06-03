const { BasePage } = require("./BasePage");

class ProductsPage extends BasePage {
  // Init selectors using constructor
  constructor(page) {
    super(page);
    this.lblAllProduct = page.locator('//h2[contains(text(),"All Products")]');
  }
  // Define page method
  async navigateToProductsPage() {
    await this.clickMenuItem("Products");
  }
}
module.exports = { ProductsPage };
