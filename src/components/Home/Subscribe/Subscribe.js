import React from "react";
import doctor from "../../../images/doctor-subscribe.png";
import CustomForm from "./CustomForm";
import "./Subscribe.scss";

const url = `https://gmail.us6.list-manage.com/subscribe/post?u=6e95580eab09fc5cab231cea4&id=6819fed504`;
const Subscribe = () => {

  return (
    <div className="container mt-5 pb-2 pb-md-5 subscribeDiv">
      <div className="text-center subscribeText">
        <h2 className="fw-bold pt-2">
          WANNA BE UP-TO-DATE? <br /> LET'S SUBSCRIBE
        </h2>
      </div>
      <div className="row row-cols-1 row-cols-lg-2 subscribeRow mx-2">
        <div className="col text-center px-3 px-md-4 px-lg-5 subscribeRowDiv">
          <h4 className="mb-3">Send your mail to get daily news and update</h4>
          <CustomForm url={url} />
        </div>
        <div className="col text-center subscribeImg position-relative">
          <img src={doctor} alt="doctor img" />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
