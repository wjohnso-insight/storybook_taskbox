import '../src/index.css';

// "[T]ypically used to control the behavior of Storybook's features and addons."
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
