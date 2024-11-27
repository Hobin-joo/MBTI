import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  if (!user) {
    return <Navigate to="login" />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
