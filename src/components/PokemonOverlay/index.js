import React from "react";
import {
  OverlayContainer,
  OverlayCloseIcon,
  OverlayContent,
  OverlayHeaders,
  OverlayNumber,
  OverlayName,
  OverlayKanji,
  OverlayTypes,
  OverlayType,
  OverlayImg,
  OverlayFooter,
  OverlayAddButton,
  OverlayStats,
  OverlayStat,
  OverlayMetrics,
  OverlayHeight,
  OverlayWeight,
  OverlayAccent,
} from "./PokemonOverlayElements";
import closeIcon from "../../assets/images/closeIcon.png";
import addPokemon from "../../assets/images/addPokemon.png";
import xurkitree from "../../assets/images/xurkitree.png";
const PokemonOverlay = ({ toggleOverlay }) => {
  return (
    <OverlayContainer>
      <OverlayCloseIcon src={closeIcon} onClick={toggleOverlay} />
      <OverlayContent>
        <OverlayMetrics>
          <OverlayHeight>
            Height: 3.8<OverlayAccent>m</OverlayAccent>
          </OverlayHeight>
          <OverlayWeight>
            Wight: 100.0<OverlayAccent>kg</OverlayAccent>
          </OverlayWeight>
        </OverlayMetrics>
        <OverlayHeaders>
          <OverlayNumber>
            #796 <OverlayName>Xurtree</OverlayName>
          </OverlayNumber>
          <OverlayKanji>デンジュモク</OverlayKanji>
          <OverlayTypes>
            <OverlayType>Electric</OverlayType>
          </OverlayTypes>
        </OverlayHeaders>
        <OverlayImg src={xurkitree} />
        <OverlayFooter>
          <OverlayAddButton src={addPokemon} />
          <OverlayStats>
            <OverlayStat>HP: 73</OverlayStat>
            <OverlayStat left={true}>SP. Attack: 190</OverlayStat>
            <OverlayStat>Defense: 73</OverlayStat>
            <OverlayStat left={true}>Speed: 73</OverlayStat>
            <OverlayStat>Attack: 79</OverlayStat>
          </OverlayStats>
        </OverlayFooter>
      </OverlayContent>
    </OverlayContainer>
  );
};

export default PokemonOverlay;
