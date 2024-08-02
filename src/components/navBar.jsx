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

const NavbarContainer = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: top 0.3s;
`;

const FirstRow = styled.div`
  /* background-color: #333; */
  color: white;
  /* padding: 10px; */
  display: ${(props) => (props.isCollapsed ? "none" : "block")};
`;

const SecondRow = styled.div`
  /* background-color: #555; */
  color: white;
  /* padding: 10px; */
`;

const Spacer = styled.div`
  height: ${(props) =>
    props.isCollapsed
      ? "40px"
      : "120px"}; /* Adjust based on the height of your navbar rows */
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
      <NavbarContainer>
        <FirstRow isCollapsed={isCollapsed}>
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
        </FirstRow>

        <SecondRow>
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
        </SecondRow>
        {/* <Spacer isCollapsed={isCollapsed} /> */}
      </NavbarContainer>
    </>
  );
};

export default NavBar;
