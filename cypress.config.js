const { defineConfig } = require("cypress");

module.exports = defineConfig({
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports/html',
      charts: true,
      reportPageTitle: "Cypress Test Report",
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },

  e2e: {
    watchForFileChanges: false,
    screenshotOnRunFailure: true,
    video: true,                 // explicitly enable video recording
    defaultCommandTimeout: 5000, // optional increased timeout
    trashAssetsBeforeRuns: true, // clean old videos/screenshots before tests
    testIsolation: false,
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",
    watchForFileChanges: false,
    chromeWebSecurity: false,
    blockHosts: ["https://events.backtrace.io"],

    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",
    watchForFileChanges: false,
    chromeWebSecurity: false,
    blockHosts: ["https://events.backtrace.io"],
  },
});
