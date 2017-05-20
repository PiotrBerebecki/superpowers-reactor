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

    const homeComponent = homeRoute.props().render();
    expect(typeof homeComponent.props.category === 'string').toBe(true);
  });

  it('passes relevant prop to other views', () => {
    const wrapper = shallow(<App />);
    const otherRoute = wrapper
      .find('Route')
      .findWhere(route => route.props().path === '/:category');

    const otherComponent = otherRoute
      .props()
      .render({ match: { params: { category: 'trending' } } });
    expect(otherComponent.props.category).toEqual('trending');
  });
});
