const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: ['babel-polyfill', path.resolve(__dirname, 'src', 'index.js')],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // necessary for HMR to know where to load the hot update chunks
    publicPath: './',
  },

  devtool: 'cheap-module-source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { modules: true } },
        ],
      },
      {
        test: /\.svg$/,
        use: 'file-loader',
      },
    ],
  },

  plugins: [
    // create html file
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true,
      filename: 'index.html',
    }),

    // minify everything
    new webpack.optimize.UglifyJsPlugin(),

    // merge chunks
    new webpack.optimize.AggressiveMergingPlugin(),
  ],
};
