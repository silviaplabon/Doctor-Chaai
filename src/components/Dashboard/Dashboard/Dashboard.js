import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import DashboardData from "../DashboardData/DashboardData";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <Router>
      <div className="d-flex">
        <div className="sideBar">
          <div>
            <img src="https://i.ibb.co/FzBKrr8/dcLogoWH.png" alt="logo" />
          </div>
          <div className="sidebarMenu">
            <Link>
              <button className="btn">Dashboard</button>
            </Link>
            <Link>
              <button className="btn">Patients</button>
            </Link>
            <Link>
              <button className="btn">Doctors</button>
            </Link>
          </div>
          <div className="h-100 position-relative">
            <div className="sidebarLogout mt-auto">
              <button className="btn rounded-pill">Log Out</button>
            </div>
          </div>
        </div>
        <Switch>
         <Route path="/dashboard">
            <DashboardData />
          </Route> 
        </Switch>
      </div>
    </Router>
  );
};

export default Dashboard;
