import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/authContext/index.jsx";

import Auth from "./auth/auth.jsx";
import "../styles/index.css";
import App from "./App.jsx";
import "../styles/App.css";
import { useState } from "react";
import Dashboard from "./dashboard/dashboard.jsx";
import FilesPage from "./FilesPage.jsx";
import Keyholders from "./Keyholders.jsx";
import Premium from "./Premium.jsx";
import ProtectedRoute from "../components/ProtectedRoute";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/files" element={<FilesPage />} />
          <Route path="/keyholders" element={<Keyholders />} />
          <Route path="/premium" element={<Premium />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
