import React from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import Login from "./components/Authentication/Login/Login";
import Register from "./components/Authentication/Registration/Register";
import BookAppointment from "./components/BookAppointment/BookAppointment";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
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
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/appointment">
          <BookAppointment/>
        </Route>
        <Route path="/dashboard">
          <Dashboard/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
