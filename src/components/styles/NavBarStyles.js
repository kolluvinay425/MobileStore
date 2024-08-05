import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  background: #fff;
  box-shadow: 0px 2px 5px -2px rgba(94, 89, 94, 1);
  width: 100%;
  display: flex;
  justify-content: ${(props) => (props.center ? "center" : "space-evenly")};
  /* flex-direction: ${(props) => (props.navOne ? "column" : "row")}; */
  z-index: 1000;
  padding: 10px;
  padding-left: 0;

  @media (max-width: 600px) {
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

  @media (max-width: 600px) {
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

  @media (max-width: 890px) {
    justify-content: center;
  }

  @media (max-width: 1200px) {
    .search-container {
      display: inline-flex;
    }
  }
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

  @media (max-width: 600px) {
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
  /* height: 50px; */
  text-align: center;
  &:hover {
    color: #27ace1;
  }

  @media (max-width: 400px) {
    .collapsibleLink {
      padding: 12px 16px;

      width: 150px;
    }

    .cart {
      display: none;
    }
  }
`;

const NavImage = styled.img`
  width: ${(props) => (props.banner ? "350px" : "50px")};
  height: ${(props) => (props.banner ? "auto" : "50px")};
  border-radius: 50px;

  @media (max-width: 1200px) {
    width: ${(props) => (props.banner ? "50%" : "50px")};
    height: ${(props) => (props.banner ? "auto" : "50px")};
  }

  @media (max-width: 890px) {
    width: ${(props) => (props.banner ? "60%" : "50px")};
    height: ${(props) => (props.banner ? "auto" : "50px")};
  }
  @media (max-width: 600px) {
    width: ${(props) => (props.banner ? "50%" : "50px")};
    height: ${(props) => (props.banner ? "auto" : "50px")};
  }

  /* @media (max-width: 400px) {
    align-self: center;
    width: ${(props) => (props.banner ? "50%" : "50px")};
    height: ${(props) => (props.banner ? "auto" : "50px")};
  } */
`;

const SearchBarButton = styled.button`
  height: 49px;
  width: 50px;

  @media (max-width: 600px) {
    height: 49px;
    width: 50px;
  }
`;

const Navbar1 = styled.div`
  color: white;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
  height: 150px;
  transition: transform 0.3s; /* Faster transition using transform */
  transform: ${(props) =>
    props.isSticky ? "translateY(-150px)" : "translateY(0)"};

  @media (max-width: 600px) {
    position: relative;
    /* height: 100px; */
    transform: ${(props) =>
      props.isSticky ? "translateY(-100px)" : "translateY(0)"};
  }

  @media (max-width: 480px) {
    /* height: 80px; */
    transform: ${(props) =>
      props.isSticky ? "translateY(-80px)" : "translateY(0)"};
  }
`;

const Navbar2 = styled.div`
  color: white;
  position: fixed;
  width: 100%;
  top: 120px; /* Adjusted to match Navbar1 height */
  z-index: 2;
  transition: transform 0.1s; /* Faster transition using transform */
  transform: ${(props) =>
    props.isSticky ? "translateY(-130px)" : "translateY(0)"};

  @media (max-width: 600px) {
    display: ${(props) => (props.bars ? "flex" : "none")};
    justify-content: flex-start;
    position: relative;
    top: 0px;
    left: 0;
  }
`;

const Bars = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: inline;
    top: -10px;
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
