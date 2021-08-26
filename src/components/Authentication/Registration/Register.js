import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import doctorsChamber from "../../../images/doctorsChamber.jpg";
import ErrorModal from "../../Modal/ErrorModal/ErrorModal";
import SuccessModal from "../../Modal/SuccessModal/SuccessModal";
import "./Register.scss";

const Register = () => {
  const [passwordMatch, setPasswordMatch] = useState(false);
  // Usestate initialize for Modal handling
  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  // UseHistory for route changing
  let history = useHistory();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // Form Data
  const onSubmit = (data) => {
    if (data.password === data.confirmPassword) {
      delete data.confirmPassword;
      setPasswordMatch(false);

      fetch("https://whispering-reef-28119.herokuapp.com/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          if (result.status === true) {
            setSuccessModal(true);
            setTimeout(() => {
              history.replace("/login");
            }, 3000);
          } else if (result.status === false) {
            setErrorModal(true);
          }
        })
        .catch((err) => console.log(err));
    } else {
      setPasswordMatch(true);
    }
  };

  return (
    <>
      {/* Modal Start, success and error modal */}
      <SuccessModal
        modalContent={[
          successModal,
          setSuccessModal,
          "Successfully Register, Please You Need to LogIn",
        ]}
      />
      <ErrorModal
        modalContent={[errorModal, setErrorModal, "Email Already Used"]}
      />
      {/* Modal end*/}
      <div className="login-container">
        <div className="container custom-container pageHeight py-5">
          <h3 className="text-center">NEW HERE? PLEASE SIGN UP</h3>
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
                    type="text"
                    className="form-control login-input mx-auto rounded-pill px-3 py-2"
                    placeholder="Enter Your name"
                    name="name"
                    ref={register({ required: true })}
                  />
                </div>
                <div className="col-12">
                  <input
                    type="email"
                    className="form-control login-input mx-auto rounded-pill px-3 py-2"
                    placeholder="Enter Your Email"
                    name="email"
                    ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                  />
                  {errors.email && <span>Email not matched</span>}
                </div>
                <div className="col-12">
                  <input
                    type="password"
                    className="form-control login-input mx-auto rounded-pill px-3 py-2"
                    placeholder="Enter Your Password"
                    name="password"
                    ref={register({ required: true , minLength:8, maxLength:20 , pattern: /^[A-Za-z]+[0-9_]+$/i })}
                  />
                  {errors.password && <span>This field is required</span>}
                </div>
                <div className="col-12">
                  <input
                    type="password"
                    className="form-control login-input mx-auto rounded-pill px-3 py-2"
                    placeholder="Confirm Your Password"
                    name="confirmPassword"
                    ref={register({ required: true , minLength:8, maxLength:20 , pattern: /^[A-Za-z]+[0-9_]+$/i })}
                  />
                  {errors.confirmPassword && <span>password not match</span>}
                </div>
                <div className="col-12 text-center">
                  {(errors.name ||
                    errors.email ||
                    errors.password ||
                    errors.confirmPassword) && (
                    <p
                      className="text-center text-danger mt-2 mb-0"
                      style={{ fontWeight: "700" }}
                    >
                      * PLease fill up the form.
                    </p>
                  )}
                  {passwordMatch && (
                    <p
                      className="text-center text-danger mt-2 mb-0"
                      style={{ fontWeight: "700" }}
                    >
                      Not Match Your Password.
                    </p>
                  )}
                  <button
                    type="submit"
                    className="my-2 loginSubmitBtn rounded-pill px-4 py-2 mx-auto"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="text-center toggle-container py-3">
            <p>
              Already have an account ?{" "}
              <Link className="text-decoration-none" to="/login">
                <span>Login!</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
