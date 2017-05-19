import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { AppContainer } from 'react-hot-loader';

import './styled/reset';
import App from './app/App';

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('root')
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app/App', () => {
    console.clear();
    const NextApp = require('./app/App').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
