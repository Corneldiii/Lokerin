import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './pages/LandingPage';
import SignUpCO from './pages/SignUpCO';
import SignUpJS from './pages/SignUpJS';

const App = () => {
  return (
    <Router>
      {/* Routing */}
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/SignUpJS" element={<SignUpJS/>} />
        <Route path="/SignUpCO" element={<SignUpCO/>} />
      </Routes>
    </Router>
  )
}

export default App
