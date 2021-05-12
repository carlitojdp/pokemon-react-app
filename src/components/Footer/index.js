import React from "react";
import {
  FooterContainer,
  FooterNavList,
  FooterNavLink,
  FooterTradeMark,
  FooterSocials,
  FooterSocialsItem,
} from "./FooterElements";
import { BiWorld } from "react-icons/bi";
import { AiOutlineTwitter, AiFillFacebook } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterNavList>
        <FooterNavLink
          to="home"
          smooth={true}
          duration={350}
          spy={true}
          exact="true"
        >
          Home
        </FooterNavLink>
        <FooterNavLink
          to="search"
          smooth={true}
          duration={350}
          spy={true}
          exact="true"
          offset={-70}
        >
          Search
        </FooterNavLink>
        <FooterNavLink
          to="about"
          smooth={true}
          duration={350}
          spy={true}
          exact="true"
          offset={-70}
        >
          About
        </FooterNavLink>
      </FooterNavList>
      <FooterTradeMark>© Carlito Jr Dela Pena</FooterTradeMark>
      <FooterSocials>
        <FooterSocialsItem>
          <BiWorld />
        </FooterSocialsItem>
        <FooterSocialsItem>
          <AiOutlineTwitter />
        </FooterSocialsItem>
        <FooterSocialsItem>
          <AiFillFacebook />
        </FooterSocialsItem>
        <FooterSocialsItem>
          <FaPinterestP />
        </FooterSocialsItem>
      </FooterSocials>
    </FooterContainer>
  );
};

export default Footer;
