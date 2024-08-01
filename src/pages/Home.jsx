// src/Home.js
import React from "react";
import HomeCarousal from "../components/Caurosel";
import LoginPage from "../components/Login";
import NavBar from "../components/navBar";
function Home() {
  return (
    <>
      <NavBar />
      <HomeCarousal />
      {/* <LoginPage /> */}
    </>
  );
}

export default Home;
