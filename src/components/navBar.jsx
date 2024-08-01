import React, { useState, useEffect, useRef } from "react";
import MultiLevelDropdown from "./DropDownTree";
import {
  NavList,
  Nav,
  NavImage,
  SearchBar,
  StyledLink,
} from "./styles/NavBarStyles";
import { productCategories } from "../static/helper";

const NavBar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    const updateBodyPadding = () => {
      if (navRef.current) {
        const navHeight = navRef.current.clientHeight;
        document.body.style.paddingTop = `${navHeight}px`;
      }
    };

    updateBodyPadding();
    window.addEventListener("resize", updateBodyPadding);
    return () => window.removeEventListener("resize", updateBodyPadding);
  }, []);

  useEffect(() => {
    const updateBodyPadding = () => {
      if (navRef.current) {
        const navHeight = navRef.current.clientHeight;
        document.body.style.paddingTop = `${navHeight}px`;
      }
    };

    updateBodyPadding();
    window.addEventListener("resize", updateBodyPadding);
    return () => window.removeEventListener("resize", updateBodyPadding);
  }, []);

  return (
    <>
      <Nav ref={navRef}>
        <NavList>
          <NavImage
            src="https://e1.pxfuel.com/desktop-wallpaper/305/658/desktop-wallpaper-720x1280-flame-latinica-letter-letter-alphabet-fire-v-6335-fire-letters-thumbnail.jpg"
            alt="Your Image"
          />
          <MultiLevelDropdown categories={productCategories} />
          <SearchBar type="text" placeholder="Search for anything." />
          <StyledLink to="/something">Categories</StyledLink>
          <StyledLink to="/about">About</StyledLink>
        </NavList>
      </Nav>
    </>
  );
};

export default NavBar;
