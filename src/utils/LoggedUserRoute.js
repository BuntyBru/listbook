import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthenticationContext } from "../Context/AuthenticationContext";

const LoggedUserRoute = ({ component: Component, auth, ...rest }) => {
  const { user } = useContext(AuthenticationContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        user == null ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        )
      }
    />
  );
};

export default LoggedUserRoute;
