import { expect, test } from "@playwright/test";
import { Env } from "../../env/env";

const url = Env.URL + "api/";
const tempEmail = "tempEmail@getMaxListeners.com";
const tempPassword = "tempPassword";

test.describe.configure({ mode: "serial" });

test("API 11: POST To Create/Register User Account", { tag: "@api11" }, async ({ request }) => {
  let response = await request.post(url + "createAccount", {
    form: {
      name: "API11",
      email: tempEmail,
      password: tempPassword,
      title: "Mr",
      birth_date: "01",
      birth_month: "01",
      birth_year: "2000",
      firstname: "API11",
      lastname: "API11",
      company: "API11",
      address1: "API11",
      address2: "API11",
      country: "API11",
      zipcode: "API11",
      state: "API11",
      city: "API11",
      mobile_number: "API11",
    },
  });
  expect(response.status()).toBe(200);
  let responseBody = await response.json();
  if (responseBody.responseCode != 201) {
    console.log(responseBody);
  }
  expect(responseBody.responseCode).toBe(201);
  expect(responseBody.message).toBe("User created!");
});

test("API 12: DELETE METHOD To Delete User Account", { tag: "@api12" }, async ({ request }) => {
  let response = await request.delete(url + "deleteAccount", {
    form: {
      email: tempEmail,
      password: tempPassword,
    },
  });
  expect(response.status()).toBe(200);
  let responseBody = await response.json();
  expect(responseBody.responseCode).toBe(200);
  expect(responseBody.message).toBe("Account deleted!");
});
