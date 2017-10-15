const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCss = (env) => new ExtractTextPlugin({
    filename: '[name].[contenthash].css',
    disable: env === 'development'
})

module.exports = {

  entry: [
    './popup/src/index.js'
  ],

  output: {
    filename: 'popup.js',
    path: path.join(__dirname, '../', 'build'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.json'],
    modules: ['node_modules']
  },

  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      },
      {
          test: /\.css$/,
          use: extractCss().extract({
              use: [
                  { loader: 'css-loader' },
                  {
                      loader: 'postcss-loader',
                      options: {
                          plugins: (loader) => [
                              require('postcss-import')({ root: loader.resourcePath }),
                              require('postcss-cssnext')(),
                              require('cssnano')(),
                          ],
                      },
                  },
              ],
              fallback: 'style-loader' // Use style-loader in development
          })
      },
      {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: [
              'url-loader?limit=10000',
              'img-loader'
          ]
      }
    ]
  },
  plugins: [
      new ExtractTextPlugin('styles.css'), // CSS will be extrated into this file in the build directory
      new HtmlWebpackPlugin({ // Generate the HTML index
          filename: 'popup.html',
          template: path.join(path.join(__dirname, 'src'), 'index.html'),
          title: process.env.npm_package_name,
      }),
  ],
};


