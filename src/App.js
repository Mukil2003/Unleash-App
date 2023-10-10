import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Services from "./Components/Pages/Services";
import Products from "./Components/Pages/Products";
import SignUp from "./Components/Pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/services" exact Component={Services} />
          <Route path="/products" exact Component={Products} />
          <Route path="/sign-up" exact Component={SignUp} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
