import { defineConfig, devices } from '@playwright/test';
import { title } from 'node:process';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  globalTimeout: 10800000, // 3 hours
  captureGitInfo: { commit: true, diff: true },
  metadata: { title: 'test-metadata' },
  testDir: './specs',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined, //simplified if
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html'], ['json', { outputFile: 'test-results/results.json' }]],
  outputDir: '/test-results',
  quiet: false,
  //repeatEach: 3,
  reportSlowTests: { max: 10, threshold: 2000 },
  testIgnore: '**/specs/ignoredTests/**',
  timeout: 60000,
  expect: {
    timeout: 20000,
  },
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    //  trace: 'on-first-retry',
    actionTimeout: 5000,
    navigationTimeout: 10000,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'setup',
      use: {
        ...devices['Desktop Edge'], channel: 'msedge',
        baseURL: 'https://aa-practice-test-automation.vercel.app/index.html',
      },
      testMatch: ['**/specs/utils/setup.spec.ts'],
      teardown: 'teardown',

    }, {
      name: 'teardown',
      use: {
        ...devices['Desktop Edge'], channel: 'msedge',
        baseURL: 'https://aa-practice-test-automation.vercel.app/index.html',
      },
      testMatch: ['**/specs/utils/teardown.spec.ts'],

    },
    {
      name: 'sanity',
      use: {
        ...devices['Desktop Edge'], channel: 'msedge',
        baseURL: 'https://aa-practice-test-automation.vercel.app/index.html',
      },
      testMatch: ['**/specs/login.spec.ts', '**/specs/logout.spec.ts'],

    },
    {
      name: 'test-env',
      use: {
        ...devices['Desktop Edge'], channel: 'msedge',
        baseURL: 'https://aa-practice-test-automation.vercel.app/index.html',
      },

    },
    {
      name: 'preprod-env',
      use: {
        ...devices['Desktop Edge'], channel: 'msedge',
        baseURL: 'https://preprod-aa-practice-test-automation.vercel.app/index.html',
      },

    },
    {
      name: 'chrome',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'https://aa-practice-test-automation.vercel.app/index.html',
      },

      dependencies: ['setup'],
      //  fullyParallel: true,
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
      dependencies: ['setup'],

    },

    {
      name: 'safari',
      use: { ...devices['Desktop Safari'] },
      dependencies: ['setup'],

    },
    {
      name: 'edge',
      use: { ...devices['Desktop Edge'], channel: 'msedge' },
      dependencies: ['setup'],

    }
    ,
    {
      name: 'iPhone 13 Pro Max',
      use: { ...devices['iPhone 13 Pro Max'] },
      dependencies: ['setup'],

    }

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
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
