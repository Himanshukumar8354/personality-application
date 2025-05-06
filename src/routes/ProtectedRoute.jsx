// src/routes/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('loggedInUser');
  return isAuthenticated ? children : <Navigate to="/signup" replace />;
};

export default ProtectedRoute;
