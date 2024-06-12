const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://api.dev.bee2pay.com',
    supportFile: 'cypress/support/commands.js'
  },
});
