import React, { useRef, useState } from "react";
import styled from "styled-components";

const DropdownContainer = styled.div`
  position: relative;
  /* display: inline-block; */
  @media (max-width: 600px) {
    width: fit-content;
  }
`;

const StyledLink = styled.a`
  cursor: pointer;
  color: #2d2f31;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;

  &:hover {
    color: #27ace1;
  }

  @media (max-width: 890px) {
    /* display: none; */
  }
`;

const Menu = styled.div`
  border-top: 2px solid #27ace1;
  display: ${(props) => (props.show ? "block" : "none")};
  position: absolute;
  top: 39px;
  left: 0;
  background-color: #fff;
  color: #2d2f31;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;

  @media (max-width: 600px) {
    box-shadow: none;
    left: 5px;
    position: inherit;
  }
`;

const MenuItem = styled.div`
  padding: 12px 16px;
  width: 250px;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out, font-weight 0.1s ease-in-out;
  &:hover {
    background-color: #f1f1f1;
    font-weight: 600; /* Slightly bolder font weight on hover */
    color: #27ace1;
  }
`;

const SubMenuTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 12px 16px;
  width: 250px;
  transition: background-color 0.1s ease-in-out, font-weight 0.2s ease-in-out;
  &:hover {
    background-color: #f1f1f1;
    font-weight: 600; /* Slightly bolder font weight on hover */
    color: #27ace1;
  }

  @media (max-width: 600px) {
  }
`;

const SubMenu = styled.div`
  position: relative;
  &:hover > div {
    display: block;
  }
  &:hover > ${SubMenuTitle} {
    background-color: #f1f1f1;
  }
`;

const SubMenuContent = styled.div`
  border-top: 2px solid #27ace1;
  display: none;
  position: absolute;
  top: -2px;
  left: 100%;
  background-color: #fff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  @media (max-width: 600px) {
    box-shadow: none;
    top: 40px;
    left: 5px;
  }
`;

const Arrow = styled.span`
  margin-left: auto;
`;

const MultiLevelDropdown = ({ categories }) => {
  const [showMenu, setShowMenu] = useState(false);

  const timerRef = useRef(null);

  const handleMove = () => {
    timerRef.current = setTimeout(() => {
      setShowMenu(false);
    }, 300);
  };

  const handleEnter = () => {
    clearTimeout(timerRef.current);
    setShowMenu(true);
  };
  return (
    <DropdownContainer
      onMouseEnter={() => handleEnter()}
      onMouseLeave={() => handleMove()}
    >
      <StyledLink>Products</StyledLink>
      <Menu
        onMouseEnter={() => handleEnter()}
        onMouseLeave={() => handleMove()}
        show={showMenu}
      >
        {categories.map((category) => (
          <SubMenu key={category.name}>
            <SubMenuTitle>
              {category.name}
              {/* <Arrow>{">"}</Arrow> */}
            </SubMenuTitle>
            <SubMenuContent>
              {category.subCategories.map((subCategory) => (
                <MenuItem key={subCategory}>{subCategory}</MenuItem>
              ))}
            </SubMenuContent>
          </SubMenu>
        ))}
      </Menu>
    </DropdownContainer>
  );
};

export default MultiLevelDropdown;
