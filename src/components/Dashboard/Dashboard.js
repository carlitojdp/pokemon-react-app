import styled from "styled-components";
import { animated } from "react-spring";

export const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 120px 1fr;
  justify-content: center;
  align-items: center;
  padding-top: 6em;
  padding-bottom: 6em;
`;

export const DashboardHeaders = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    justify-items: center;
    align-items: center;
  }

  @media screen and (min-width: 991px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const ShowTeam = styled(animated.div)`
  order: 3;
  width: 280px;
  display: flex;
  align-items: center;
  background: #fafafafa;
  border-radius: 0px 10px 10px 0px;
  padding: 10px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    justify-self: center;
    align-self: center;
  }

  @media screen and (min-width: 991px) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
`;

export const TeamHeading = styled.h3`
  font-weight: var(--font-weight-bold);
  font-size: 1.8rem;
  letter-spacing: 1px;
  color: rgba(0, 0, 0, 0.7);
  margin-right: 10px;
`;

export const TeamIcon = styled(animated.img)`
  display: block;
  width: 28px;
  height: 28px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.15);
  }
`;

export const FilterContainer = styled.div`
  order: 2;
  position: relative;
  width: 280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    width: 240px;
  }

  @media screen and (min-width: 991px) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    justify-self: flex-end;
  }
`;

export const FilterButton = styled(animated.button)`
  position: relative;
  z-index: 30;
  width: 100%;
  font-family: var(--font-family);
  font-weight: var(--font-weight-normal);
  font-size: 1.4rem;
  letter-spacing: 0.5px;
  border: 0.3px solid lightgrey;
  border-radius: 5px;
  color: rgba(0, 0, 0, 0.4);
  text-align: initial;
  padding: 8px 10px;

  @media screen and (min-width: 991px) {
    font-size: 1.7rem;
  }
`;

export const FilterIcon = styled.img`
  position: absolute;
  top: 8px;
  bottom: 8px;
  right: 10px;
  width: 23px;
  height: 23px;
  cursor: pointer;

  @media screen and (min-width: 991px) {
    top: 11px;
    right: 11px;
    bottom: 11px;
  }
`;

export const SearchContainer = styled.div`
  order: 1;
  position: relative;
  width: 280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    width: 240px;
  }

  @media screen and (min-width: 991px) {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
  }
`;

export const SearchInput = styled.input`
  position: relative;
  z-index: 30;
  width: 100%;
  font-family: var(--font-family);
  font-weight: var(--font-weight-normal);
  font-size: 1.4rem;
  letter-spacing: 0.5px;
  border: 0.3px solid lightgrey;
  border-radius: 5px;
  color: rgba(0, 0, 0, 0.7);
  text-align: initial;
  padding: 8px 10px;
  outline: none;
  transition: all 0.2s ease-in;

  &:hover,
  &:focus {
    border-bottom: 4px solid rgba(47, 55, 124, 0.3);
  }

  @media screen and (min-width: 991px) {
    font-size: 1.7rem;
  }
`;

export const SearchIcon = styled.img`
  position: absolute;
  z-index: 31;
  top: 8px;
  bottom: 8px;
  right: 10px;
  width: 23px;
  height: 23px;
  pointer-events: none;
  cursor: pointer;

  @media screen and (min-width: 991px) {
    top: 10px;
    right: 11px;
    bottom: 10px;
  }
`;

export const DashboardContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 300px));
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 15px;

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(4, 300px);
  }
`;
