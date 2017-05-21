// install modules:
// - babel-eslint
// - eslint
// - eslint-plugin-react

module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['react'],
  parser: 'babel-eslint',
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
    jasmine: true,
  },
  rules: {
    'no-console': 0,
    'no-unused-vars': 0,
    'react/prop-types': 0,
  },
};
