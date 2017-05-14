// install modules:
// - babel-eslint
// - eslint
// - eslint-plugin-react

module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['react'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    'no-console': 0,
    'no-unused-vars': 0,
    'react/prop-types': 0,
  },
};
