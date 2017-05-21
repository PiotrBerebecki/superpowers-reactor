import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
  it('passes relevant prop to home view', () => {
    const wrapper = shallow(<App />);
    const homeRoute = wrapper
      .find('Route')
      .findWhere(route => route.props().path === '/');

    const componentRenderedByRoute = homeRoute.props().render();
    expect(componentRenderedByRoute.props.category).toEqual('popular');
  });
});
