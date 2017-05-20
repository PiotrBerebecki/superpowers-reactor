import React from 'react';
import { shallow } from 'enzyme';
import { HeaderWrapper, NavContainer, NavMenuLink } from './index';

describe('HeaderWrapper', () => {
  it('renders a prop', () => {
    const id = 'testId';
    const wrapper = shallow(<HeaderWrapper id={id} />);
    expect(wrapper.prop('id')).toEqual(id);
  });
});

describe('NavContainer', () => {
  it('renders its children', () => {
    const children = 'testText';
    const wrapper = shallow(<NavContainer>{children}</NavContainer>);
    expect(wrapper.contains(children)).toBe(true);
  });
});

describe('NavMenuLink', () => {
  it('renders its text', () => {
    const children = 'testText';
    const wrapper = shallow(<NavMenuLink to="/">{children}</NavMenuLink>);
    expect(wrapper.contains(children)).toBe(true);
  });
});
