const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    video: true,                 // explicitly enable video recording
    defaultCommandTimeout: 5000, // optional increased timeout
    trashAssetsBeforeRuns: true, // clean old videos/screenshots before tests
    testIsolation: false,
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
