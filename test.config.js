const { defineConfig } = require("cypress");
const cypressSplit = require('cypress-split')
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    videoOnFailOnly: false,
    saveAllAttempts: false
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      cypressSplit(on, config)
      require('cypress-mochawesome-reporter/plugin')(on);
      return config
    },
  },
});
