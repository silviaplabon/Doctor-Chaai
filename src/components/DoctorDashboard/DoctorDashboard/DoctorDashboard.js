import {
  faBell,
  faCalendarCheck,
  faChartPie,
  faUserInjured
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import cancelBtn from "../../../images/cancelMenu.svg";
import menuBtn from "../../../images/menu.svg";
import DoctorDashboardData from "../DoctorDashboardData/DoctorDashboardData";
import DoctorSchedule from "../DoctorSchedule/DoctorSchedule";
import "./DoctorDashboard.scss";

const DoctorDashboard = () => {
  const [expandDoctorSidebar, setExpandDoctorSidebar] = useState(false);

  return (
    <Router>
      <div className="d-flex">
        {/* Dashboard sidBar Start */}
        <div
          className={`doctorSideBar min-vh-100 ${
            expandDoctorSidebar && "doctorSideBarHide"
          }`}
        >
          <div className="dashboardLogo">
            <img src="https://i.ibb.co/FzBKrr8/dcLogoWH.png" alt="logo" />
          </div>
          <div className="sidebarMenu">
            <Link to="/doctorDashboard/dashboard">
              <FontAwesomeIcon className="me-3" icon={faChartPie} />
              Dashboard
            </Link>
            <Link to="/doctorDashboard/appointments">
              <FontAwesomeIcon className="me-3" icon={faUserInjured} />
              Appointments
            </Link>
            <Link to="/doctorDashboard/schedule">
              <FontAwesomeIcon className="me-3" icon={faCalendarCheck} />
              Schedule
            </Link>
          </div>
        </div>
        {/* Dashboard sidBar End */}
        {/* Dashboard Child start */}
        <div className="w-100">
          {/* Dashboard TopBar Start */}
          <div>
            <div className="dashboardTopbar">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <button
                    onClick={() => setExpandDoctorSidebar(!expandDoctorSidebar)}
                    className="btn menuBtn"
                  >
                    {expandDoctorSidebar ? (
                      <img src={cancelBtn} alt="menu button" />
                    ) : (
                      <img src={menuBtn} alt="menu button" />
                    )}
                  </button>
                </div>
                <div className="dashboardTopbarMenu d-flex align-items-center">
                  <FontAwesomeIcon className="topbarIcon" icon={faBell} />
                  <img
                    className="rounded-circle"
                    src="https://i.ibb.co/jZnydgt/foto-sushi-6anudmp-ILw4-unsplash.jpg"
                    alt="profile pic"
                  />
                  <h4>Md Rakib</h4>
                </div>
              </div>
            </div>
            <hr className="m-0" />
          </div>
          {/* Dashboard TopBar End */}

          <Switch>
            <Route path="/doctordashboard/dashboard">
              <DoctorDashboardData />
            </Route>
            <Route path="/doctordashboard/schedule">
              <DoctorSchedule />
            </Route>
          </Switch>
        </div>
        {/* Dashboard Child end */}
      </div>
    </Router>
  );
};

export default DoctorDashboard;
