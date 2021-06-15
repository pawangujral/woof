const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { join } = require('path');

module.exports = merge(common, {
  cache: true,
  devServer: {
    compress: false,
    contentBase: join(__dirname, 'dist'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    overlay: true,
    writeToDisk: false,
  },
  devtool: 'cheap-module-eval-source-map',
  mode: 'development',
  watch: true,
  watchOptions: {
    ignored: /node_modules/u,
  },
  performance: {
    hints: false,
  },
});
