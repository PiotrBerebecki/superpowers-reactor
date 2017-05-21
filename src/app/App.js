import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from './../styled/theme';
import Header from './Header';
import NotFound from './NotFound';
import Puzzles from './../views/Puzzles/index.js';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div>
          <Header />

          <Switch>
            <Route
              exact
              path="/"
              render={() => <Puzzles category="popular" />}
            />
            <Route path="/latest" component={Puzzles} />
            <Route path="/favourite" component={Puzzles} />
            <Route component={NotFound} />
          </Switch>

        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
