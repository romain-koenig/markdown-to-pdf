import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Home from './Home';
import About from './About';
import CheatSheet from './CheatSheet';
import Footer from './Footer';
import NotFound from './NotFound';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="d-flex flex-column min-vh-100">
        <Navigation />
        <main className="flex-fill">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cheatsheet" element={<CheatSheet />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
