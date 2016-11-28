const webpack = require('webpack');
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
    new HtmlWebpackPlugin({
      title: 'David Lane',
      template: './src/index.ejs',
      filename: '../index.html'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
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
