const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity:false,
  projectId: "g653gi",
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    html: true,
    reportDir: 'cypress/reports'
  },
  
  e2e: {

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl:"https://opensource-demo.orangehrmlive.com/",
    viewportWidth: 1280,
    viewportHeight: 720,
    watchForFileChanges:false,
    autoRefresh:false,
    testIsolation:false,
     defaultCommandTimeout: 8000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      config.specPattern = [
        'cypress/e2e/orangehrm_e2e_POM.cy.js', 
      ]
      return config;
    },
  },
  "hideXHR": true
});