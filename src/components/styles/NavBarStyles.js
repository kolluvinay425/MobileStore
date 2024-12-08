import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  background: #fff;
  box-shadow: 0px 2px 5px -2px rgba(94, 89, 94, 1);
  /* width: 100%; */
  display: flex;
  justify-content: ${(props) => (props.center ? "center" : "space-evenly")};
  /* flex-direction: ${(props) => (props.navOne ? "column" : "row")}; */
  z-index: 1000;
  padding: 20px;
  padding-left: 0;

  @media (min-width: 951px) and (max-width: 1200px) {
    padding: 32px;
  }

  @media (max-width: 950px) {
    justify-content: flex-start;
    padding-right: 0;
  }
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
`;

const NavList = styled.div`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 22px;
  align-items: center;

  @media (max-width: 950px) {
    flex-direction: column;
    /* margin: 0 auto; */
    padding: 20px;
    /* background-color: green; */
    align-items: flex-start;

    .collapsibleLink {
      margin: 10px;
      float: left;
      color: #333;
      /* background-color: #333; */
    }

    /* } */
  }

  .navIconWrapper {
    display: contents;
  }

  @media (max-width: 950px) {
    justify-content: center;
  }

  @media (max-width: 1200px) {
    .search-container {
      display: inline-flex;
    }
  }
  @media (max-width: 950px) {
    flex-direction: column;
    justify-content: center;
    align-items: ${(props) => (props.isNavbar2Visible ? "left" : "center")};
    /* margin-right: auto; */
    gap: 10px;
    .search-container {
      order: 3;
    }

    .navIconWrapper {
      display: none;
    }
  }
`;

const SearchBar = styled.input`
  border: 2px solid #ddd;
  border-width: 2px 1px 1px 1px;
  padding: 15px;
  font-size: 14px;
  outline: none;
  width: 400px;

  @media (max-width: 950px) {
    padding: 10px;
    width: 240px;
    height: 26px;
    margin-top: 0px;
  }

  @media (max-width: 1200px) {
  }
`;

const StyledLink = styled(Link)`
  /* font-size: 0.9rem; */
  cursor: pointer;
  color: #2d2f31;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;
  text-align: center;
  &:hover {
    color: #27ace1;
  }

  @media (max-width: 950px) {
    .collapsibleLink {
      padding: 12px 16px;
      border-top: 0.5px solid #2d2f31;

      width: 150px;
    }

    .cart {
      display: none;
    }
  }
`;

const NavImage = styled.img`
  width: ${(props) => (props.banner ? "150px" : "50px")};
  height: ${(props) => (props.banner ? "auto" : "50px")};
  border-radius: 50px;

  @media (max-width: 1200px) {
    width: ${(props) => (props.banner ? "150px" : "50px")};
    height: ${(props) => (props.banner ? "auto" : "50px")};
  }

  @media (max-width: 890px) {
    width: ${(props) => (props.banner ? "150px" : "50px")};
    height: ${(props) => (props.banner ? "auto" : "50px")};
  }
  @media (max-width: 950px) {
    width: ${(props) => (props.banner ? "150px" : "50px")};
    height: ${(props) => (props.banner ? "auto" : "50px")};
  }
`;

const SearchBarButton = styled.button`
  height: 49px;
  width: 50px;

  @media (max-width: 950px) {
    height: 49px;
    width: 50px;
  }
`;

const Navbar1 = styled.div`
  position: ${(props) => (props.isSticky ? "sticky" : "relative")};
  /* transition: top 0.1s ease-out; */
  color: white;
  width: 100%;
  @media (max-width: 950px) {
    position: relative;
  }

  @media (max-width: 480px) {
  }
`;

const Navbar2 = styled.div`
  transition: top 0.01s ease-out;
  color: white;
  position: ${(props) => (props.isSticky ? "sticky" : "relative")};
  width: 100%;
  top: ${(props) => (props.isSticky ? `${0}px` : "none")};
  z-index: 2;

  @media (max-width: 950px) {
    display: ${(props) => (props.bars ? "flex" : "none")};
    position: absolute;
    top: 90px;
    left: 0;
    overflow: auto;
    z-index: 1;
    transform: none;
    .Nav2 {
      padding: 0 20px 20px;
      margin-top: 10px;
    }
  }
`;

const Bars = styled.div`
  display: none;

  @media (max-width: 950px) {
    display: inline;
    top: -30px;
    right: 2.8rem;
    position: relative;
  }
`;
export {
  SearchBar,
  Nav,
  NavContainer,
  NavList,
  NavImage,
  StyledLink,
  Navbar1,
  Navbar2,
  SearchBarButton,
  Bars,
};
