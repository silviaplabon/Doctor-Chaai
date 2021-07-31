import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <div className="footerParent">
            <div className="container-sm py-5 custom-container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 footerContent pt-5">
                    <div className="col mt-3">
                        <h4>DoctorsChaai</h4>
                        <h6>About</h6>
                        <h6>Blog</h6>
                        <h6>Careers</h6>
                        <h6>Press</h6>
                        <h6>Contact Us</h6>
                    </div>
                    <div className="col mt-3">
                        <h4>For Patients</h4>
                        <h6>Search for Doctors</h6>
                        <h6>Search for Clinics</h6>
                        <h6>Search for Hospital</h6>
                        <h6>Book Diagnostic Tests</h6>
                        <h6>Book Full Body Checkups</h6>
                        <h6>Read Health Articles</h6>
                        <h4>For Doctors</h4>
                        <h6>DoctorsChaai Profile</h6>
                    </div>
                    <div className="col mt-3">
                        <h4>For Hospital</h4>
                        <h6>Insta by DoctorsChaai</h6>
                        <h6>DoctorsChaai Profile</h6>
                        <h6>DoctorsChaai Reach</h6>
                        <h6>DoctorsChaai Drive</h6>
                    </div>
                    <div className="col mt-3">
                        <h4>More</h4>
                        <h6>Help</h6>
                        <h6>Developers</h6>
                        <h6>Privacy Policy</h6>
                        <h6>Terms &and; Conditions</h6>
                        <h6>Healthcare Directory</h6>
                        <h6>Practo Health Wiki</h6>
                        <h6>Corporate Wellness</h6>
                    </div>
                </div>
                <div className="footerSocial pt-5">
                    <hr/>
                    <div className="d-block d-sm-flex justify-content-between align-items-center">
                        <div>
                            <img className="logoImg" src="https://i.ibb.co/FzBKrr8/dcLogoWH.png" alt="doctors-chaai" />
                        </div>
                        <div className="d-flex align-items-center socialIcon">
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faTwitter} />
                            <FontAwesomeIcon icon={faInstagram} />
                            <FontAwesomeIcon icon={faYoutube} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;