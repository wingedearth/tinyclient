const ExtractTextPlugin = require('extract-text-webpack-plugin');

const jsRule = {
  use: ['react-hot-loader/webpack', 'babel-loader'],
  test: /\.(js|jsx)$/,
  exclude: /node_modules/
};

const cssRule = {
  test: /\.css$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: 'css-loader'
  })
};

const rules = [
  jsRule, cssRule
];

module.exports = rules;
