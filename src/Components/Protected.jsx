// src/Components/Protected.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppContext } from '../Context';

const ProtectedRoute = () => {
  // Get the current user state from the global context
  const { user } = useAppContext();

  // The <Outlet /> component renders the child route element (e.g., Checkout or Profile)
  // If the user object exists (is logged in), render the child component.
  if (user) {
    return <Outlet />;
  }

  // If the user is null (not logged in), redirect them to the login page.
  // 'replace' ensures the login page replaces the current entry in the history stack.
  return <Navigate to="/login" replace />;
};

export default ProtectedRoute;
