import { expect, test } from "@playwright/test";
const url = "https://automationexercise.com/api/";
const email = "autoTestDemo@gmail.com";
const password = "autoTestDemo";

test.describe("API testing with parallel", () => {
  test("API 1: Get All Products List", { tag: ["@api01", "@smoke"] }, async ({ request }) => {
    let response = await request.get(url + "productsList");
    expect(response.status()).toBe(200);
    let responseBody = await response.json();
    expect(responseBody.products[0].name).toBe("Blue Top");
  });

  test("API 2: POST To All Products List", { tag: "@api02" }, async ({ request }) => {
    let response = await request.post(url + "productsList");
    expect(response.status()).toBe(200);
    let responseBody = await response.json();
    expect(responseBody.message).toBe("This request method is not supported.");
  });

  test("API 3: Get All Brands List", { tag: "@api03" }, async ({ request }) => {
    let response = await request.get(url + "brandsList");
    expect(response.status()).toBe(200);
    let responseBody = await response.json();
    expect(responseBody.responseCode).toBe(200);
  });

  test("API 4: PUT To All Brands List", { tag: "@api04" }, async ({ request }) => {
    let response = await request.put(url + "brandsList");
    expect(response.status()).toBe(200);
    let responseBody = await response.json();
    expect(responseBody.responseCode).toBe(405);
    expect(responseBody.message).toBe("This request method is not supported.");
  });

  test("API 5: POST To Search Product", { tag: "@api05" }, async ({ request }) => {
    let response = await request.post(url + "searchProduct", {
      form: {
        search_product: "Blue Top",
      },
    });
    expect(response.status()).toBe(200);
    let responseBody = await response.json();
    expect(responseBody.responseCode).toBe(200);
    let products = responseBody.products;
    for (let product of products) expect(product.name).toContain("Blue Top");
  });

  test("API 6: POST To Search Product without search_product parameter", { tag: "@api06" }, async ({ request }) => {
    let response = await request.post(url + "searchProduct");
    expect(response.status()).toBe(200);
    let responseBody = await response.json();
    expect(responseBody.responseCode).toBe(400);
    expect(responseBody.message).toBe("Bad request, search_product parameter is missing in POST request.");
  });

  test("API 7: POST To Verify Login with valid details", { tag: "@api07" }, async ({ request }) => {
    let response = await request.post(url + "verifyLogin", {
      form: {
        email: email,
        password: password,
      },
    });
    expect(response.status()).toBe(200);
    let responseBody = await response.json();
    expect(responseBody.responseCode).toBe(200);
    expect(responseBody.message).toBe("User exists!");
  });

  test("API 8: POST To Verify Login without email parameter", { tag: "@api08" }, async ({ request }) => {
    let response = await request.post(url + "verifyLogin", {
      form: {
        password: password,
      },
    });
    expect(response.status()).toBe(200);
    let responseBody = await response.json();
    expect(responseBody.responseCode).toBe(400);
    expect(responseBody.message).toBe("Bad request, email or password parameter is missing in POST request.");
  });

  test("API 9: DELETE To Verify Login", { tag: "@api09" }, async ({ request }) => {
    let response = await request.delete(url + "verifyLogin");
    expect(response.status()).toBe(200);
    let responseBody = await response.json();
    expect(responseBody.responseCode).toBe(405);
    expect(responseBody.message).toBe("This request method is not supported.");
  });

  test("API 10: POST To Verify Login with invalid details", { tag: "@api10" }, async ({ request }) => {
    let response = await request.post(url + "verifyLogin", {
      form: {
        email: "invalidEmail",
        password: "invalidPassword",
      },
    });
    expect(response.status()).toBe(200);
    let responseBody = await response.json();
    expect(responseBody.responseCode).toBe(404);
    expect(responseBody.message).toBe("User not found!");
  });

  test("API 13: PUT METHOD To Update User Account", { tag: "@api13" }, async ({ request }) => {
    let response = await request.put(url + "updateAccount", {
      form: {
        name: "API13",
        email: email,
        password: password,
        title: "Mr",
        birth_date: "01",
        birth_month: "01",
        birth_year: "2000",
        firstname: "API13",
        lastname: "API13",
        company: "API13",
        address1: "API13",
        address2: "API13",
        country: "API13",
        zipcode: "API13",
        state: "API13",
        city: "API13",
        mobile_number: "API13",
      },
    });
    expect(response.status()).toBe(200);
    let responseBody = await response.json();
    expect(responseBody.responseCode).toBe(200);
    expect(responseBody.message).toBe("User updated!");
  });

  test("API 14: GET user account detail by email", { tag: "@api14" }, async ({ request }) => {
    let response = await request.get(url + "getUserDetailByEmail", {
      params: {
        email: email,
      },
    });
    expect(response.status()).toBe(200);
    let responseBody = await response.json();
    expect(responseBody.responseCode).toBe(200);
    expect(responseBody.user.email).toBe(email);
  });
});
