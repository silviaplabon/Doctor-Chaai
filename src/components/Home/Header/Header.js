import React from 'react';
import "./Header.scss";
import banner from "../../../images/banner-img.png";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <section className="header-main d-flex align-items-center">
            <div className="header-main-container container d-flex align-items-center">
                <div className="row h-100">
                    <div className="col-md-6 welcome-content h-100 d-flex align-items-center">
                        <div>
                            <h1>welcome to the hospital & <span className="life">life.</span></h1>
                            <p className="py-3">Hospital Management System or HMS Software is mainly a system that can help to maintain any hospital activities properly and easily. Moreover, the hospital management system can be used as clinical software. Also, it helps to keep records and monitor the activities of any hospital. </p>
                            <div className="pt-2">
                                <Link to="/login"><button className="login-btn">log in</button></Link>
                                <button className="appoint-btn">appointment</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={banner} alt="banner" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;