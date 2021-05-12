import React from "react";
import {
  CardContainer,
  CardImg,
  CardName,
  CardTypes,
  CardType,
} from "./PokemonCardElements";
import { pokemonTypes } from "../../data/PokemonData";
const PokemonCard = ({ name, types, img, toggleOverlay }) => {
  return (
    <CardContainer onClick={toggleOverlay}>
      <CardImg src={img} />
      <CardName>{name}</CardName>
      <CardTypes>
        {types.map((type) => (
          <CardType
            key={type}
            textColor={pokemonTypes[type].color}
            bgcolor={pokemonTypes[type].bgColor}
          >
            {type}
          </CardType>
        ))}
      </CardTypes>
    </CardContainer>
  );
};

export default PokemonCard;
