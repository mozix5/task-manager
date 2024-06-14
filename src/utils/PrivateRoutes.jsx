import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUserData } from "../context/appContext";

const PrivateRoutes = () => {
  const { token } = useUserData();
  // let auth={'token':false}
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
