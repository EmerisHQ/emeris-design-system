const path = require("path");

const WindiCSS = require("vite-plugin-windicss").default;

module.exports = {
  stories: ['../src/components/**/*.stories.js'],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", 'storybook-addon-themes', 'storybook-dark-mode'],
  core: {
    builder: "@storybook/builder-vite"
  },

  async viteFinal(config, {
    configType
  }) {
    config.plugins = config.plugins ?? [];
    config.plugins.push(WindiCSS({
      config: path.join(__dirname, "..", "windi.config.ts") // that was my missing piece

    }));
    return config;
  }

};