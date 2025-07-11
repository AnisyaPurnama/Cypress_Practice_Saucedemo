const { defineConfig } = require('cypress')
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const {
    createEsbuildPlugin,
} = require('@badeball/cypress-cucumber-preprocessor/esbuild')
const createCucumberPlugin = require('@badeball/cypress-cucumber-preprocessor')

module.exports = defineConfig({
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
        reportDir: 'cypress/reports/html',
        charts: true,
        reportPageTitle: 'Cypress Test Report',
        embeddedScreenshots: true,
        inlineAssets: true,
        saveAllAttempts: false,
    },

    e2e: {
        //specPattern: ["**/*.feature", "cypress/e2e/**/*.{cy,spec}.{js,ts}"],
        specPattern: 'cypress/e2e/**/*.feature',
        baseUrl: 'https://www.saucedemo.com',
        supportFile: 'cypress/support/e2e.js',
        screenshotOnRunFailure: true,
        video: true,
        defaultCommandTimeout: 5000,
        trashAssetsBeforeRuns: true, // clean old videos/screenshots before tests
        testIsolation: false,
        watchForFileChanges: false,
        chromeWebSecurity: false,
        blockHosts: ['https://events.backtrace.io'],

        async setupNodeEvents(on, config) {
            //Mochawesome
            require('cypress-mochawesome-reporter/plugin')(on)

            // Cucumber
            await createCucumberPlugin.addCucumberPreprocessorPlugin(on, config)

            // esbuild for .feature files
            on(
                'file:preprocessor',
                createBundler({
                    plugins: [createEsbuildPlugin(config)],
                })
            )

            return config
        },
    },
})
