import React, { useState, useEffect, useRef } from "react";
import { FaUser, FaUserPlus } from "react-icons/fa";
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
} from "./styles/NavBarStyles";
import { productCategories } from "../static/helper";
import { Link } from "react-router-dom";
import { Button } from "antd";

const NavBar = () => {
  const navRef = useRef(null);

  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100 && window.innerWidth > 768) {
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
          window.innerWidth > 768 ? `${navHeight + 100}px` : `${navHeight}px`;
      }
    };

    updateBodyPadding();
    window.addEventListener("resize", updateBodyPadding);
    return () => window.removeEventListener("resize", updateBodyPadding);
  }, [navRef]);

  return (
    <>
      <Navbar1 className="navbar1" isSticky={isSticky}>
        <Nav className="nav1" center={true}>
          <NavList navOne={true}>
            <StyledLink to="/">
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

      <Navbar2 class="navbar2" ref={navRef} isSticky={isSticky}>
        <Nav>
          <NavList>
            <StyledLink to="/">Home</StyledLink>
            <MultiLevelDropdown categories={productCategories} />
            <StyledLink to="/something">Categories</StyledLink>
            <StyledLink to="/about">About</StyledLink>
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
