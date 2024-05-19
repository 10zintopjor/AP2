import React from 'react';
import HeroSection from './components/Hero';
import Navbar from './navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
      <Navbar />
    </div>
    </Router>
  );
}

export default App;
