import { test, expect } from "@playwright/test";
const { POManager } = require("../../pages/POManager");

let poManager, signupLoginPage, homePage, productsPage;
let context, page;

test.describe("two tests", () => {
  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
    poManager = new POManager(page);
    signupLoginPage = poManager.getSignupLoginPage();
    // homePage = poManager.getHomePage();
    // productsPage = poManager.getProductsPage();
  });

  test("Test Case 1: Register User", { tag: ["@smoke", "@regression"] }, async () => {
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    await page.goto("/");
    // 4. Click on 'Signup / Login' button
    await signupLoginPage.navigateToPageOnHeader("Signup / Login");
    // 5. Verify 'New User Signup!' is visible
    await expect(signupLoginPage.lblNewUserSignup).toHaveText("New User Signup!");
    // 6. Enter name and email address
    await signupLoginPage.fillNewUserInformation("AutoTest2024", "AutoTest2024@gmail.com");
    // 7. Click 'Signup' button
    await signupLoginPage.btnSignup.click();
    // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
    await expect(signupLoginPage.lblEnterAccountInformation).toHaveText("Enter Account Information");
    // 9. Fill details: Title, Name, Email, Password, Date of birth
    // 10. Select checkbox 'Sign up for our newsletter!'
    // 11. Select checkbox 'Receive special offers from our partners!'
    // 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number

    // 13. Click 'Create Account button'
    // 14. Verify that 'ACCOUNT CREATED!' is visible
    // 15. Click 'Continue' button
    // 16. Verify that 'Logged in as username' is visible
    // 17. Click 'Delete Account' button
    // 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
  });
});
