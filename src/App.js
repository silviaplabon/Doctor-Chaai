import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import DoctorLogin from "./components/Authentication/DoctorLogin/DoctorLogin";
import Login from "./components/Authentication/Login/Login";
import PrivateRoute from "./components/Authentication/Login/PrivateRoute";
import Register from "./components/Authentication/Registration/Register";
import BookAppointment from "./components/BookAppointments/BookAppointment/BookAppointment";
import Departments from "./components/BookAppointments/Departments/Departments";
import SpecificDoctors from "./components/BookAppointments/SpecificDoctors/SpecificDoctors";
import CovidTracker from "./components/CovidTracker/CovidTracker";
import AllPatientSchedule from "./components/DoctorDashboard/AllPatientSchedule/AllPatientSchedule";
import CurrentPatientInfo from './components/DoctorDashboard/CurrentPatientInfo/CurrentPatientInfo';
import DoctorDashboard from "./components/DoctorDashboard/DoctorDashboard/DoctorDashboard";
import DoctorPrivateRoute from "./components/DoctorDashboard/DoctorPrivateRoute/DoctorPrivateRoute";
import AddDoctor from "./components/Home/Doctors/AddDoctor/AddDoctor";
import AllDoctorsCollection from "./components/Home/Doctors/AllDoctorsCollection/AllDoctorsCollection";
import Home from "./components/Home/Home/Home";
import Message from "./components/Messenger/Message";
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
          <Route exact path="/currentPatientDoctor">
            <CurrentPatientInfo />
          </Route>
          <Route exact path="/currentPatientUser">
            <AllPatientSchedule />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/addDoctor">
            <AddDoctor></AddDoctor>
          </Route>
          <PrivateRoute path="/allDoctorList">
            <AllDoctorsCollection></AllDoctorsCollection>
          </PrivateRoute>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/userdashboard">
            <UserDashboard />
          </Route>
          <DoctorPrivateRoute path="/doctordashboard">
            <DoctorDashboard />
          </DoctorPrivateRoute>
          <Route path="/covid19">
            <CovidTracker />
          </Route>
          <PrivateRoute exact path="/appointment">
            <Departments />
          </PrivateRoute>
          <PrivateRoute exact path='/appointment/:department'>
            <SpecificDoctors />
          </PrivateRoute>
          <PrivateRoute exact path='/appointment/:department/:id'>
            <BookAppointment/>
          </PrivateRoute>
          <Route path='/message'>
            <Message />
          </Route>
          <Route path="/doctorLogin">
            <DoctorLogin />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
