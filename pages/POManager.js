import { HomePage } from "./HomePage";
import { ProductsPage } from "./ProductsPage";
import { SignupLoginPage } from "./SignupLoginPage";
// const { OrdersReviewPage } = require("./OrdersReviewPage");
// const { CartPage } = require("./CartPage");
export class POManager {
  constructor(page) {
    this.page = page;
    this.homePage = new HomePage(this.page);
    this.productsPage = new ProductsPage(this.page);
    this.signupLoginPage = new SignupLoginPage(this.page);
    //     this.ordersReviewPage = new OrdersReviewPage(this.page);
    //     this.cartPage = new CartPage(this.page);
  }

  getHomePage() {
    return this.homePage;
  }

  getProductsPage() {
    return this.productsPage;
  }

  getSignupLoginPage() {
    return this.signupLoginPage;
  }
  //   getOrdersHistoryPage() {
  //     return this.ordersHistoryPage;
  //   }

  //   getOrdersReviewPage() {
  //     return this.ordersReviewPage;
  //   }
}
// export default { POManager };
