import React from 'react';

import SignInPage from '../src/pages/SignInPage ';
import SignUpPage from '../src/pages/SignUpPage ';

import Dashboard from "../src/pages/Dashboard "


import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation();
  const showNavbar = location.pathname !== '/dashboard';

  return (
    <div className="app-container">
      {/* Conditionally render the navbar */}
      {showNavbar && (
        <nav className="navbar">
          <h1 className="logo">Your Logo</h1>
        </nav>
      )}

      <div className="content-container">
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>

      {/* Render the dashboard separately */}
      <div className="dash">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
