const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const src = __dirname + '/src';
const dest = __dirname + '/docs';

module.exports = {
  devtool: '#source-map',
  debug: true,
  cache: true,
  entry: {
    app: `${src}/main.js`
  },
  output: {
    filename: '[name].js?[hash]',
    path: `${dest}/`
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
          'ng-annotate',
          'babel'
            + '?presets[]=es2015'
            + '&presets[]=stage-2'
            + '&cacheDirectory'
        ],
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    port: 8080
  }
};
