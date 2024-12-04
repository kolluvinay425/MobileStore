// src/Home.js
import React from "react";
import HomeCarousal from "../components/Caurosel";
import { useState, useEffect } from "react";
import styled from "styled-components";
import useHandleNavigation from "../hooks/useHandleNavigation";

const ProductImage = styled.img`
  width: 100%; /* Ensure the image fills the width of the card */
  height: 140px; /* Set a fixed height for the image */
  object-fit: cover; /* Ensure the image covers the specified area */
  margin-bottom: 10px;
`;

const ProductName = styled.h4`
  font-size: 16px;
  margin-bottom: 10px;
`;
const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  /* width: 70%; */
  /* margin: auto; */

  position: relative; /* Required for z-index to work */
  background-color: white; /* Optional: to make sure content is visible */

  @media (max-width: 950px) {
    position: none;
  }
`;

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 70%;
  margin: auto;
`;
const ProductCard = styled.div`
  flex: 1 0 21%;
  width: 260px; /* Adjusted width for consistency */
  height: 320px; /* Fixed height for all cards */
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
function Home() {
  const [brands, setBrands] = useState([]);
  const handleButtonClick = useHandleNavigation();

  useEffect(() => {
    // console.log("url---->", process.env.REACT_APP_ROOT_API_URI);
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_ROOT_API_URI}/brands`
        );
        const data = await response.json();
        setBrands(data);
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <>
      <HomeCarousal />
      <MainContent>
        <ProductList>
          {brands &&
            brands.map((product) => (
              <ProductCard>
                <ProductImage
                  onClick={() => handleButtonClick(product.brand, "products")}
                  src={product.brandImage}
                  alt={product.brand}
                />
                <ProductName>{product.brand}</ProductName>
              </ProductCard>
            ))}

          {brands.length === 0 && <h1>loading....</h1>}
        </ProductList>
      </MainContent>
    </>
  );
}

export default Home;
