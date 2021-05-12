import styled from "styled-components";

export const SliderContainer = styled.div`
  position: relative;
  z-index: 99;
  width: 100%;
  height: 100vh;
  ${"" /* max-height: 960px; */}
  margin: 0 auto;
  display: flex;
  overflow: hidden;
`;

export const LeftArrow = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 50%;
  height: 100%;
  cursor: url(${(props) => props.arrow}), auto;
`;

export const RightArrow = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 50%;
  height: 100%;
  cursor: url(${(props) => props.arrow}), auto;
`;
