

// /** @type { import('@storybook/react-vite').StorybookConfig } */
// const config = {
//   "stories": [
//     "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
//   ],
//   "addons": [],
//   "framework": {
//     "name": "@storybook/react-vite",
//     "options": {}
//   }
// };
// export default config;



// .storybook/main.js
/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../src/**/*.stories.@(js|jsx|ts|tsx)", // finds stories anywhere in src/
  ],
  addons: [],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  }
};

export default config;
