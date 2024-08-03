import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  background: #fff;
  box-shadow: 0px 2px 5px -2px rgba(94, 89, 94, 1);
  width: 100%;
  display: flex;
  justify-content: ${(props) => (props.center ? "center" : "space-evenly")};
  z-index: 1000;
  padding: 10px;
  @media (max-width: 890px) {
    padding: 0px;
    justify-content: flex-end;
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

  @media (max-width: 890px) {
    justify-content: center;
  }
`;

const StyledLink = styled(Link)`
  /* font-size: 0.9rem; */
  cursor: pointer;
  color: #2d2f31;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;

  &:hover {
    color: #27ace1;
  }

  @media (max-width: 890px) {
    display: none;
  }
`;

const NavImage = styled.img`
  width: ${(props) => (props.banner ? "350px" : "50px")};
  height: ${(props) => (props.banner ? "100px" : "50px")};
  border-radius: 50px;

  @media (max-width: 1200px) {
    padding: 10px;
  }

  @media (max-width: 890px) {
    padding: 10px;
  }

  @media (max-width: 600px) {
    padding: 10px;
  }

  @media (max-width: 400px) {
    padding: 10px;
  }
`;

const SearchBar = styled.input`
  border: none;
  border-radius: 30px;
  border: 1px solid black;
  padding: 15px 15px;
  font-size: 14px;
  outline: none;
  max-width: 80%;
  width: 40%;

  @media (max-width: 890px) {
    display: none;
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

  @media (max-width: 768px) {
    height: 100px;
    transform: ${(props) =>
      props.isSticky ? "translateY(-100px)" : "translateY(0)"};
  }

  @media (max-width: 480px) {
    height: 80px;
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

  @media (max-width: 768px) {
    top: 100px; /* Adjusted to match Navbar1 height for smaller screens */
    transform: ${(props) =>
      props.isSticky ? "translateY(-100px)" : "translateY(0)"};
  }

  @media (max-width: 480px) {
    top: 80px; /* Adjusted to match Navbar1 height for even smaller screens */
    transform: ${(props) =>
      props.isSticky ? "translateY(-80px)" : "translateY(0)"};
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
};
