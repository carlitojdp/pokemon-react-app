import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const HeaderContainer = styled.header`
  position: fixed;
  z-index: 9999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 70px;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
  background: ${({ scrollOffset }) =>
    scrollOffset ? "rgba(249, 131, 73, 0.95)" : "transparent"};
  padding: 2em;

  @media screen and (min-width: 768px) {
    padding: 4.5em 6em;
  }
`;

export const NavbarContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;

export const NavbarLogo = styled(LinkScroll)`
  font-weight: var(--font-weight-normal);
  font-size: 2.6rem;
  color: var(---color-primary);
  cursor: pointer;
  padding: 0.3em 0.6em;
  padding-left: 0;
`;

export const NavbarPokeball = styled.img`
  cursor: pointer;
  padding: 0.3em 0.6em;
`;
