/**
 * @jest-environment node
 */

import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { MemoryRouter } from 'react-router-dom';
import 'jest-styled-components';

import Main from './Main';

describe('Main', () => {
  it('renders', () => {
    const wrapper = shallow(<Main />);
    expect(shallowToJson(wrapper)).toMatchStyledComponentsSnapshot();
  });
});
