import React from "react";
import styled from "styled-components";
import { Menu, Dropdown } from "antd";
import "antd/dist/reset.css";
import { StyledLink } from "./styles/NavBarStyles";

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledH4 = styled.h4`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px; /* Adjust this value as needed */
  display: inline-block;
  vertical-align: middle;
`;

const MenuTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CustomArrow = styled.span`
  margin-left: 10px;
  &::before {
    content: "▼"; /* You can replace this with any custom arrow */
    font-size: 12px;
  }
`;

const MultiLevelDropdown = ({ categories }) => {
  const generateMenu = (categories) => (
    <Menu>
      {categories.map((category) => (
        <Menu.SubMenu
          style={{ width: "250px", height: "40px" }}
          key={category.name}
          title={category.name}
        >
          {category.subCategories.map((subCategory) => (
            <Menu.Item
              style={{ width: "250px", borderRadius: 0 }}
              key={subCategory}
            >
              <MenuTitle>
                <StyledH4>{subCategory}</StyledH4>
              </MenuTitle>
            </Menu.Item>
          ))}
        </Menu.SubMenu>
      ))}
    </Menu>
  );

  return (
    <DropdownContainer>
      <Dropdown overlay={generateMenu(categories)} overlayStyle={{}}>
        <StyledLink>Products</StyledLink>
      </Dropdown>
    </DropdownContainer>
  );
};

export default MultiLevelDropdown;
