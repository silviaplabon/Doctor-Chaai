import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
import React from 'react';
import { useState } from 'react';
import doctorsChamber from '../../../images/doctorsChamber.jpg'
import './Login.scss'

const Login = () => {
    const [isSignUp, setSignUp] = useState(false)
    const [user, setUser] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target

        setUser((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })
    }
    const handleCreateUser = () => {

    }

    const handleSignIn = () => {

    }
    const handleSubmit = () => {

    }

    const switchMode = () => {
        setSignUp((toggle) => !toggle)
    }
    
    return (
        <div className="container custom-container py-5">
            <h3 className="text-center">{isSignUp ? 'NEW HERE? PLEASE SIGN UP' : 'OUR OLD USER? PLEASE LOG IN'}</h3>
            <div className="row row-cols-1 row-cols-md-2 login-container">

                <div className="col my-5 ">
                    <div className="doctor-img">
                        <img src={doctorsChamber} alt="" />
                    </div>
                </div>
                <div className="col p-0 mt-md-5  ps-md-3 pe-md-5 login-form" >
                    <form className="mt-md-5  me-md-auto mx-auto ms-1 " onSubmit={handleSubmit}>
                        {
                            isSignUp &&
                            <div className="mb-3">
                                <input name="fullName" value={user.fullName} onChange={handleChange} required type="text" className="form-control" id="fullName" placeholder="Enter your Name.." />
                            </div>
                        }
                        <div className="mb-3">
                            <input name="email" value={user.email} onChange={handleChange} required type="email" id="email" className="form-control" placeholder="Your email.." />
                        </div>
                        <div className="mb-3">
                            <input name="password" value={user.password} onChange={handleChange} required type="password" className="form-control" id="password" placeholder="Your Password.." />
                        </div>
                        {
                            isSignUp &&
                            <div className="mb-3">
                                <input name="confirmPassword" value={user.confirmPassword} onChange={handleChange} required type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password.." />
                            </div>
                        }
                        <div className="col-12 mb-3">
                            {
                                isSignUp ?
                                    <button onClick={handleCreateUser} className="submit-btn form-control" type="submit">Register</button> :
                                    <button onClick={handleSignIn} className="submit-btn form-control" type="submit">Log in</button>
                            }
                        </div>
                        {
                            isSignUp ? "" :
                                <div className="Social-login">
                                    <h5 className="text-center">or</h5>
                                    <div className="mt-4 d-flex align-items-center justify-content-between social-media-button">
                                        <button className="facebook-btn"><FontAwesomeIcon icon={faFacebook} /> <span>Log in</span></button>
                                        <button className="google-btn"> <FontAwesomeIcon icon={faGoogle} /> <span>Log in</span></button>
                                    </div>
                                </div>
                        }
                    </form>
                </div>

            </div>
            <div className="text-center toggle-container py-3">
                {
                    isSignUp ?
                        <p>Already have an account ? <span onClick={switchMode}>Login!</span></p> :
                        <p>Are you a new member ? <span onClick={switchMode}>Register here!</span></p>
                }
            </div>
        </div>
    );
};

export default Login;