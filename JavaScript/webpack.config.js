var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'assets/js'),
  entry: {
    react: './play.jsx'//ここを増やす
  },
  output: {
    path: path.resolve(__dirname, 'public/js/react'),
    filename: 'play.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015','react'],
          plugins: ['transform-runtime']
        },
      }
    ],
  },
};
