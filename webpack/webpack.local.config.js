const webpack = require('webpack');

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
  devServer,
  module: modules,
  plugins: [
    ...plugins,
    new webpack.DefinePlugin({
      ...commonGlobals,
      API_BASE_URL: {
        MOCKAPI: JSON.stringify('https://jsonplaceholder.typicode.com'),
        CUSTOMERS: JSON.stringify('http://localhost:3001/api/')
      }
    })
  ]
};
