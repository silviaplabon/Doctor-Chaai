import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';
import doctorsChamber from '../../../images/doctorLogin.jpg';
import ErrorModal from '../../Modal/ErrorModal/ErrorModal';


const DoctorLogin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);

    const [errorModal, setErrorModal] = useState(false);

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: '/' } };
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // Form Data
    const onSubmit = (data) => {
        fetch('https://whispering-reef-28119.herokuapp.com/doctor/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                setLoggedInUser({ result: result.status, isDoctor: result.isDoctor, email: result.email })
                if (result.status === true && result.isDoctor === true) {
                    history.replace(from);
                } else if (result.status === false) {
                    setErrorModal(true);
                }
                localStorage.setItem('Authorization', result.access_token);
            })
            .catch((err) => console.log(err));
    };
    return (
        <div className="login-container">
            {/* Error modal start */}
            <ErrorModal
                modalContent={[
                    errorModal,
                    setErrorModal,
                    'You are not a Doctor',
                ]}
            />
            {/* Error modal end */}
            <div className="container custom-container py-5">
                <h3 className="text-center">OUR OLD DOCTOR? PLEASE LOG IN</h3>
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
                                    className="form-control login-input mx-auto rounded-pill px-3 py-2"
                                    placeholder="Enter Your Email"
                                    name="email"
                                    ref={register({ required: true })}
                                />
                            </div>
                            <div className="col-12">
                                <input
                                    type="password"
                                    className="form-control login-input mx-auto rounded-pill px-3 py-2"
                                    placeholder="Enter Your Password"
                                    name="password"
                                    ref={register({ required: true })}
                                />
                            </div>
                            <div className="col-12 text-center">
                                {(errors.email || errors.password) && (
                                    <p
                                        className="text-center text-danger mt-2 mb-0"
                                        style={{ fontWeight: '700' }}
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
                <div className="text-center toggle-container d-flex justify-content-center py-3">
                    <p>
                        Not have an Account ?{' '}
                        <Link className="text-decoration-none" to="/addDoctor">
                            <span>Register here!</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DoctorLogin;