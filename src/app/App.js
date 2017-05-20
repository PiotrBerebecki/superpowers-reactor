import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from './../styled/theme';
import Header from './Header';
import Puzzles from './../views/Puzzles/index.js';

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <div>
            <Header />
            <Route
              exact
              path="/"
              render={() => <Puzzles category="popular" />}
            />
            <Route
              path="/:category"
              render={({ match }) => (
                <Puzzles category={match.params.category} />
              )}
            />
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
