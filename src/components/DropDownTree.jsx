import React, { useState } from "react";
import styled from "styled-components";

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #000;
`;

const Menu = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
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
  display: none;
  position: absolute;
  top: 0;
  left: 100%;
  background-color: #fff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const Arrow = styled.span`
  margin-left: auto;
`;

const MultiLevelDropdown = ({ categories }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <DropdownContainer
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
    >
      <StyledLink>Products</StyledLink>
      <Menu show={showMenu}>
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
