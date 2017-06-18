const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const _ = require('lodash');

const config = {
  devtool: 'inline-source-map',
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  },
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules'
    ]
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/
      }
    ]
  }
};

const frontend = _.merge({}, config, {
  entry: {
    app: path.resolve(__dirname, 'src', 'client', 'app.js')
  }
});

const backend = _.merge({}, config, {
  entry: {
    server: path.resolve(__dirname, 'src', 'server', 'server.js')
  },
  output: {
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
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
