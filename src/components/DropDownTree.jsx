import React from "react";
import styled from "styled-components";
import { Menu, Dropdown } from "antd";
import "antd/dist/reset.css";
import { StyledLink } from "./styles/NavBarStyles";

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const MainMenu = styled(Menu)``;

const StyledMenu = styled(Menu.SubMenu)`
  width: 250px !important;
  .ant-menu-sub {
    width: 300px !important; /* Ensure the width is applied */
  }
`;

const MultiLevelDropdown = ({ categories }) => {
  const generateMenu = (categories) => (
    <MainMenu>
      {categories.map((category) => (
        <StyledMenu key={category.name} title={category.name}>
          {category.subCategories.map((subCategory) => (
            <div style={{ width: "300px", margin: 0, height: "30px" }}>
              <Menu.Item key={subCategory}>{subCategory}</Menu.Item>
            </div>
          ))}
        </StyledMenu>
      ))}
    </MainMenu>
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
