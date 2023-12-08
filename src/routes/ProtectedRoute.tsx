import React from "react";
import { Navigate } from "react-router-dom";
const currentUser = true;
const ProtectedRoute = ({ children }: any) => {
  if (!currentUser) {
    return <Navigate to={"/login"} />;
  }
  return children;
};

export default ProtectedRoute;
