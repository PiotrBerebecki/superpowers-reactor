import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

import { media } from './theme';

export const HeaderWrapper = styled.header`
  padding-top: ${props => props.theme.spaceM};
  padding-left: ${props => props.theme.spaceS};
  padding-right: ${props => props.theme.spaceS};
  background-color: ${props => props.theme.colorPrimary};
  font-size: ${props => props.theme.fontSizeSmall};
  box-shadow: 0 1px 1px ${props => props.theme.colorBoxShadow},
              0px 2px 10px ${props => props.theme.colorBoxShadow};
`;

export const NavContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  ${props => props.theme.widthContainer}
`;

export const Nav = styled.nav`
  ${/* border: solid 3px green; */ ''}
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const NavItem = styled.li`
  ${/* border: solid 3px pink; */ ''}
`;

export const NavMenuLink = styled(NavLink).attrs({
  activeClassName: 'selected',
})`
  color: ${props => props.theme.colorAccentOnPrimaryMuted};
  text-transform: uppercase;
  text-decoration: none;
  transition: color .2s;
  &:hover {
    color: ${props => props.theme.colorAccentOnPrimary};
  }
  &.${props => props.activeClassName} {
    color: ${props => props.theme.colorAccentOnPrimary};
  }
  &:after {
    content: '';
    display: block;
    border-bottom: solid 3px ${props => props.theme.colorAccentOnPrimary};
    padding-bottom: 0.9rem;
    transform: scaleX(0);
    transition: transform .2s;
  }
  &.${props => props.activeClassName}:after {
    transform: scaleX(1);
    transition: transform .2s;
  }
`;

export const MainWrapper = styled.main`
  color: ${props => props.theme.colorFontMain};
  font-size: ${props => props.theme.fontSizeSmall};
`;

export const MainContainer = styled.section`
  margin-left: auto;
  margin-right: auto;
  padding-top: 0.6rem;
  padding-bottom: 1rem;
  ${props => props.theme.widthContainer}
  ${media.desktop`
    padding-top: 1.6rem;
  `}
`;

export const Card = css`
  ${media.desktop`
    box-shadow: 0 1px 1px ${props => props.theme.colorBoxShadowLight},
                0px 2px 10px ${props => props.theme.colorBoxShadowLight};
  `}
`;

export const PuzzleList = styled.ul`
  ${Card}
`;

export const PuzzleItem = styled.li`
  padding: ${props => props.theme.spaceM} ${props => props.theme.spaceS};
  border-bottom: solid 1px ${props => props.theme.colorPuzzleItemBorder};
  background-color: ${props => props.theme.colorWhiteBackground};
`;

export const ErrorCard = styled.div`
  ${Card}
  padding: ${props => props.theme.spaceL} ${props => props.theme.spaceS};
  background-color: ${props => props.theme.colorWhiteBackground};
`;
