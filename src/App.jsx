import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './pages/LandingPage';
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <Router>
      {/* Routing */}
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/SignUp" element={<SignUp/>} />
      </Routes>
    </Router>
  )
}

export default App
