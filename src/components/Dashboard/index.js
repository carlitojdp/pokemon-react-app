import React, { useState, useEffect } from "react";
import {
  DashboardContainer,
  DashboardHeaders,
  ShowTeam,
  TeamHeading,
  TeamIcon,
  FilterContainer,
  FilterButton,
  FilterIcon,
  SearchContainer,
  SearchInput,
  SearchIcon,
  DashboardContent,
} from "./Dashboard";
import PokemonCard from "../PokemonCard";
import PokemonOverlay from "../PokemonOverlay";
import pokeball from "../../assets/images/pokeball.png";
import filterIcon from "../../assets/images/filterIcon.png";
import searchIcon from "../../assets/images/searchIcon.png";

import { pokemonList } from "../../data/PokemonData";

const Dashboard = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  useEffect(() => {
    if (isOverlayOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "initial";
  }, [isOverlayOpen]);

  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };
  return (
    <DashboardContainer id="search">
      <DashboardHeaders>
        <ShowTeam>
          <TeamHeading>Team: </TeamHeading>
          <TeamIcon src={pokeball} />
        </ShowTeam>
        <FilterContainer>
          <FilterButton>show all filters</FilterButton>
          <FilterIcon src={filterIcon} />
        </FilterContainer>
        <SearchContainer>
          <SearchInput placeholder="search..." />
          <SearchIcon src={searchIcon} />
        </SearchContainer>
      </DashboardHeaders>
      <DashboardContent>
        {pokemonList.map(({ name, types, img }) => (
          <PokemonCard
            key={name}
            name={name}
            types={types}
            img={img}
            toggleOverlay={toggleOverlay}
            isOverlayOpen={isOverlayOpen}
          />
        ))}
      </DashboardContent>
      {isOverlayOpen && (
        <PokemonOverlay
          isOverlayOpen={isOverlayOpen}
          toggleOverlay={toggleOverlay}
        />
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
