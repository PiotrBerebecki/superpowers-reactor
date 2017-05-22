import React, { Component } from 'react';

import {
  PuzzleItemWrapper,
  PuzzleTitle,
  PuzzleText,
  AnswerButton,
  AnswerText,
} from './../../styled';

class PuzzleItem extends Component {
  state = {
    isAnswerVisible: false,
  };

  toggleAnswer = () => {
    this.setState(prevState => ({
      isAnswerVisible: !prevState.isAnswerVisible,
    }));
  };

  render() {
    return (
      <PuzzleItemWrapper>
        <PuzzleTitle>{this.props.title}</PuzzleTitle>
        <PuzzleText>{this.props.text}</PuzzleText>
        <AnswerButton onClick={this.toggleAnswer}>Show Answer</AnswerButton>
        {this.state.isAnswerVisible &&
          <AnswerText>{this.props.answer}</AnswerText>}
      </PuzzleItemWrapper>
    );
  }
}

export default PuzzleItem;
