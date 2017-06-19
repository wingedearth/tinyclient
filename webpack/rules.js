const jsRule = {
  use: 'babel-loader',
  test: /\.(js|jsx)$/,
  exclude: /node_modules/
};

const rules = [
  jsRule
];

module.exports = rules;
