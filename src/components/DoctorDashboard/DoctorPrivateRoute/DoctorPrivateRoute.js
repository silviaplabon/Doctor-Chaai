import React, { useContext, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { UserContext } from "../../../App";

const DoctorPrivateRoute = ({ children, ...rest }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isDoctor, setIsDoctor] = useState(false);

  useEffect(() => {
    fetch("https://whispering-reef-28119.herokuapp.com/doctor/doctorVerify", {headers: { 
       
        'Authorization':`Bearer ${localStorage.getItem('Authorization')}`,
        "email":`${loggedInUser.email}`,
    }
    }).then(res=>res.json())
    .then(data=>setIsDoctor(data.status))
    .catch(err=>console.log(err))
  }, []);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.result === true ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default DoctorPrivateRoute;
