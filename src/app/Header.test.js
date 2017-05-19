import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import Header from './Header';

describe('Header', () => {
  test('renders without crashing', () => {
    shallow(<Header />);
  });

  // test('renders without crashing', () => {
  //   const component = shallow(<Header />);
  // });

  test('renders correctly', () => {
    const tree = renderer
      .create(<MemoryRouter><Header /></MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
