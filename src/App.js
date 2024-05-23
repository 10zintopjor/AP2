import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
