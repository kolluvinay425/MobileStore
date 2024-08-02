import React, { useState, useEffect, useRef } from "react";
import MultiLevelDropdown from "./DropDownTree";
import styled from "styled-components";
import { NavList, Nav, NavImage, StyledLink } from "./styles/NavBarStyles";
import { productCategories } from "../static/helper";
import { Link } from "react-router-dom";

const NavbarContainer = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const FirstRow = styled.div`
  color: white;
  transition: transform 0.3s ease-in-out;
  transform: ${(props) =>
    props.isCollapsed ? "translateY(-100%)" : "translateY(0)"};
`;

const SecondRow = styled.div`
  transition: transform 0.3s ease-in-out;
  transform: ${(props) =>
    props.isCollapsed ? "translateY(-100%)" : "translateY(0)"};
`;

const NavBar = () => {
  const navRef = useRef(null);

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsCollapsed(true);
    } else {
      setIsCollapsed(false);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

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
      <NavbarContainer ref={navRef}>
        <FirstRow isCollapsed={isCollapsed}>
          <Nav>
            <NavList>
              <StyledLink to="/">Home</StyledLink>
              <MultiLevelDropdown categories={productCategories} />
              <StyledLink to="/something">Categories</StyledLink>
              <StyledLink to="/about">About</StyledLink>
              <StyledLink to="/something">Categories</StyledLink>
              <StyledLink to="/about">About</StyledLink>
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
        </FirstRow>

        <SecondRow isCollapsed={isCollapsed}>
          <Nav>
            <NavList>
              <StyledLink to="/">Home</StyledLink>
              <MultiLevelDropdown categories={productCategories} />
              <StyledLink to="/something">Categories</StyledLink>
              <StyledLink to="/about">About</StyledLink>
              <StyledLink to="/something">Categories</StyledLink>
              <StyledLink to="/about">About</StyledLink>
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
        </SecondRow>
      </NavbarContainer>
    </>
  );
};

export default NavBar;
