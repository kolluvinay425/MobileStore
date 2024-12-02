import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
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
  width: 220px;
  height: 320px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const ProductName = styled.h4`
  font-size: 16px;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 14px;
  color: #888;
  margin-top: auto;
`;

const NoProductsMessage = styled.h1`
  text-align: center;
  color: #888;
`;

const LoadingMessage = styled.h1`
  text-align: center;
  color: #888;
`;

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false); // New loading state
  const { model, brand } = useParams();
  const checkModel = model === "products" ? "" : model;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${process.env.REACT_APP_ROOT_API_URI}/mobiles?model=${checkModel}&brand=${brand}`
        );
        const data = await response.json();
        const mobiles = data.products.data;
        setProducts(mobiles);
      } catch (error) {
        console.error("Error fetching products data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [model, brand]);

  // Dummy data for demonstration purposes
  const filters = {
    brand: ["Samsung", "Apple", "Huawei", "Xiaomi"],
    priceRange: ["Under €300", "€300 - €600", "€600 - €900", "Above €900"],
  };

  return (
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
          {loading ? (
            <LoadingMessage>Loading...</LoadingMessage>
          ) : products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id}>
                <ProductImage src={product.image} alt={product.name} />
                <ProductName>
                  {product.brand}-{product.model} - {product.color}
                </ProductName>
                <ProductPrice>{product.price} €</ProductPrice>
              </ProductCard>
            ))
          ) : (
            <NoProductsMessage>No products to show</NoProductsMessage>
          )}
        </ProductList>
      </MainContent>
    </Container>
  );
};

export default Products;
