import React, { useState, useEffect, useRef } from "react";
import MultiLevelDropdown from "./DropDownTree";
import styled from "styled-components";
import {
  NavList,
  Nav,
  NavImage,
  SearchBar,
  StyledLink,
  NavBarWrapper,
  NavFirstRow,
  NavSecondRow,
} from "./styles/NavBarStyles";
import { productCategories } from "../static/helper";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Assuming NavFirstRow's height is 50px
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
      <NavBarWrapper>
        <NavFirstRow>
          <h1>This row one</h1>
          <h1>This row one</h1>
          <h1>This row one</h1>
          <h1>This row one</h1>
        </NavFirstRow>

        <NavSecondRow isScrolled={isScrolled}>
          <Nav ref={navRef}>
            <NavList>
              <StyledLink to="/">Home</StyledLink>
              <MultiLevelDropdown categories={productCategories} />
              {/* <SearchBar type="text" placeholder="Search for anything." /> */}
              <StyledLink to="/something">Categories</StyledLink>
              <StyledLink to="/about">About</StyledLink>
              <StyledLink to="/something">Categories</StyledLink>
              <StyledLink to="/about">About</StyledLink>{" "}
              <StyledLink to="/something">Categories</StyledLink>
              <StyledLink to="/about">About</StyledLink>
            </NavList>
            <Link to="/">
              <NavImage
                src="https://e1.pxfuel.com/desktop-wallpaper/305/658/desktop-wallpaper-720x1280-flame-latinica-letter-letter-alphabet-fire-v-6335-fire-letters-thumbnail.jpg"
                alt="Your Image"
              />
            </Link>
          </Nav>
        </NavSecondRow>
      </NavBarWrapper>
    </>
  );
};

export default NavBar;
