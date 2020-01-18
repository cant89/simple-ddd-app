const webpack = require('webpack');
const S3Plugin = require('webpack-s3-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const {
  commonGlobals,
  devtool,
  entry,
  output,
  resolve,
  modules,
  plugins,
  devServer
} = require('./webpack.common');

module.exports = {
  mode: 'development',
  devtool,
  entry,
  output,
  resolve,
  module: modules,
  devServer,
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
