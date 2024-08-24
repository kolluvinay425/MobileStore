import React, { useState, useEffect, useRef } from "react";
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

const NavBar = () => {
  const navRef = useRef(null);

  const [isSticky, setIsSticky] = useState(false);
  const [isNavbar2Visible, setIsNavbar2Visible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100 && window.innerWidth > 950) {
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
        document.body.style.paddingTop =
          window.innerWidth > 950 ? `${navHeight + 100}px` : `${navHeight}px`;
      }
    };

    updateBodyPadding();
    window.addEventListener("resize", updateBodyPadding);
    return () => window.removeEventListener("resize", updateBodyPadding);
  }, [navRef]);

  const toggleNavbar2 = () => {
    console.log(isNavbar2Visible);
    setIsNavbar2Visible(!isNavbar2Visible);
  };
  return (
    <>
      <Navbar1 className="navbar1" isSticky={isSticky}>
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
                src="https://mikrofin.com/images/2022/12/22/mobishop.png"
                alt="Your Image"
              />
            </StyledLink>
            <div className="search-container">
              <SearchBar placeholder="Search for Products" />
              <SearchBarButton>Q</SearchBarButton>
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
        ref={navRef}
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
