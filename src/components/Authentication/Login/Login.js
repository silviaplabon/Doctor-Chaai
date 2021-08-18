import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { UserContext } from "../../../App";
import doctorsChamber from "../../../images/doctorsChamber.jpg";
import ErrorModal from "../../Modal/ErrorModal/ErrorModal";
import "./Login.scss";

const Register = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  // Usestate initialize for Modal handling
  const [errorModal, setErrorModal] = useState(false);

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // Form Data
  const onSubmit = (data) => {
    fetch('https://whispering-reef-28119.herokuapp.com/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        setLoggedInUser({ result: result.status,userName: result.user })
        console.log(result);
        if (result.status === true) {
          history.replace(from);
        }else if (result.status === false) {
          setErrorModal(true);
        }
        localStorage.setItem("Authorization", result.access_token);

      })
      .catch(err => console.log(err))
  };

  return (

    // <div className="login-container">
    //   {/* Error modal start */}
    //   <ErrorModal
    //     modalContent={[errorModal, setErrorModal, "LogIn Error, Please Try Again"]}
    //   />
    //   {/* Error modal end */}
    //   <div className="container custom-container py-5">
    //     <h3 className="text-center">OUR OLD USER? PLEASE LOG IN</h3>
    //     <div className="row row-cols-1 row-cols-md-2 login-container">
    //       <div className="col my-5 ">
    //         <div className="doctor-img">
    //           <img src={doctorsChamber} alt="" />
    //         </div>
    //       </div>
    //       <div className="col my-5 login-form">
    //         <form
    //           onSubmit={handleSubmit(onSubmit)}
    //           className="row row-cols-lg-auto g-4 align-items-center mt-4"
    //         >
    //           <div className="col-12">
    //             <input
    //               type="email"
    //               className="form-control login-input mx-auto rounded-pill px-3 py-2"
    //               placeholder="Enter Your Email"
    //               name="email"
    //               ref={register({ required: true })}
    //             />
    //           </div>
    //           <div className="col-12">
    //             <input
    //               type="password"
    //               className="form-control login-input mx-auto rounded-pill px-3 py-2"
    //               placeholder="Enter Your Password"
    //               name="password"
    //               ref={register({ required: true })} />
    //           </div>
    //           <div className="col-12 text-center">
    //             {(errors.email ||
    //               errors.password) && (
    //                 <p
    //                   className="text-center text-danger mt-2 mb-0"
    //                   style={{ fontWeight: "700" }}
    //                 >
    //                   * PLease fill up the form.
    //                 </p>
    //               )}
    //             <button
    //               type="submit"
    //               className="my-2 loginSubmitBtn rounded-pill px-4 py-2 mx-auto"
    //             >
    //               LogIn
    //             </button>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //     <div className="text-center toggle-container d-flex justify-content-center py-3">
    //       <p>
    //         Are you a new member ? <Link className="text-decoration-none" to="/register"><span>Register here!</span></Link>
    //       </p>
    //       <span className="mx-5 " style={{color:"#212729"}}>Or</span>
    //       <p>
    //         doctor ? <Link className="text-decoration-none" to="/addDoctor"><span>Register here!</span></Link>
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <><h1>Hi Rakib, you have done a mistake</h1></>
  );
};

export default Register;
