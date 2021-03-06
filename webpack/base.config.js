const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    path.resolve(__dirname, '../src/js/index.js'),
    path.resolve(__dirname, '../src/css/style.scss')
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/bundle.js'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'bridiedibble.com',
      template: path.resolve(__dirname, '../src/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: "css/style.css"
    }),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../src/images'),
      to: 'images'
    }])
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: {} },
          {
            loader: "postcss-loader",
            options: {
              ident: 'postcss',
              plugins: [
                require('autoprefixer')({
                  'browsers': ['> 1%', 'last 2 versions']
                }),
              ]
            }
          },
          { loader: "sass-loader", options: {} }
        ]
      }
    ]
  }
};
