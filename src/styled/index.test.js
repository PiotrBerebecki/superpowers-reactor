import React from 'react';
import { shallow } from 'enzyme';
import {
  HeaderWrapper,
  NavContainer,
  NavMenuLink,
  MainWrapper,
  MainContainer,
  ErrorCard,
  PuzzleItem,
} from './index';

describe('HeaderWrapper', () => {
  it('renders a prop', () => {
    const id = 'testId';
    const wrapper = shallow(<HeaderWrapper id={id} />);
    expect(wrapper.prop('id')).toEqual(id);
  });
});

describe('NavContainer', () => {
  it('renders its children', () => {
    const children = <div>Hello</div>;
    const wrapper = shallow(<NavContainer>{children}</NavContainer>);
    expect(wrapper.contains(children)).toBe(true);
  });
});

describe('NavMenuLink', () => {
  it('renders its children', () => {
    const children = 'testText';
    const wrapper = shallow(<NavMenuLink to="/">{children}</NavMenuLink>);
    expect(wrapper.contains(children)).toBe(true);
  });
});

describe('MainWrapper', () => {
  it('renders its children', () => {
    const children = <div>Hello</div>;
    const wrapper = shallow(<MainWrapper>{children}</MainWrapper>);
    expect(wrapper.contains(children)).toBe(true);
  });
});

describe('MainContainer', () => {
  it('renders its children', () => {
    const children = 'testText';
    const wrapper = shallow(<MainContainer>{children}</MainContainer>);
    expect(wrapper.contains(children)).toBe(true);
  });
});

describe('ErrorCard', () => {
  it('renders its children', () => {
    const children = 'testText';
    const wrapper = shallow(<ErrorCard>{children}</ErrorCard>);
    expect(wrapper.contains(children)).toBe(true);
  });
});

describe('PuzzleItem', () => {
  it('renders its children', () => {
    const children = 'testText';
    const wrapper = shallow(<PuzzleItem>{children}</PuzzleItem>);
    expect(wrapper.contains(children)).toBe(true);
  });
});
