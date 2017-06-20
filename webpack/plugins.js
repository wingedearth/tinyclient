const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const backend = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new ExtractTextPlugin({
    filename: 'css/style.css',
    allChunks: true
  })
];

const frontend = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new ExtractTextPlugin({
    filename: 'css/style.css',
    allChunks: true
  })
];

module.exports = {backend, frontend};
