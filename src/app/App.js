import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from './../styled/theme';
import Header from './Header';
import Main from './Main';
import NotFound from './NotFound';
import Puzzles from './../views/Puzzles/index.js';
import otherPuzzleCategories from './../puzzleData/otherPuzzleCategories';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div>
          <Header />
          <Route
            exact
            path="/"
            render={() => <Main><Puzzles category="popular" /></Main>}
          />
          <Route
            path="/:category"
            render={({ match }) => {
              // const otherCategories = ['latest', 'favourite'];
              if (otherPuzzleCategories.includes(match.params.category)) {
                return (
                  <Main><Puzzles category={match.params.category} /></Main>
                );
              } else {
                return <Main><NotFound /></Main>;
              }
            }}
          />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
