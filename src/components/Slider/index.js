import React, { useState } from "react";
// import { useSpring } from "react-spring";
import { SliderContainer, LeftArrow, RightArrow } from "./SliderElements";
import { sliderData } from "../../data/PokemonData";
import SliderContent from "../SliderContent";
import Slide from "../Slide";
import arrLeft from "../../assets/images/arrw-l.png";
import arrRight from "../../assets/images/arrw-r.png";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [translate, setTranslate] = useState(0);
  const prevSlide = (direction) => {
    if (currentSlide + direction !== 0) {
      setTranslate(translate + 100);
      setCurrentSlide(currentSlide - 1);
    }
  };
  const nextSlide = (direction) => {
    if (!(currentSlide + direction > 3)) {
      setTranslate(translate - 100);
      setCurrentSlide(currentSlide + 1);
    }
  };
  return (
    <SliderContainer id="home">
      <SliderContent translate={translate}>
        {sliderData.map(({ img, number, name, kanji, types, bgColor }) => (
          <Slide
            key={name}
            img={img}
            number={number}
            name={name}
            kanji={kanji}
            bgColor={bgColor}
            types={types}
          />
        ))}
      </SliderContent>
      <LeftArrow arrow={arrLeft} onClick={() => prevSlide(-1)} />
      <RightArrow arrow={arrRight} onClick={() => nextSlide(+1)} />
    </SliderContainer>
  );
};

export default Slider;
