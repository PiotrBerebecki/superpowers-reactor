import React from 'react';
import renderer from 'react-test-renderer';

import Puzzles from './Puzzles';

describe('Puzzles', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Puzzles />);
    expect(tree).toMatchSnapshot();
  });
});
