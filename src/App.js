import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import Home from './pages/dashboard/Home';
import Bookmarks from './pages/dashboard/Bookmarks';
import Authors from './pages/dashboard/History';
import SignUpPage from './pages/SignUpPage';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import Overview from './pages/admin/Overview';
import Users from './pages/admin/Users';
import Books from './pages/admin/Books';




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/home" element={<Home />} />
          <Route path="/dashboard/bookmarks" element={<Bookmarks />} />
          <Route path="/dashboard/history" element={<Authors />} />
        </Route>

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />}>
          <Route path="/admin/overview" element={<Overview />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/books" element={<Books />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
