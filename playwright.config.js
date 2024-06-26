// @ts-check
const { defineConfig, devices } = require("@playwright/test");
const { config } = require("dotenv");

if (process.env.ENVIRONMENT) {
  config({
    path: `./env/.env.${process.env.ENVIRONMENT}`,
    override: true,
  });
} else {
  config();
}

module.exports = defineConfig({
  testDir: "./tests",
  expect: {
    // Maximum time expect() should wait for the condition to be met.
    timeout: 15000,
  },
  fullyParallel: true /* Run tests in files in parallel */,
  forbidOnly: !!process.env.CI /* Fail the build on CI if you accidentally left test.only in the source code. */,
  retries: process.env.CI ? 2 : 0 /* Retry on CI only */,
  workers: process.env.CI ? 3 : undefined /* Opt out of parallel tests on CI. */,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [["html", { open: "never" }]],

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: process.env.BASE_URL || "https://automationexercise.com/",

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "retain-on-failure",
    actionTimeout: 0,
    headless: true,
    screenshot: "on",
    video: "retain-on-failure",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    // {
    //   name: "firefox",
    //   use: { ...devices["Desktop Firefox"] },
    // },

    // {
    //   name: "webkit",
    //   use: { ...devices["Desktop Safari"] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
