import logo from '../logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../screens/Home";
import Contact from "../screens/Contact";
import About from "../screens/About";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header pageName={"ReactJS"} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
