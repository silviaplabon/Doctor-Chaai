import React from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";

import Login from "./components/Authentication/Login/Login";
import AddDoctor from "./components/Home/Doctors/AddDoctor/AddDoctor";
import AllDoctorsCollection from "./components/Home/Doctors/AllDoctorsCollection/AllDoctorsCollection";
import Home from "./components/Home/Home/Home";

function App() {
  return (
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
        <Route exact path="/allDoctorList">
         <AllDoctorsCollection></AllDoctorsCollection>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
