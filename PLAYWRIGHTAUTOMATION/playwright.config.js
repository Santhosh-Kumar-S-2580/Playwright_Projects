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
  timeout: 100 * 1000,  //global timeout
 expect:{
      
     timeout:7000
 },
  
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    
    //browserName:'chromium',
   // browserName:'firefox'
     browserName:'webkit',
     headless : false,
     screenshot: 'on',
     trace: 'on',
     video: 'on'






  },

};

module.exports = config;

