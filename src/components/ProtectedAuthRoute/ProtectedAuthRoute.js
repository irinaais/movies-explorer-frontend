import React, { Navigate } from "react-router-dom";

const ProtectedAuthRoute = (props) => {
  return props.loggedIn ? <Navigate to="/movies" /> : props.children;
}

export default ProtectedAuthRoute;