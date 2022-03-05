import React from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from "../../pages/home.jsx";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<h1>about</h1>} />
      <Route path="*" element={<h1>Error 404</h1>} />{" "}
      <Route path="/" element={<h1>in home</h1>} />
    </Routes>
  );
}
