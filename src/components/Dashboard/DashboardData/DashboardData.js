import React from "react";
import './DashboardData.scss';

const DashboardData = () => {
  return (
    <div className="w-100">
      <div className="pt-5 pb-4 px-5">
        <div className="pt-2 px-4">
          <div className="d-flex justify-content-between align-items-center dashboardTitle">
            <h3>Dashboard</h3>
            <p>example@gmail.com</p>
          </div>
        <div className="row row-cols-lg-4 row-cols-md-4 row-cols-sm-2 row-cols-1 g-4 mt-3">
            <div className="col text-sm-center p-xl-5 p-lg-3 p-md-2 p-2">
                <div className="totalPatient DashboardCard d-xl-flex justify-content-between align-items-center">
                    <h4>Total Patient</h4>
                    <h2>45</h2>
                </div>
            </div>
            <div className="col text-sm-center p-xl-5 p-lg-3 p-md-2 p-2">
                <div className="todaysPatient DashboardCard d-xl-flex justify-content-between align-items-center">
                    <h4>Today's Patient</h4>
                    <h2>25</h2>
                </div>
            </div>
            <div className="col text-sm-center p-xl-5 p-lg-3 p-md-2 p-2">
                <div className="totalDoctors DashboardCard d-xl-flex justify-content-between align-items-center">
                    <h4>Total Doctors</h4>
                    <h2>10</h2>
                </div>
            </div>
            <div className="col text-sm-center p-xl-5 p-lg-3 p-md-2 p-2">
                <div className="todaysOTList DashboardCard d-xl-flex justify-content-between align-items-center">
                    <h4>Today's OT List</h4>
                    <h2>04</h2>
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardData;
