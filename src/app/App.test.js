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
    expect(
      typeof componentRenderedByRoute.props.children.props.category === 'string'
    ).toBe(true);
  });

  it('passes relevant prop to other views', () => {
    const wrapper = shallow(<App />);
    const otherRoute = wrapper
      .find('Route')
      .findWhere(route => route.props().path === '/:category');

    const otherCategory = 'latest';
    const componentRenderedByRoute = otherRoute
      .props()
      .render({ match: { params: { category: otherCategory } } });

    expect(componentRenderedByRoute.props.children.props.category).toEqual(
      otherCategory
    );
  });

  it('handles invalid route', () => {
    const wrapper = shallow(<App />);
    const otherRoute = wrapper
      .find('Route')
      .findWhere(route => route.props().path === '/:category');

    const invalidRoute = 'someInvalidRoute';
    const componentRenderedByRoute = otherRoute
      .props()
      .render({ match: { params: { category: invalidRoute } } });

    expect(componentRenderedByRoute.props.children.type.name).toEqual(
      'NotFound'
    );
  });
});
