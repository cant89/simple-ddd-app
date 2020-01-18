const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const S3Plugin = require('webpack-s3-plugin');
const {
  commonGlobals,
  output,
  resolve,
  modules,
  plugins
} = require('./webpack.common');

module.exports = {
  mode: 'production',
  output,
  resolve,
  module: modules,
  plugins: [
    ...plugins,
    new CleanWebpackPlugin({
      verbose: true
    }),
    new webpack.DefinePlugin({
      ...commonGlobals,
      API_BASE_URL: {
        MOCKAPI: JSON.stringify('https://jsonplaceholder.typicode.com')
      }
    })
  ]
};
