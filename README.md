[![Build Status](https://travis-ci.org/PiotrBerebecki/superpowers-reactor.svg?branch=master)](https://travis-ci.org/PiotrBerebecki/superpowers-reactor)
[![codecov](https://codecov.io/gh/PiotrBerebecki/superpowers-reactor/branch/master/graph/badge.svg)](https://codecov.io/gh/PiotrBerebecki/superpowers-reactor)

# Superpowers Reactor

## Tech stack
- react
- redux
- styled-components
- jest
- enzyme
- jest-styled-components

## Further information

- Migrating to Webpack 2: http://javascriptplayground.com/blog/2016/10/moving-to-webpack-2/
- Getting starter with Webpack 2 https://blog.madewithenvy.com/getting-started-with-webpack-2-ed2b86c68783
- Babel preset ordering: https://babeljs.io/docs/plugins/#plugin-preset-ordering
- Webpack loaders execute transforms on a per-file basis. Webpack plugins are most commonly used (but not limited to) performing actions and custom functionality on "compilations" or "chunks" of your bundled modules https://webpack.js.org/concepts/#plugins
- Webpack Hot Module Replacement with React https://webpack.js.org/guides/hmr-react/
- Webpack Hot Module Replacement exchanges, adds, or removes modules while an application is running without a page reload. This allows you to speed up development time by updating individual modules when they are changed without refreshing the page.
- Jest throwing errors when importing css files http://facebook.github.io/jest/docs/en/webpack.html#mocking-css-modules
- Webpack config for production https://webpack.js.org/guides/production-build/
- Testing components which include react-router components https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/testing.md#testing

- CSS transform in package.json
"\\.(css|less)$": "<rootDir>/config/jest/cssTransform.js"
