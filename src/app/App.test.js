import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import App from './App.js';

describe('App', () => {
  it('renders component correctly', () => {
    const component = renderer.create(<App />);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('passes relevant prop to home view', () => {
    const component = shallow(<App />);
    const homeRoute = component
      .find('Route')
      .findWhere(route => route.props().path === '/');

    const homeComponent = homeRoute.props().render();
    expect(homeComponent.props.category).toEqual('latest');
  });

  it('passes relevant prop to other views', () => {
    const component = shallow(<App />);
    const otherRoute = component
      .find('Route')
      .findWhere(route => route.props().path === '/:category');

    const otherComponent = otherRoute
      .props()
      .render({ match: { params: { category: 'trending' } } });
    expect(otherComponent.props.category).toEqual('trending');
  });
});
