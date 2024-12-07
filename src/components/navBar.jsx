import React, { useState, useRef } from "react";
import { FaUser, FaUserPlus, FaCartPlus, FaBars } from "react-icons/fa";
import MultiLevelDropdown from "./DropDownTree";
import {
  NavList,
  Nav,
  NavImage,
  StyledLink,
  SearchBar,
  Navbar1,
  Navbar2,
  SearchBarButton,
  Bars,
} from "./styles/NavBarStyles";
import { productCategories } from "../static/helper";
import useSticky from "../hooks/useSticky";
import useHandleNavigation from "../hooks/useHandleNavigation";
import { useEffect } from "react";
const NavBar = () => {
  const [query, setQuery] = useState("");
  const [isNavbar2Visible, setIsNavbar2Visible] = useState(false);
  const handleButtonClick = useHandleNavigation();

  const isSticky = useSticky();

  const toggleNavbar2 = () => {
    console.log(isNavbar2Visible);
    setIsNavbar2Visible(!isNavbar2Visible);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  }; // Correctly access the value of the input field };
  return (
    <>
      <Navbar1 className="navbar1">
        <Nav className="nav1" center={true}>
          <NavList navOne={true}>
            <StyledLink to="/">
              <Bars onClick={toggleNavbar2}>
                <FaBars
                  style={{ marginRight: "5px", height: "35px", width: "40px" }}
                />
              </Bars>

              <NavImage
                banner={true}
                src="https://galeriagalena.pl/static/thumbnail/brand/big/505.png"
                alt="Your Image"
              />
            </StyledLink>
            <div className="search-container">
              <SearchBar
                onChange={handleInputChange}
                value={query}
                placeholder="Search for Products"
              />
              <SearchBarButton
                onClick={() => handleButtonClick("products", query)}
              >
                Q
              </SearchBarButton>
            </div>

            <div className="navIconWrapper">
              <StyledLink to="/login">
                <FaUser style={{ marginRight: "5px" }} />
                Login
              </StyledLink>
              <StyledLink to="/register">
                <FaUserPlus style={{ marginRight: "5px" }} />
                Register
              </StyledLink>
            </div>
          </NavList>
        </Nav>
      </Navbar1>

      <Navbar2
        class="navbar2"
        bars={isNavbar2Visible}
        // height={height}
        isSticky={isSticky}
      >
        <Nav className="Nav2" bars={isNavbar2Visible}>
          <NavList isNavbar2Visible={isNavbar2Visible} className="navList2">
            <MultiLevelDropdown categories={productCategories} />

            <StyledLink
              onClick={toggleNavbar2}
              className="collapsibleLink"
              to="/"
            >
              Home
            </StyledLink>

            <StyledLink
              onClick={toggleNavbar2}
              className="collapsibleLink"
              to="/something"
            >
              Categories
            </StyledLink>
            <StyledLink
              onClick={toggleNavbar2}
              className="collapsibleLink"
              to="/about"
            >
              About
            </StyledLink>

            <StyledLink
              onClick={toggleNavbar2}
              className="collapsibleLink"
              to="/something"
            >
              Categories
            </StyledLink>
            <StyledLink
              onClick={toggleNavbar2}
              className="collapsibleLink"
              to="/about"
            >
              About
            </StyledLink>
          </NavList>
          <StyledLink to="/register">
            <FaCartPlus
              className="cart"
              style={{ marginRight: "5px", height: "35px", width: "40px" }}
            />
          </StyledLink>
        </Nav>
      </Navbar2>
    </>
  );
};

export default NavBar;
