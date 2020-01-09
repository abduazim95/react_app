const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'sourcemap',
  devServer: { historyApiFallback: true },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  resolve: {
    extensions: [ '.js', '.jsx' ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      // jquery
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      tether: 'tether',
      Tether: 'tether'
    })
  ]
};
