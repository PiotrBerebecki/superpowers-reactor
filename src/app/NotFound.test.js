/**
 * @jest-environment node
 */

import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { MemoryRouter } from 'react-router-dom';
import 'jest-styled-components';

import NotFound from './NotFound';

describe('NotFound', () => {
  it('renders', () => {
    const wrapper = shallow(<NotFound />);
    expect(shallowToJson(wrapper)).toMatchStyledComponentsSnapshot();
  });
});
