const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout:10000,
  pageLoadTimeout:10000,
 // viewportHeight: 896,
  //viewportWidth: 414,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  
  },
  //"retries":{
   // "openMode": 3,
   // "runMode": 2,
  //},
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    testIsolation: false,
    video: true,
  }
  
});
