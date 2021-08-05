import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
import React from 'react';
import { useState } from 'react';
import doctorsChamber from '../../../images/doctorsChamber.jpg'
import './Login.scss'
import { auth, facebookProvider, googleProvider } from './firebase.config';
import { useHistory } from 'react-router-dom'

const Login = () => {
    let history = useHistory()
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
        if (user.password === user.confirmPassword) {
            auth.createUserWithEmailAndPassword(user.email, user.password)
                .then((result) => {
                    result.user.updateProfile({
                        displayName: user.fullName
                    })
                    history.push('/login')
                })
                .catch((err) => alert(err.message))
        }
        else {
            alert("Password not matched")
        }

    }

    const handleSignIn = () => {
        auth.signInWithEmailAndPassword(user.email, user.password)
            .then((res) => {
                const user = res.user;
                console.log(user);
                history.push('/')
            })

            .catch((err) => alert(err.message))

    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
    }

    const switchMode = () => {
        setSignUp((toggle) => !toggle)
    }

    const handleGoogleSignIn = () => {
        auth.signInWithPopup(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                history.push('/')

            }).catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage);

            });
    }

    const handleFacebookLogin = () => {
        auth.signInWithPopup(facebookProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })

            .catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage);

            });
    }

    return (
        <div className="login-container">
            <div className="container custom-container py-5">
                <h3 className="text-center">{isSignUp ? 'NEW HERE? PLEASE SIGN UP' : 'OUR OLD USER? PLEASE LOG IN'}</h3>
                <div className="row row-cols-1 row-cols-md-2">

                    <div className="col my-5 ">
                        <div className="doctor-img">
                            <img src={doctorsChamber} alt="" />
                        </div>
                    </div>
                    <div className="col p-0 mt-md-5  ps-md-3 pe-md-5 login-form" >
                        <form className="mt-md-5  me-md-auto mx-auto ms-1 " onSubmit={handleFormSubmit}>
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
                                            <button onClick={handleFacebookLogin} className="facebook-btn"><FontAwesomeIcon icon={faFacebook} /> <span>Log in</span></button>
                                            <button onClick={handleGoogleSignIn} className="google-btn"> <FontAwesomeIcon icon={faGoogle} /> <span>Log in</span></button>
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
        </div>
    );
};

export default Login;