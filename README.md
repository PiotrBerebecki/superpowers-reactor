[![Build Status](https://travis-ci.org/PiotrBerebecki/superpowers-reactor.svg?branch=master)](https://travis-ci.org/PiotrBerebecki/superpowers-reactor)
[![codecov](https://codecov.io/gh/PiotrBerebecki/superpowers-reactor/branch/master/graph/badge.svg)](https://codecov.io/gh/PiotrBerebecki/superpowers-reactor)

# Superpowers Reactor

## Tech stack
- **UI**: react
- **State**: redux
- **Persisting data**: localStorage
- **Styling**: styled-components
- **Testing**: jest, enzyme, jest-styled-components
- **Continuous integration**: Travis CI

## Cool stuff I've learnt:

- Migrating to Webpack 2: http://javascriptplayground.com/blog/2016/10/moving-to-webpack-2/
- Getting starter with Webpack 2 https://blog.madewithenvy.com/getting-started-with-webpack-2-ed2b86c68783
- Babel preset ordering: https://babeljs.io/docs/plugins/#plugin-preset-ordering
- Webpack loaders execute transforms on a per-file basis. Webpack plugins are most commonly used (but not limited to) performing actions and custom functionality on "compilations" or "chunks" of your bundled modules https://webpack.js.org/concepts/#plugins
- Webpack Hot Module Replacement with React https://webpack.js.org/guides/hmr-react/
- Webpack Hot Module Replacement exchanges, adds, or removes modules while an application is running without a page reload. This allows you to speed up development time by updating individual modules when they are changed without refreshing the page.
- Jest throwing errors when importing css files http://facebook.github.io/jest/docs/en/webpack.html#mocking-css-modules
- Webpack config for production https://webpack.js.org/guides/production-build/
- Testing components which include react-router components https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/testing.md#testing
- Use [pre-push](https://www.npmjs.com/package/pre-push) module to run tests before every push to ensure that broken code is not published.
- If using redux-saga you get `regeneratorRuntime` error you may need `babel-polyfill`. https://github.com/redux-saga/redux-saga#using-umd-build-in-the-browser, https://babeljs.io/docs/usage/polyfill/
- Listen to URL changes thanks to `withRouter` HOC from `react-router-dom` https://github.com/ReactTraining/react-router/issues/3554#issuecomment-299626161
- Whn testing redux connected components export plain undecorated component: http://redux.js.org/docs/recipes/WritingTests.html#connected-components
- Change testing environment to `jsdom` if getting error: `It looks like you called mount() without a global document being loaded`
- Test error handling in `redux-sage` with `throw()` applied on iterator https://github.com/redux-saga/redux-saga/blob/master/docs/basics/ErrorHandling.md#error-handling
- Use `lodash/throttle` to minimise the number of times store.subscribe callball is executed (once a second) https://egghead.io/lessons/javascript-redux-persisting-the-state-to-the-local-storage
