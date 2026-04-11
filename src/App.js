import React from 'react';
import Home from './PortfolioWebsite/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './PortfolioWebsite/Nav';
import About from './PortfolioWebsite/About';
import Portfolio from './PortfolioWebsite/Portfolio';
import Contact from './PortfolioWebsite/Contact';
import Blog from './PortfolioWebsite/Blog';
import "./PortfolioWebsite/Home.css"

export default function App() {
  return (
    <>
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/contact" element={<Contact/>} />
          <Route path="/blog" element={<Blog/>} />
        </Routes>
      </div>
    </Router>

    
    </>
  );
}
