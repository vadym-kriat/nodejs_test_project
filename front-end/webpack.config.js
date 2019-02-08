const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

module.exports = {
  entry: ['babel-polyfill', './src/index.jsx'],
  output: {
    path: path.join(__dirname, '../back-end/dist'),
    filename: '[hash]bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom'
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/static/html/template.html')
    }),
    new MiniCssExtractPlugin('[hash].bundle.css'),
    new WebpackCleanupPlugin({
      exclude: ['WEB-INF/*', 'META-INF/*']
    }),
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /\/node_modules\//,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react', 'stage-0']
        }
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader'
        ]
      }
    ]
  },
  devServer: {
    proxy: {
      '/api/*': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        ws: false
      }
    }
  },
};
