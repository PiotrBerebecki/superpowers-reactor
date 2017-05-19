import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Header from './Header';
import Puzzles from './../views/Puzzles';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" render={() => <Puzzles category="latest" />} />
          <Route
            path="/:category"
            render={({ match }) => <Puzzles category={match.params.category} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
