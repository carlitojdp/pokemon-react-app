import React from "react";
import {
  AboutContainer,
  AboutWrapper,
  AboutDesc,
  AboutDescAccent,
  AboutImg,
} from "./AboutElements";
import aboutPokeball from "../../assets/images/aboutPokeball.png";
const About = () => {
  return (
    <AboutContainer id="about">
      <AboutWrapper>
        <AboutDesc>
          <AboutDescAccent>Lorem ipsum</AboutDescAccent> dolor sit amet,
          consectetur adipiscing elit. Risus amet pharetra faucibus dui in
          vulputate nisl.
        </AboutDesc>
        <AboutDesc>
          Accumsan id ut vel nisl mollis volutpat auctor enim suspendisse.
          Faucibus.
        </AboutDesc>
        <AboutImg src={aboutPokeball} />
      </AboutWrapper>
    </AboutContainer>
  );
};
export default About;
