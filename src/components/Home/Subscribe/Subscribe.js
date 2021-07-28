import React from "react";
import doctor from "../../../images/doctor-subscribe.png";
import send from "../../../images/send.svg";
import { useForm } from "react-hook-form";

import "./Subscribe.scss";
const Subscribe = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="container mt-5 subscribeDiv">


      <div className="text-center subscribeText">
        <h2 className="fw-bold pt-5">
          WANNA BE UP-TO-DATE? <br /> LET'S SUBSCRIBE
        </h2>
      </div>


      <div className="row subscribeRow">
        <div className="col-lg-6 text-center subscribeRowDiv">
          <h5>send your mail to get daily news and update</h5>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input className="text-center input" name="exampleRequired" ref={register({ required: true })} defaultValue="type your email"/>
            {/* <img src={send} alt="" /> */}
            <button className="button"> <img src={send} alt="" style={{height: '30px'}}/> Submit</button>
          </form>
        </div>


        <div className="col-lg-6 text-center subscribeImg">
            <img src={doctor} alt="" />
        </div>


      </div>
    </div>
  );
};

export default Subscribe;
