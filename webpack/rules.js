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

const sassRule = {
  test: /\.(sass|scss)$/,
  use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
};

const rules = [
  jsRule, cssRule, sassRule
];

module.exports = rules;
