import React, { Component } from 'react';

import {
  MainWrapper,
  MainContainer,
  PuzzleList,
  PuzzleItem,
} from './../../styled';

class Puzzles extends Component {
  render() {
    return (
      <MainWrapper>
        <MainContainer>
          <PuzzleList>
            <PuzzleItem>{this.props.category}</PuzzleItem>
            <PuzzleItem>Puzzle 01</PuzzleItem>
            <PuzzleItem>Puzzle 02</PuzzleItem>
            <PuzzleItem>Puzzle 03</PuzzleItem>
            <PuzzleItem>Puzzle 04</PuzzleItem>
            <PuzzleItem>Puzzle 05</PuzzleItem>
            <PuzzleItem>Puzzle 06</PuzzleItem>
            <PuzzleItem>Puzzle 07</PuzzleItem>
            <PuzzleItem>Puzzle 08</PuzzleItem>
            <PuzzleItem>Puzzle 09</PuzzleItem>
            <PuzzleItem>Puzzle 10</PuzzleItem>
            <PuzzleItem>Puzzle 11</PuzzleItem>
            <PuzzleItem>Puzzle 12</PuzzleItem>
          </PuzzleList>
        </MainContainer>
      </MainWrapper>
    );
  }
}

export default Puzzles;
