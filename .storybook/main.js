const path = require("path");

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", 'storybook-addon-themes', 'storybook-dark-mode'],
  framework: "@storybook/vue",
  core: {
    builder: "@storybook/builder-vite"
  },
};