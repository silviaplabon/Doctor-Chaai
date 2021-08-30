import React from "react";
import { NavLink } from "react-router-dom";
import "./TakeAppointment.scss";

const TakeAppointment = () => {
  const handleClick = () => {
    console.log("do something");
  };

  return (
    <div className="container-sm takeAppointmentDiv my-md-5 my-3 py-md-5 py-3">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col order-1 order-md-0 flexdiv d-flex justify-content-around align-items-center">
          <div className="appointmentContent px-3 px-lg-2">
            <h2 className="pt-2 pb-md-3 pb-2">Quick Appointment</h2>
            <h1 className="pb-1">HAVEN'T BOOKED YET? </h1>
            <p>
              Hospital Management System or HMS Software is mainly a system that
              can help to maintain any hospital activities properly and easily.
              Moreover,{" "}
            </p>
            <NavLink
              to="/appointment"
              onClick={handleClick}
              className="btn rounded-pill appointBtn mt-3"
            >
              Appoint Your Doctor
            </NavLink>
          </div>
        </div>
        <div className="col order-0 appointmentImg px-4 px-xl-5">
          <img
            src="https://i.ibb.co/nny0MK7/national-cancer-institute-NFvd-KIhx-Yl-U-unsplash.jpg"
            alt="take appointment"
          />
        </div>
      </div>
    </div>
  );
};

export default TakeAppointment;
