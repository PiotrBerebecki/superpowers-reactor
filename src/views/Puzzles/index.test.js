/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';

import { Puzzles, mapStateToProps, mapDispatchToProps } from './index';

describe('Puzzles', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Puzzles puzzles={[{ title: 'testTitle' }]} />);
    expect(shallowToJson(wrapper)).toMatchStyledComponentsSnapshot();
  });

  it('calls componentDidMount', () => {
    const spy = jest.spyOn(Puzzles.prototype, 'componentDidMount');
    const wrapper = mount(
      <Puzzles
        puzzles={[{ title: 'test01' }]}
        getPuzzles={() => {}}
        match={{ path: 'testPath' }}
      />
    );
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });

  it('calls componentWillReceiveProps', () => {
    const spy = jest.spyOn(Puzzles.prototype, 'componentWillReceiveProps');
    const wrapper = mount(
      <Puzzles puzzles={[]} category="sameCategory" getPuzzles={() => {}} />
    );
    wrapper.instance().componentWillReceiveProps({ category: 'sameCategory' });
    expect(spy).toHaveBeenCalled();
  });

  it('calls componentWillReceiveProps', () => {
    const spy = jest.spyOn(Puzzles.prototype, 'componentWillReceiveProps');
    const wrapper = mount(
      <Puzzles puzzles={[]} category="someCategory" getPuzzles={() => {}} />
    );
    wrapper
      .instance()
      .componentWillReceiveProps({ category: 'differentCategory' });
    expect(spy).toHaveBeenCalled();
  });
});

describe('mapStateToProps', () => {
  it('returns correct portion of the state', () => {
    const state = { puzzles: [], users: [] };
    const actual = mapStateToProps(state);
    expect(actual).toEqual({ puzzles: state.puzzles });
  });
});

describe('mapDispatchToProps', () => {
  it('returns an object', () => {
    const actual = mapDispatchToProps();
    expect(typeof actual).toEqual('object');
  });
});
