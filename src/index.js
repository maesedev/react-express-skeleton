import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  HashRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/home.jsx";

ReactDOM.render(
  <>
    <HashRouter>
      <Link to="/">Home</Link>
      <Link to="/asd">_______to any route</Link>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>about</h1>} />
        <Route path="*" element={<h1>Error 404</h1>} />{" "}
        <Route path="/" element={<h1>in home</h1>} />
      </Routes>
    </HashRouter>
  </>,
  document.getElementById("root")
);
