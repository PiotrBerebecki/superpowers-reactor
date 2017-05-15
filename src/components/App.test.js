import React from 'react';
import renderer from 'react-test-renderer';

import App from './App.js';

describe('App', () => {
  it('Runs test suite', () => {
    expect(2).toEqual(2);
  });

  // it('renders component correctly', () => {
  //   const component = renderer.create(<App />);
  //
  //   let tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});
