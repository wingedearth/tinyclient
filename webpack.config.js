/* eslint no-process-env: 0 */
const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const _ = require('lodash');
const rules = require('./webpack/rules');
const plugins = require('./webpack/plugins');

const config = {
  devtool: 'inline-source-map',
  output: {
    publicPath: '/build',
    path: path.join(__dirname, 'build'),
    filename: 'js/[name].js'
  },
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules'
    ]
  },
  module: {
    rules
  }
};

const frontend = _.merge({}, config, {
  name: 'frontend',
  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client?name=frontend',
      './src/client/app.js',
      './src/client/scss/main.scss'
    ]
  },
  plugins: plugins.frontend
});

const backend = _.merge({}, config, {
  name: 'backend',
  entry: {
    server: [
      './src/server/server.js',
      './src/client/scss/main.scss'
    ]
  },
  output: {
    libraryTarget: 'commonjs2'
  },
  plugins: plugins.backend,
  target: 'node',
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false
  },
  externals: [nodeExternals()]
});

module.exports = [backend, frontend];
