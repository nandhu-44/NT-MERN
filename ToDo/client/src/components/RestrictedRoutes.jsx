import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

const RestrictedRoutes = ({ children }) => {
  const userData = sessionStorage.getItem("user");
  return userData ? children : <Navigate to="/signin" />;  
};

export default RestrictedRoutes;
