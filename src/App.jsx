import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AUTH_ENABLED } from "./config/auth";
import Login from "./pages/login";
import Home from "./pages/home";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Router>
      <Routes>
        {AUTH_ENABLED ? (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Home />} />
          </>
        )}
      </Routes>
    </Router>
  );
}
