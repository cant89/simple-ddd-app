const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const appTitle = 'Frontend Boilerplate';
const srcPath = path.resolve(__dirname, '../src/');
const buildPath = path.resolve(__dirname, '../build');
const { version } = require('../package');

const getSubDirSrcPath = subdir => path.join(__dirname, '../src', subdir);

module.exports = {
  devtool: 'inline-source-map',
  entry: ['babel-polyfill', srcPath],
  output: {
    path: buildPath,
    filename: `[name]-v${version}.[hash].js`,
    publicPath: '/',
    sourceMapFilename: `[name]-v${version}.[hash].map`
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.svg'],
    alias: {
      '#/domains': getSubDirSrcPath('domains'),
      '#/shared': getSubDirSrcPath('shared'),
      '#/store': getSubDirSrcPath('store'),
      '#/themes': getSubDirSrcPath('themes'),
      '#/pages': getSubDirSrcPath('pages')
    }
  },
  modules: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$\.svg$/i,
        loader: 'url-loader?name=/img/[name].[ext]'
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=1024&name=fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: appTitle,
      inject: true,
      template: 'index.ejs',
      filename: 'index.html'
    })
  ],
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    overlay: true,
    historyApiFallback: true
  },
  commonGlobals: {}
};
