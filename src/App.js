import React, { createContext, useState } from "react";

import {
  BrowserRouter as Router, Redirect, Route, Switch
} from "react-router-dom";

import Login from "./components/Authentication/Login/Login";
import Register from "./components/Authentication/Registration/Register";
import BookAppointment from "./components/BookAppointments/BookAppointment/BookAppointment";
import BookAppointmentUpdate from "./components/BookAppointments/BookAppointment/BookAppointmentUpdate";
import Departments from "./components/BookAppointments/Departments/Departments";
import SpecificDoctors from "./components/BookAppointments/SpecificDoctors/SpecificDoctors";
import CovidTracker from "./components/CovidTracker/CovidTracker";
import DoctorDashboard from "./components/DoctorDashboard/DoctorDashboard/DoctorDashboard";
import DoctorPrivateRoute from "./components/DoctorDashboard/DoctorPrivateRoute/DoctorPrivateRoute";
import AddDoctor from "./components/Home/Doctors/AddDoctor/AddDoctor";
import AllDoctorsCollection from "./components/Home/Doctors/AllDoctorsCollection/AllDoctorsCollection";
import Home from "./components/Home/Home/Home";
import PrivateRoute from "./components/Authentication/Login/PrivateRoute";

import Message from "./components/Messenger/Message";
import UserDashboard from "./components/UserDashboard/UserDashboard/UserDashboard";
import CurrentPatientInfo from './components/DoctorDashboard/CurrentPatientInfo/CurrentPatientInfo';
import AllPatientSchedule from "./components/DoctorDashboard/AllPatientSchedule/AllPatientSchedule";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/currentPatientDoctor">
            <CurrentPatientInfo/>
          </Route>
          <Route exact path="/currentPatientUser">
            <AllPatientSchedule/>
          </Route>
          <Route  path="/home">
            <Home />
          </Route>
          <Route  path="/login">
          <Login/>
          </Route>
          <Route  path="/addDoctor">
            <AddDoctor></AddDoctor>
          </Route>
          <PrivateRoute  path="/allDoctorList">
            <AllDoctorsCollection></AllDoctorsCollection>
          </PrivateRoute>
          <Route  path="/register">
            <Register />
          </Route>
          <PrivateRoute path="/appointment">
            {/* <BookAppointment /> */}
            <BookAppointmentUpdate></BookAppointmentUpdate>
          </PrivateRoute>
          <Route  path="/userdashboard">
            <UserDashboard />
          </Route>
          <Route  path="/doctordashboard">
            <DoctorDashboard />
          </Route>
          <PrivateRoute path="/doctordashboard">
            <DoctorDashboard/>
          </PrivateRoute>
          <Route path="/covid19">
            <CovidTracker />
          </Route>
          <Route path="/doctorDepartments">
            <Departments />
          </Route>
          <Route path='/doctorDepartments/:department'>
            <SpecificDoctors />
          </Route>
          <Route path='/message'>
            <Message />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
