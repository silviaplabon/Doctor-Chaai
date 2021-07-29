import React from 'react';
import aboutImage from '../../../images/aboutImage.png';
import './About.scss';

const About = () => {
    return (
        <div className="container-sm py-4">
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="cols p-4" >
                    <div className="pe-lg-4 p-sm-3">
                        <img className="w-100" src={aboutImage} alt="find doctor"/>
                    </div>
                </div>
                <div className="cols d-flex align-items-center aboutContent">
                    <div className="p-4">
                        <div>
                            <h4>About Us</h4>
                        </div>
                        <h2>We Do Care About You</h2>
                        <p>Hospital Management System or HMS Software is mainly a system that can help to maintain any hospital activities properly and easily, Moreover.</p>
                        <p>The hospital management system can be used as clinical software.</p>
                        <button className="btn rounded-pill aboutBtn">Download Annual Report</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;