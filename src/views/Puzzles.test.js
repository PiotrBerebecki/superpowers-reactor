/**
 * @jest-environment node
 */

import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';

import Puzzles from './Puzzles';

describe('Puzzles', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Puzzles />);
    expect(tree).toMatchStyledComponentsSnapshot();
  });

  test('renders without crashing', () => {
    const wrapper = shallow(<Puzzles />);
    expect(shallowToJson(wrapper)).toMatchStyledComponentsSnapshot();
  });
});
