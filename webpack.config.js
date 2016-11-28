const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: '#source-map',
  entry: {
    app: './src/main.js'
  },
  output: {
    filename: '[name].js?[hash]',
    path: `${__dirname}/docs/`,
    publicPath: '/docs/'
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
      filename: '../index.html'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader?sourceMap'
        })
      },
      {
        test: /\.js$/,
        loaders: [
          'babel-loader'
            + '?presets[]=es2015'
            + '&presets[]=stage-2'
            + '&cacheDirectory'
        ],
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    port: 8080
  }
};
