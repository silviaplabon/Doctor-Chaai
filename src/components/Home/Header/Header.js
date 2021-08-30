import React from 'react';
import { Link } from 'react-router-dom';
import banner from "../../../images/banner-img.png";
import "./Header.scss";

const Header = () => {
    return (
        <section className="header-main d-flex align-items-center">
            <div className="header-main-container container d-flex align-items-center">
                <div className="row h-100 container">
                    <div className="col-12 col-md-7 welcome-content h-100 d-flex align-items-center">
                        <div>
                            <h1>welcome to the hospital & <span className="life">life.</span></h1>
                            <p className="py-3">Hospital Management System or HMS Software is mainly a system that can help to maintain any hospital activities properly and easily. Moreover, the hospital management system can be used as clinical software. Also, it helps to keep records and monitor the activities of any hospital. </p>
                            <div className="d-flex">
                                <Link to="/appointment">
                                    <button className="appoint-btn px-3 py-2 headerButton">appointment</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-0 col-md-5 d-none d-md-block">
                        <img src={banner} alt="banner" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;