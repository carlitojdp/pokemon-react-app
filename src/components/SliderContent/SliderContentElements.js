import styled from "styled-components";
import { animated } from "react-spring";
export const ContentContainer = styled(animated.div)`
  transform: translateX(${(props) => props.translate}%);
  transition: all 0.3s ease-in;
  width: 100%;
  height: 100%;
  display: flex;
`;
