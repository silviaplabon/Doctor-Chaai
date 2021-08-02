import React from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import BookAppointment from "./components/BookAppointment/BookAppointment";
import Login from "./components/Authentication/Login/Login";
import Register from "./components/Authentication/Registration/Register";
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
      </Switch>
    </Router>
  );
}

export default App;
