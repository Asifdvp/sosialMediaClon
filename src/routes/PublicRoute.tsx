import React from "react";
import { Navigate } from "react-router-dom";
const currentUser = true;
const PublicRoute = ({ children }: any) => {
  if (currentUser) {
    return <Navigate to={"/"} />;
  }
  return children;
};

export default PublicRoute;
