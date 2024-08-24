// src/Home.js
import React from "react";
import HomeCarousal from "../components/Caurosel";
import { useState, useEffect } from "react";
function Home() {
  // const [restaurants, setRestaurants] = useState([]);

  // useEffect(() => {
  //   // console.log("url---->", process.env.REACT_APP_ROOT_API_URI);
  //   const fetchRestaurants = async () => {
  //     try {
  //       const response = await fetch(
  //         `${process.env.REACT_APP_ROOT_API_URI}/restaurants`
  //       );
  //       const data = await response.json();
  //       setRestaurants(data);
  //     } catch (error) {
  //       console.error("Error fetching restaurant data:", error);
  //     }
  //   };

  //   fetchRestaurants();
  // }, []);

  return (
    <>
      <HomeCarousal />
    </>
  );
}

export default Home;
