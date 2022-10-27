import React, { Navigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  {console.log(props.loggedIn)}
  return props.loggedIn ? props.children : <Navigate to="/signin" />;
}

export default ProtectedRoute;