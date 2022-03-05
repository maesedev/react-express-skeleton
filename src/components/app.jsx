import React from "react";
import {
  HashRouter, Link,
  // Routes,
  // Route,
  // Link,
} from "react-router-dom";
import Home from "../pages/home.jsx";
import Navbar from "./main/navbar.jsx";
import Header from "./main/header.jsx";
import Footer from "./main/footer.jsx";
import Routing from "./main/routing.jsx"

export default function App() {
  return (
    <HashRouter>
      <Navbar />
      
      <Link to="/">to Home</Link>
      <Link to="/asdfasdfas">to 404</Link>
      <Header />
      <Routing/>
      {/* ---------start of Content----------*/}
      
      {/*---------End of Content----------*/}
      
      <Footer />
    </HashRouter>
  );
}
