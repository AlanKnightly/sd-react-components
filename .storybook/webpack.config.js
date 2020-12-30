// https://stackoverflow.com/questions/60634295/resolve-absolute-alias-imports-in-components-with-storybook
const path = require('path');
module.exports = (baseConfig) => {
  baseConfig.config.module.rules.push({
    test: /\.less$/,
    loaders: ['style-loader', 'css-loader', 'less-loader'],
    include: path.resolve(__dirname, '../src/'),
  });
  baseConfig.config.resolve.alias = {
    ...baseConfig.config.resolve.alias,
    "@": path.resolve(__dirname, "../src")
  };
  return baseConfig.config;
};




// const path = require("path");
// module.exports = ({ config }) => {
//   // a bunch of other rules here

//   config.module.rules.push(
//     {
//       test: /\.less$/,
//       use: [
//         require.resolve('style-loader'),
//         {
//           loader: require.resolve('css-loader'),
//           options: {
//             modules: true,
//             importLoaders: 1,
//             localIdentName: '[name]__[local]___[hash:base64:5]'
//           },
//         },
//         require.resolve('less-loader')
//       ]
//     },
//   );
//   return config;
// };