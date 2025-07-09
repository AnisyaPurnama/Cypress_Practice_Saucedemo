const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const createCucumberPlugin = require("@badeball/cypress-cucumber-preprocessor");


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
    specPattern: ["**/*.feature", "cypress/e2e/**/*.{cy,spec}.{js,ts}"],
    baseUrl: "https://www.saucedemo.com",
    supportFile: "cypress/support/e2e.js",
    screenshotOnRunFailure: true,
    video: true,                 // explicitly enable video recording
    defaultCommandTimeout: 5000, // optional increased timeout
    trashAssetsBeforeRuns: true, // clean old videos/screenshots before tests
    testIsolation: false,
    watchForFileChanges: false,
    chromeWebSecurity: false,
    blockHosts: ["https://events.backtrace.io"],

    async setupNodeEvents(on, config) {
      // Cucumber
      await createCucumberPlugin.addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      //Mochawesome
      require("cypress-mochawesome-reporter/plugin")(on);

      return config;
    },
  },
});
