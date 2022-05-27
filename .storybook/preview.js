import '../src/assets/scss/index.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // themes: {
  //   clearable: false,
  //   list: [{
  //     name: 'Light',
  //     class: ['light'],
  //     color: '#ffffff',
  //     default: true
  //   }, {
  //     name: 'Dark',
  //     // The class dark will be added to the body tag
  //     class: ['dark'],
  //     color: '#000000'
  //   }]
  // },
  darkMode: {
    stylePreview: true,
    classTarget: 'html',
    darkClass: 'dark',
    lightClass: 'light',
    // // Override the default dark theme
    // dark: { ...themes.dark, appBg: 'black' },
    // // Override the default light theme
    // light: { ...themes.normal, appBg: 'red' }
  }
};

export const globalTypes = {
  darkMode: true,
};
