import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import PuzzleItem from './PuzzleItem';
import { AnswerButton, AnswerText } from './../../styled';

describe('PuzzleItem', () => {
  const testPuzzle = {
    id: 1,
    title: 'Test title',
    text: 'Test text',
    answer: '======Test answer',
    favCount: 99,
    isUserFavourite: true,
  };

  it('toggles answer', () => {
    const wrapper = shallow(<PuzzleItem {...testPuzzle} />);

    // click to show the answer
    wrapper.find(AnswerButton).simulate('click');
    let answer = wrapper.find(AnswerText);

    expect(answer.exists()).toBe(true);
    expect(answer.children().text()).toEqual(testPuzzle.answer);

    // click again to hide the answer
    wrapper.find(AnswerButton).simulate('click');

    answer = wrapper.find(AnswerText);
    expect(answer.exists()).toBe(false);
  });
});
