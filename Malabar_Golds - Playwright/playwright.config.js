// @ts-check
const { devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = {
  testDir: './tests',
  timeout: 100 * 1000,  
  //global timeout
 expect:{
      
     timeout:5000
 },
 reporter: 'html',

  /* Configure projects for major browsers */
  projects: [
     {
      name: 'webkit',
      use: { ...devices['Desktop Safari'],
      headless : false,
      screenshot: 'on',
      trace: 'on',
      video: 'on'
    },
  },
]
};
module.exports = config;


