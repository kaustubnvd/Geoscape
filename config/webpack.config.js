const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  module: {
    rules: [
      { test: /\.jsx?$/, use: 'babel-loader' },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
            },
          },
          'sass-loader',
        ],
        include: /\.module\.scss$/,
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /\.module\.scss$/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/images/favicon.ico'
    }),
    new CopyPlugin({patterns: [{ from: '_redirects' }]}),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'bundle.[contentHash].js',
    publicPath: '/',
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
};
