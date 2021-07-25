import React from 'react';
import "./Header.scss";

const Header = () => {
    return (
        <section className="header-main d-flex align-items-center">
            <div className="header-main-container custom-container d-flex align-items-center">
                <div className="row">
                    <div className="col-md-7">
                        <h1>welcome to the hospital.</h1>
                        <p className="py-2">Hospital Management System or HMS Software is mainly a system that can help to maintain any hospital activities properly and easily. Moreover, the hospital management system can be used as clinical software. Also, it helps to keep records and monitor the activities of any hospital. </p>
                        <button>log in</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;