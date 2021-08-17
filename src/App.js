import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Authentication/Login/Login";

import Register from "./components/Authentication/Registration/Register";
import BookAppointment from "./components/BookAppointments/BookAppointment/BookAppointment";
import Departments from "./components/BookAppointments/Departments/Departments";
import SpecificDoctors from "./components/BookAppointments/SpecificDoctors/SpecificDoctors";
import CovidTracker from "./components/CovidTracker/CovidTracker";
import DoctorDashboard from "./components/DoctorDashboard/DoctorDashboard/DoctorDashboard";
import AddDoctor from "./components/Home/Doctors/AddDoctor/AddDoctor";
import AllDoctorsCollection from "./components/Home/Doctors/AllDoctorsCollection/AllDoctorsCollection";
import Home from "./components/Home/Home/Home";
import PrivateRoute from "./components/Authentication/Login/PrivateRoute";
import UserDashboard from "./components/UserDashboard/UserDashboard/UserDashboard";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/addDoctor">
            <AddDoctor></AddDoctor>
          </Route>
          <PrivateRoute exact path="/allDoctorList">
            <AllDoctorsCollection></AllDoctorsCollection>
          </PrivateRoute>
          <Route path="/register">
            <Register />
          </Route>
          <PrivateRoute path="/appointment">
            <BookAppointment />
          </PrivateRoute>
          <Route path="/userdashboard">
            <UserDashboard />
          </Route>
          <Route path="/doctordashboard">
            <DoctorDashboard />
          </Route>
          <Route path="/covid19">
            <CovidTracker />
          </Route>
          <Route exact path="/doctorDepartments">
            <Departments />
          </Route>
          
          <Route path='/doctorDepartments/:department'>
            <SpecificDoctors />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
