import React, { createElement } from "react";
import { Route, Redirect } from "react-router-dom";
const PrivateRoute = ({ component, ...rest }) => {
  const isLogged = localStorage.getItem("token");

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogged ? createElement(component, props) : <Redirect to="/shop" />
      }
    />
  );
};

export default PrivateRoute;
