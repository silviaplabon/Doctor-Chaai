import React from "react";
import doctor from "../../../images/doctor-subscribe.png";
// import send from "../../../images/send.svg";
// import MailchimpSubscribe from "react-mailchimp-subscribe"
import "./Subscribe.scss";
import CustomForm from "./CustomForm";

const url = `https://gmail.us6.list-manage.com/subscribe/post?u=6e95580eab09fc5cab231cea4&id=6819fed504`;
const Subscribe = () => {

  return (
    <div className="container mt-5 subscribeDiv">

      <h2 className="fw-bold  text-center subscribeText">
        WANNA BE UP-TO-DATE? <br /> LET'S SUBSCRIBE
      </h2>

      <div className="row row-cols-1 row-cols-md-2 subscribeRow ">
        <div className="col text-center subscribeImg">
          <img src={doctor} alt="" className="img-fluid " />
        </div>
        <div className="col text-center subscribeRowDiv">
          <h5 className="mt-5  ">Send your mail to get daily news and update</h5>
          <div className="d-flex justify-content-center align-items-center">
            <CustomForm url={url} />
          </div>
        </div>



      </div>
    </div>
  );
};

export default Subscribe;
