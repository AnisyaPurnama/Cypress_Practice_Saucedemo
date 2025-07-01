const { defineConfig } = require("cypress");

module.exports = defineConfig({
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports/html',
      overwrite: false,
      html: false, // we'll generate HTML after merging JSON
      json: true
    },

  e2e: {
    watchForFileChanges: false,
    video: true,                 // explicitly enable video recording
    defaultCommandTimeout: 5000, // optional increased timeout
    trashAssetsBeforeRuns: true, // clean old videos/screenshots before tests
    testIsolation: false,
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",
    watchForFileChanges: false,
    chromeWebSecurity: false,
    blockHosts: ["https://events.backtrace.io"],

    setupNodeEvents(on, config) {
      on('after:spec', (spec, results) => {
        if (results && results.failures) {
          console.log(`Spec ${spec.name} finished with failures`);
        }
      });
    },
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",
    watchForFileChanges: false,
    chromeWebSecurity: false,
    blockHosts: ["https://events.backtrace.io"],
  },
});
