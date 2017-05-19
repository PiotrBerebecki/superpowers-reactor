import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

// media sizes
const sizes = {
  phone: 320,
  tablet: 480,
};

// iterate through the sizes and create media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.colorPrimary};
`;

export const NavContainer = styled.div`
  ${media.phone`
    background-color: lightcoral;
  `}

  ${media.tablet`
    background-color: green;
  `}
`;

export const Nav = styled.nav`
  ${/* border: solid 3px green; */ ''}
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  ${/* border: solid 3px purple; */ ''}
`;

export const NavItem = styled.li`
  ${/* border: solid 3px pink; */ ''}
`;

export const NavMenuLink = styled(NavLink)`
  color: ${props => props.theme.colorTextOnPrimary};
`;

export const Main = styled.main`
  background-color: #ddd;
`;
