const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
    new ExtractTextPlugin('style.css?[contenthash]'),
    new HtmlWebpackPlugin({
      title: 'David Lane',
      template: './src/index.ejs',
      filename: '../index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract({
              loader: 'css-loader',
              fallbackLoader: 'vue-style-loader'
            })
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['es2015', {modules: false}],
            'stage-2'
          ]
        }
      }
    ]
  },
  devServer: {
    port: 8080,
    historyApiFallback: true
  }
};
