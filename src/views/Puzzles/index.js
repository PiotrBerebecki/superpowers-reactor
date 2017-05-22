import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import uuid from 'uuid/v4';

import { getPuzzles } from './actions';
import Main from './../../app/Main';
import PuzzleItem from './PuzzleItem';

import { MainWrapper, MainContainer, PuzzleList } from './../../styled';

export class Puzzles extends Component {
  getCategory = props => {
    return (
      props.category ||
      (props.match && props.match.path && props.match.path.slice(1))
    );
  };

  componentWillReceiveProps(nextProps) {
    const currentCategory = this.getCategory(this.props);
    const nextCategory = this.getCategory(nextProps);
    if (currentCategory !== nextCategory) {
      this.props.getPuzzles(this.getCategory(nextProps));
    }
  }

  componentDidMount() {
    this.props.getPuzzles(this.getCategory(this.props));
  }

  render() {
    const renderPuzzles = this.props.puzzles.map(puzzle => (
      <PuzzleItem key={uuid()} {...puzzle} />
    ));

    return (
      <Main>
        <PuzzleList>
          {renderPuzzles}
        </PuzzleList>
      </Main>
    );
  }
}

export const mapStateToProps = state => {
  return {
    puzzles: state.puzzles,
  };
};

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getPuzzles }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Puzzles);
