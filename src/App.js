import React from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import Home from "./components/Home/Home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
