// https://stackoverflow.com/questions/60634295/resolve-absolute-alias-imports-in-components-with-storybook

const path = require("path");
module.exports = ({ config }) => {
  // a bunch of other rules here
  config.resolve.alias = {
    ...config.resolve.alias,
    "@": path.resolve(__dirname, "../src")
  };
  return config;
};