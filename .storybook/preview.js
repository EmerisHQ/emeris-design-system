import "virtual:windi.css";
import '../src/assets/scss/index.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    clearable: false,
    list: [{
      name: 'Light',
      class: ['light'],
      color: '#ffffff',
      default: true
    }, {
      name: 'Dark',
      // The class dark will be added to the body tag
      class: ['dark'],
      color: '#000000'
    }]
  }
};

export const globalTypes = {
  darkMode: true,
};
