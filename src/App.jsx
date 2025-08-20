import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './pages/LandingPage';

const App = () => {
  return (
    <Router>
      {/* Routing */}
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </Router>
  )
}

export default App
