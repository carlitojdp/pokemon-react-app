import styled from "styled-components";
import pokemonBg from "../../assets/images/pokemonBg.png";
export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  ${'' /* background: #f98349; */}
  padding: 2em;
  padding-top: 80px;
  background: url(${pokemonBg});
`;

export const AboutWrapper = styled.div`
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;


  @media screen and (min-width: 991px) {
    max-width: 700px;
  }
`;

export const AboutDesc = styled.p`
  font-family: var(--font-family);
  font-size: 1.7rem;
  letter-spacing: 0.5px;
  text-align: center;
  margin-bottom: 15px;

  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }

  @media screen and (min-width: 991px) {
    font-size: 2.2rem;
  }
`;

export const AboutDescAccent = styled.span`
  position: relative;
  &::after {
    position: absolute;
    content: "";
    bottom: 0;
    left: 35px;
    width: 80px;
    height: 10px;
    background: rgba(247, 61, 103, 0.3);
    border-radius: 5px;
  }
`;
export const AboutImg = styled.img`
  width: 100%;
  max-width: 320px;
  align-self: center;
`;
