import styled from "styled-components";
import { animated } from "react-spring";

export const OverlayContainer = styled(animated.div)`
  position: fixed;
  z-index: 9999999;
  top: 0;
  right: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background: #e5edec;
  overflow: scroll;
`;
export const OverlayCloseIcon = styled(animated.img)`
  position: absolute;
  z-index: 10000;
  height: 45px;
  width: 45px;
  top: 35px;
  right: 35px;
  cursor: pointer;
`;

export const OverlayContent = styled.div`
  min-height: 100%;
  height: 100%;
  min-height: 620px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2em;
  padding-top: 250px;

  @media screen and (min-width: 411px) {
    padding-top: 100px;
  }

  @media screen and (min-width: 1280px) {
    display: grid;
    grid-template-columns: 320px 1fr 1fr;
    grid-template-rows: 220px 115px 115px 1fr;
    padding: 6em;
  }
`;

export const OverlayHeaders = styled.div`
  @media screen and (min-width: 1280px) {
    grid-column: 1 / 3;
    grid-row: 4 / 5;
  }
`;

export const OverlayNumber = styled.span`
  font-size: 2.4rem;
  letter-spacing: 0.5px;
  color: #a9aaaa;

  @media screen and (min-width: 411px) {
    font-size: 3rem;
  }
`;

export const OverlayName = styled.p`
  display: inline;
  font-size: 2.1rem;
  letter-spacing: 1px;
  color: #454747;
  margin-left: 10px;

  @media screen and (min-width: 441px) {
    font-size: 2.4rem;
  }

  @media screen and (min-width: 411px) {
    font-size: 3.2rem;
  }
`;

export const OverlayKanji = styled.p`
  font-size: 4.5rem;
  color: #5c5f5e;

  @media screen and (min-width: 441px) {
    font-size: 5.4rem;
  }
  @media screen and (min-width: 411px) {
    font-size: 8.2rem;
  }
  @media screen and (min-width: 1280px) {
    font-size: 11rem;
    color: rgba(92, 95, 94, 0.8);
  }
`;

export const OverlayTypes = styled.div`
  margin-top: 10px;
`;

export const OverlayType = styled.span`
  font-size: 2rem;
  padding: 0.2em 1em;
  border-radius: 5px;
  background-color: #e9e3a3;
`;

export const OverlayImg = styled.img`
  width: 100%;
  max-width: 310px;

  @media screen and (min-width: 411px) {
    max-width: 400px;
  }

  @media screen and (min-width: 1280px) {
    z-index: -1;
    grid-column: 2 / 3;
    grid-row: 2 / 4;
    display: flex;
    justify-self: flex-end;
    padding-left: 50px;

    max-width: 420px;
  }
`;

export const OverlayFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  @media screen and (min-width: 1280px) {
    grid-column: 3 / 4;
    grid-row: 2 / 4;
  }
`;

export const OverlayAddButton = styled(animated.img)`
  margin-top: 15px;
  width: 36px;
  height: 36px;
  cursor: pointer;
`;

export const OverlayStats = styled.div`
  margin-top: 25px;
  width: 100%;
  max-width: 320px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-bottom: 30px;
  justify-content: center;
  justify-items: center;
  align-items: center;

  @media screen and (min-width: 1280px) {
    grid-template-columns: 1fr;
  }
`;

export const OverlayStat = styled.p`
  font-size: 1.8rem;
  background-color: #fff;
  color: #4d4d4d;
  padding: 5px 10px;
  padding-right: 15px;
  margin: 5px 0;
  border-radius: 10px;
  justify-self: ${({ left }) => (left ? "flex-start" : "center")};

  @media screen and (min-width: 1280px) {
    font-size: 2.4rem;
    justify-self: flex-start;
    margin: 13px 0;
    padding: 8px 15px;
  }
`;

export const OverlayMetrics = styled.div`
  display: none;

  @media screen and (min-width: 1280px) {
    display: block;

    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
`;

export const OverlayHeight = styled.p`
  font-size: 3.2rem;
  color: #5c5f5e;
`;

export const OverlayWeight = styled.p`
  font-size: 3.2rem;
  color: #5c5f5e;
`;
export const OverlayAccent = styled.span`
  font-size: 2.4rem;
  padding-left: 7px;
`;
