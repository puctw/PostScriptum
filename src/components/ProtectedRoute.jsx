// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../app/context/authContext/index.jsx";

export default function ProtectedRoute({ children }) {
  const { userLoggedIn } = useAuth();

  if (!userLoggedIn) {
    return <Navigate to="/auth?mode=login" replace />;
  }

  return children;
}
