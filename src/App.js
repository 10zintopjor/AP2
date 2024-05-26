import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Services from './pages/Services';
import ResidentialServices from './pages/ResidentialServices';
import CommercialServices from './pages/CommercialServices';
import AboutUs from './pages/AboutUs';
import Reviews from './pages/Reviews';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/residentialservices" element={<ResidentialServices />} />
        <Route path="/commercialservices" element={<CommercialServices />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
