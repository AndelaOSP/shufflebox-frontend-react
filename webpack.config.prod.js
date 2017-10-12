const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const commonConfig = require('./webpack.baseConfig.js');

process.env.NODE_ENV = 'production';

module.exports =  merge(commonConfig, {
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
});
