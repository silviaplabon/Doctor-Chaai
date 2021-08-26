import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "../../../App";

const DoctorPrivateRoute = ({ children, ...rest }) => {
  const [loggedInUser] = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedInUser?.isDoctor === true ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/doctorLogin",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default DoctorPrivateRoute;
