import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import Home from './pages/dashboard/Home';
import Books from './pages/dashboard/Bookmarks';
import Authors from './pages/dashboard/History';
import SignUpPage from './pages/SignUpPage';




const App = () => {
  return (
    <Router>
      <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="/dashboard/home" element={<Home />} />
              <Route path="/dashboard/bookmarks" element={<Books />} />
              <Route path="/dashboard/history" element={<Authors />} />
            </Route>
          </Routes>
    </Router>
  );
};

export default App;
