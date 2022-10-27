import React, { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = (props) => {
  return props.loggedIn ? <Outlet /> : <Navigate to="/signin" />;
}

export default ProtectedRoute;