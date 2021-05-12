import styled from "styled-components";
import { animated } from "react-spring";
export const SlideContainer = styled(animated.div)`
  width: 100%;
  min-height: 620px;
  height: 100%;
  max-height: 960px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.bgcolor};
  padding: 2em;
  position: relative;
  flex-shrink: 0;
  @media screen and (min-width: 768px) {
    padding: 6em;
  }
`;

export const SlideImg = styled.img`
  width: 100%;
  max-width: 340px;

  @media screen and (min-width: 768px) {
    max-width: 480px;
  }
`;

export const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  justify-content: center;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    margin: initial;
  }
`;
export const SlideNumber = styled.span`
  font-size: 2.2rem;
  line-height: 0.5;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    font-size: 3.2rem;
  }
`;

export const SlideName = styled.p`
  display: inline;
  font-size: 2.7rem;
  letter-spacing: 1px;
  @media screen and (min-width: 768px) {
    font-size: 3.8rem;
  }
`;

export const SlideKanji = styled.p`
  font-size: 5.6rem;
  line-height: 1;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 12rem;
  }

  @media screen and (min-width: 991px) {
    font-size: 14rem;
  }
`;

export const SlideTypes = styled.div`
  display: flex;
  align-item: center;
`;

export const SlideType = styled.div`
  width: 120px;
  text-align: center;
  font-family: var(--font-family);
  font-weight: var(--font-weight-bold);
  font-size: 1.6rem;
  letter-spacing: 1.5px;
  border-radius: 5px;
  background: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};
  padding: 0.4em 1.4em;
  margin-right: 10px;

  @media screen and (min-width: 768px) {
    font-size: 1.7;
    padding: 0.6em 1.6em;
  }
`;

export const SearchAsset = styled.img`
  display: none;

  @media screen and (min-width: 991px) {
    display: block;
    position: absolute;
    bottom: 0;
    right: 6em;
    opacity: 0.4;
  }
`;
