const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "x6yxzp",
  e2e: {
    baseUrl: "https://petstore.swagger.io",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
