// import logo from '../logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../screens/Home";
import Contact from "../screens/Contact";
import About from "../screens/About";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
