import styled from "styled-components";
import { animated } from "react-spring";

export const CardContainer = styled(animated.div)`
  max-width: 100%;
  background-color: #f9f7fc;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 0.5fr 2fr;
  justify-content: center;
  align-items: center;
  justify-items: center;
  cursor: pointer;
  margin: 10px;

  &:hover {
    transform: scale(1.05);
  }
`;
export const CardImg = styled.img`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  height: 156px;
  width: 156px;
  padding: 15px;
`;
export const CardName = styled.p`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  font-weight: var(--font-weight-normal);
  font-size: 1.8rem;
  letter-spacing: 1px;
  margin: 10px 0;
`;
export const CardTypes = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  height: 100%;
  display: flex;
  justify-self: flex-start;
`;
export const CardType = styled.p`
  width: 44px;
  font-family: var(--font-family);
  font-weight: var(--font-weight-normal);
  font-size: 2rem;
  letter-spacing: 1.5px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.bgcolor};
  color: ${(props) => props.textColor};
  writing-mode: vertical-rl;
`;
