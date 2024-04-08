import React from 'react';
import { Navigate } from 'react-router-dom';

const isAuthenticated = true; // Example authentication status

const withAuth = Component => {
  return props =>
    isAuthenticated ? <Component {...props} /> : <Navigate to="/login" />;
};

export default withAuth;
