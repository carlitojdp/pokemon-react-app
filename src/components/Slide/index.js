import React from "react";
import {
  SlideContainer,
  SlideImg,
  SlideContent,
  SlideNumber,
  SlideName,
  SlideKanji,
  SlideTypes,
  SlideType,
  SearchAsset,
} from "./SlideElements";
import { pokemonTypes } from "../../data/PokemonData";
import searchImg from "../../assets/images/searchImg.png";

const Slide = ({ img, number, name, kanji, types, bgColor }) => {
  return (
    <SlideContainer bgcolor={bgColor}>
      <SlideImg src={img} />
      <SlideContent>
        <SlideNumber>
          {number} <SlideName>{name}</SlideName>
        </SlideNumber>
        <SlideKanji>{kanji}</SlideKanji>
        <SlideTypes>
          {types.map((type) => (
            <SlideType
              key={type}
              bgColor={`${pokemonTypes[type].bgColor}`}
              textColor={`${pokemonTypes[type].color}`}
            >
              {type}
            </SlideType>
          ))}
        </SlideTypes>
      </SlideContent>
      <SearchAsset src={searchImg} />
    </SlideContainer>
  );
};

export default Slide;
