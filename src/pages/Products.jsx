import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
// Styled Components
const Container = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto; /* Centering the container */
  padding: 20px;
  box-sizing: border-box;
`;

const Sidebar = styled.div`
  width: 250px;
  padding: 20px;
  background-color: #f8f8f8;
  border-right: 1px solid #ddd;
`;

const FilterSection = styled.div`
  margin-bottom: 20px;
`;

const FilterTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 10px;
  padding: 10px;
`;

const FilterOption = styled.div`
  margin-bottom: 8px;
  padding: 10px;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
`;

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const ProductCard = styled.div`
  width: 200px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: center;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

const ProductName = styled.h4`
  font-size: 16px;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 14px;
  color: #888;
`;

const Products = () => {
  const { title } = useParams(); // Extract the title parameter from the URL

  // Dummy data for demonstration purposes
  const filters = {
    brand: ["Samsung", "Apple", "Huawei", "Xiaomi"],
    priceRange: ["Under $300", "$300 - $600", "$600 - $900", "Above $900"],
  };

  const products = [
    {
      id: 1,
      name: "Samsung Galaxy S24",
      image: "https://via.placeholder.com/200",
      price: "$999",
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Plus",
      image: "https://via.placeholder.com/200",
      price: "$1199",
    },
    {
      id: 1,
      name: "Samsung Galaxy S24",
      image: "https://via.placeholder.com/200",
      price: "$999",
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Plus",
      image: "https://via.placeholder.com/200",
      price: "$1199",
    },
    {
      id: 1,
      name: "Samsung Galaxy S24",
      image: "https://via.placeholder.com/200",
      price: "$999",
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Plus",
      image: "https://via.placeholder.com/200",
      price: "$1199",
    },
    {
      id: 1,
      name: "Samsung Galaxy S24",
      image: "https://via.placeholder.com/200",
      price: "$999",
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Plus",
      image: "https://via.placeholder.com/200",
      price: "$1199",
    },
    {
      id: 1,
      name: "Samsung Galaxy S24",
      image: "https://via.placeholder.com/200",
      price: "$999",
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Plus",
      image: "https://via.placeholder.com/200",
      price: "$1199",
    },
    // Add more products as needed
  ];

  return (
    <>
      <Container>
        <Sidebar>
          <FilterSection>
            <FilterTitle>Brand</FilterTitle>
            {filters.brand.map((brand, index) => (
              <FilterOption key={index}>
                <input type="checkbox" id={`brand-${index}`} />
                <label htmlFor={`brand-${index}`}>{brand}</label>
              </FilterOption>
            ))}
          </FilterSection>
          <FilterSection>
            <FilterTitle>Price Range</FilterTitle>
            {filters.priceRange.map((range, index) => (
              <FilterOption key={index}>
                <input type="checkbox" id={`price-${index}`} />
                <label htmlFor={`price-${index}`}>{range}</label>
              </FilterOption>
            ))}
          </FilterSection>
        </Sidebar>
        <MainContent>
          <ProductList>
            {products.map((product) => (
              <ProductCard key={product.id}>
                <ProductImage src={product.image} alt={product.name} />
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.price}</ProductPrice>
              </ProductCard>
            ))}
          </ProductList>
        </MainContent>
      </Container>
    </>
  );
};

export default Products;
