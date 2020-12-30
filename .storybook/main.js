module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    //https://github.com/storybookjs/storybook/issues/9796
    {
      name: "@storybook/preset-create-react-app",
      options: {
        craOverrides: {
          fileLoaderExcludes: ['less']
        }
      }
    }

  ],
  // webpackFinal: async config => {
  //   config.module.rules.push({
  //     test: /\.less$/,
  //     use: [
  //       { loader: 'style-loader' },
  //       { loader: 'css-loader', options: { modules: false } },
  //       { loader: 'less-loader', options: { javascriptEnabled: true } }
  //     ]
  //   });
  //   return config;
  // }
}