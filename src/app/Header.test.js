/**
 * @jest-environment node
 */

import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { MemoryRouter } from 'react-router-dom';
import 'jest-styled-components';

import Header from './Header';

describe('Header', () => {
  test('renders correctly', () => {
    const wrapper = shallow(<Header />);
    expect(shallowToJson(wrapper)).toMatchStyledComponentsSnapshot();
  });
});
