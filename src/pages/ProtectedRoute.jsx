import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const user = localStorage.getItem("user");
  if (!user) {
    return <Navigate to="login" />;
  }
  return <Outlet />;
};
