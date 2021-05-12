import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  HeaderContainer,
  NavbarContainer,
  NavbarLogo,
  NavbarPokeball,
} from "./NavbarElements";
import pokeball from "../../assets/images/pokeball.png";

const Navbar = () => {
  const [scrollOffset, setScrollOffset] = useState(false);

  const checkScrollOffset = () => {
    if (window.scrollY >= 70) {
      setScrollOffset(true);
    } else {
      setScrollOffset(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollOffset);
  }, []);

  const toggleScrollHome = () => {
    scroll.scrollToTop();
  };

  return (
    <HeaderContainer scrollOffset={scrollOffset}>
      <NavbarContainer>
        <NavbarLogo to="home" onClick={toggleScrollHome}>
          Pokédex
        </NavbarLogo>
        <NavbarPokeball src={pokeball} />
      </NavbarContainer>
    </HeaderContainer>
  );
};

export default Navbar;
