// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./components/navBar";
import LoginPage from "./components/Login";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Products from "./pages/Products";
function App() {
  return (
    <>
      <Router>
        <div style={{ padding: 0 }}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop/:title" element={<Products />} />
          </Routes>
          {/* <NavBar /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
