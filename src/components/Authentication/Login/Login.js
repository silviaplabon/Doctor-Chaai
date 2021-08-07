import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import doctorsChamber from "../../../images/doctorsChamber.jpg";
import "./Login.scss";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // Form Data
  const onSubmit = (data) => console.log(data);

  return (
    <div className="login-container">
      <div className="container custom-container py-5">
        <h3 className="text-center">OUR OLD USER? PLEASE LOG IN</h3>
        <div className="row row-cols-1 row-cols-md-2 login-container">
          <div className="col my-5 ">
            <div className="doctor-img">
              <img src={doctorsChamber} alt="" />
            </div>
          </div>
          <div className="col my-5 login-form">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="row row-cols-lg-auto g-4 align-items-center mt-4"
            >
              <div className="col-12">
                <input
                  type="email"
                  className="form-control mx-auto rounded-pill px-3 py-2"
                  placeholder="Enter Your Email"
                  name="email"
                  ref={register({ required: true })}
                />
              </div>
              <div className="col-12">
                <input
                  type="password"
                  className="form-control mx-auto rounded-pill px-3 py-2"
                  placeholder="Enter Your Password"
                  name="password"
                  ref={register({ required: true })}
                />
              </div>
              <div className="col-12 text-center">
                {(errors.email ||
                  errors.password) && (
                  <p
                    className="text-center text-danger mt-2 mb-0"
                    style={{ fontWeight: "700" }}
                  >
                    * PLease fill up the form.
                  </p>
                )}
                <button
                  type="submit"
                  className="my-2 loginSubmitBtn rounded-pill px-4 py-2 mx-auto"
                >
                  LogIn
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="text-center toggle-container py-3">
          <p>
            Are you a new member ? <Link className="text-decoration-none" to="/register"><span>Register here!</span></Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
