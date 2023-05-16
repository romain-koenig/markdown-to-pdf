import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Home from './Home';
import About from './About';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
