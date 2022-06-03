import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const user = sessionStorage.getItem("userEmail");
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
