import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthenticationContext } from "../Context/AuthenticationContext";

const ProtectedRoute = ({ component: Component, auth, ...rest }) => {
  const { user } = useContext(AuthenticationContext);
  // console.log("user", user);
  return (
    <Route
      {...rest}
      render={(props) =>
        user != null ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              redirectRoute: {
                old: props.location,
              },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
