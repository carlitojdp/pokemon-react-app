import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const FooterContainer = styled.footer`
  padding: 2em;
  height: 100px;
  background-color: #f97049;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ece9f4;
`;

export const FooterNavList = styled.ul`
  width: 100%;
  max-width: 380px;
  display: flex;
  justify-content: space-between;
`;

export const FooterNavLink = styled(LinkScroll)`
  font-family: var(--font-family);
  font-weight: var(--font-weight-bold);
  font-size: 1.8rem;
  letter-spacing: 1px;
  cursor: pointer;
`;

export const FooterTradeMark = styled.p`
  display: none;
`;

export const FooterSocials = styled.ul`
  list-style: none;
  width: 100%;
  max-width: 380px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

export const FooterSocialsItem = styled.li`
  text-decoration: none;
  font-size: 20px;
  margin: 0 10px;
  cursor: pointer;
`;
