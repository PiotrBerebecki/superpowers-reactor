import React, { Component } from 'react';

import { Main } from './../styled';

class Puzzles extends Component {
  render() {
    return (
      <Main>
        Puzzles {this.props.category}
      </Main>
    );
  }
}

export default Puzzles;
