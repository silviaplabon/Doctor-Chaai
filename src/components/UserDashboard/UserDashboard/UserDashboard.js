import {
  faBell,
  faChartPie,
  faUserInjured
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch, useHistory } from "react-router-dom";
import { UserContext } from "../../../App";
import cancelBtn from "../../../images/cancelMenu.svg";
import menuBtn from "../../../images/menu.svg";
import UserAppointmentList from '../UserAppointmentList/UserAppointmentList';
import UserDashboardData from "../UserDashboardData/UserDashboardData";
import "./UserDashboard.scss";

const UserDashboard = () => {
  const [expandUserSidebar, setexpandUserSidebar] = useState(false);
  const [loggedInUser] = useContext(UserContext);
  const history = useHistory();

  return (
    <Router>
      <div className="d-flex">
        {/* Dashboard sidBar Start */}
        <div
          className={`userSideBar min-vh-100 ${
            expandUserSidebar && "doctorSideBarHide"
          }`}
        >
          <div style={{cursor:'pointer'}} onClick={()=>history.push('/home')} className="dashboardLogo">
            <img src="https://i.ibb.co/FzBKrr8/dcLogoWH.png" alt="logo" />
          </div>
          <div className="sidebarMenu">
            <Link to="/userdashboard/dashboard">
              <FontAwesomeIcon className="me-3" icon={faChartPie} />
              Dashboard
            </Link>
            <Link to="/userdashboard/appointment">
              <FontAwesomeIcon className="me-3" icon={faUserInjured} />
              Appointments
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
                    onClick={() => setexpandUserSidebar(!expandUserSidebar)}
                    className="btn menuBtn"
                  >
                    {expandUserSidebar ? (
                      <img src={cancelBtn} alt="menu button" />
                    ) : (
                      <img src={menuBtn} alt="menu button" />
                    )}
                  </button>
                </div>
                <div className="dashboardTopbarMenu d-flex align-items-center">
                  <FontAwesomeIcon className="topbarIcon" icon={faBell} />
                  <div className="profileLogo rounded-circle">
                  <span>{loggedInUser?.email[0]}</span>
                  </div>
                  <h4>{loggedInUser?.email}</h4>
                </div>
              </div>
            </div>
            <hr className="m-0" />
          </div>
          {/* Dashboard TopBar End */}

          <Switch>
            <Route exact path="/userdashboard/dashboard">
              <UserDashboardData />
            </Route>
            <Route exact path="/userdashboard/appointment">
             <UserAppointmentList></UserAppointmentList>
            </Route>
          </Switch>
        </div>
        {/* Dashboard Child End */}
      </div>
    </Router>
  );
};


export default UserDashboard;
