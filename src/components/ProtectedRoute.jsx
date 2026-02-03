import React from "react";
import { Navigate } from "react-router-dom";
import { AUTH_ENABLED } from "../config/auth";

export default function ProtectedRoute({ children }) {
  if (!AUTH_ENABLED) return children;

  const isAuthenticated = localStorage.getItem("isAuthenticated");
  if (!isAuthenticated) return <Navigate to="/" replace />;

  return children;
}
