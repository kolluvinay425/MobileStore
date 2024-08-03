import React, { useState, useEffect, useRef } from "react";
import MultiLevelDropdown from "./DropDownTree";
import styled from "styled-components";
import {
  NavList,
  Nav,
  NavImage,
  StyledLink,
  SearchBar,
  Navbar1,
  Navbar2,
} from "./styles/NavBarStyles";
import { productCategories } from "../static/helper";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navRef = useRef(null);

  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const updateBodyPadding = () => {
      if (navRef.current) {
        const navHeight = navRef.current.clientHeight;
        document.body.style.paddingTop = `${navHeight + 100}px`;
      }
    };

    updateBodyPadding();
    window.addEventListener("resize", updateBodyPadding);
    return () => window.removeEventListener("resize", updateBodyPadding);
  }, [navRef]);

  return (
    <>
      <Navbar1 isSticky={isSticky}>
        <Nav center={true}>
          <NavList>
            <Link to="/">
              <NavImage
                banner={true}
                src="https://i.pinimg.com/originals/86/f6/c9/86f6c984946298238d80f7771cf7445d.png"
                alt="Your Image"
              />
            </Link>
            <SearchBar placeholder="Search for Products"></SearchBar>
            <StyledLink to="/about">About</StyledLink>
          </NavList>
        </Nav>
      </Navbar1>

      <Navbar2 ref={navRef} isSticky={isSticky}>
        <Nav>
          <NavList>
            <StyledLink to="/">Home</StyledLink>
            <MultiLevelDropdown categories={productCategories} />
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
      </Navbar2>
    </>
  );
};

export default NavBar;
