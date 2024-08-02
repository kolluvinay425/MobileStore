import styled from "styled-components";
import { Link } from "react-router-dom";

const NavSecondRow = styled.div`
  width: 100%;
  height: 50px; /* Fixed height */

  display: flex;
  align-items: center;
  justify-content: center;
  position: ${(props) => (props.isScrolled ? "fixed" : "absolute")};
  top: 0;
  transition: position 0.3s ease;
  z-index: 2;
`;

const NavFirstRow = styled.div`
  width: 100%;
  height: 50px; /* Fixed height */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`;
const NavBarWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const Nav = styled.nav`
  background: #fff;
  padding-top: 20px;
  box-shadow: 0px 2px 5px -2px rgba(94, 89, 94, 1);
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  z-index: 1000;

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
  width: 50px;
  height: 50px;
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
  max-width: 50%;
  width: 40%;

  @media (max-width: 890px) {
    display: none;
  }
`;

const DropDownContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

const DropDownMenuWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  min-width: 200px;
  border-radius: 4px;
  display: ${(props) => (props.isVisible ? "block" : "none")};
  z-index: 1001;
`;

export {
  DropDownContainer,
  SearchBar,
  Nav,
  NavContainer,
  NavList,
  NavImage,
  StyledLink,
  DropDownMenuWrapper,
  NavSecondRow,
  NavFirstRow,
  NavBarWrapper,
};
