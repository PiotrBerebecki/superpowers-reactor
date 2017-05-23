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
    const { id, title, text, answer, isFavourite } = this.props;
    return (
      <PuzzleItemWrapper>
        <PuzzleTitle>{title}</PuzzleTitle>
        <PuzzleText>{text}</PuzzleText>
        <AnswerButton onClick={this.toggleAnswer}>
          {this.state.isAnswerVisible ? 'Hide Answer' : 'Show Answer'}
        </AnswerButton>
        {this.state.isAnswerVisible && <AnswerText>{answer}</AnswerText>}
      </PuzzleItemWrapper>
    );
  }
}

export default PuzzleItem;
