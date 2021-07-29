import React from 'react';
import "./Android.scss";
import phoneImg from "../../../images/phone.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlay, faAppStoreIos } from '@fortawesome/free-brands-svg-icons'

const Android = () => {
    return (
        <section className="android-app d-flex align-items-center justify-content-center">
            <div className="android-container">
                <div className="text-center py-1">
                    <div className="position-relative">
                        <div className="dash-line position-absolute"></div>
                        <h5>our mobile app</h5>
                    </div>
                    <h2>download our app and use today</h2>
                </div>
                <div className="app-container">
                    <div className="row h-100">
                        <div className="col-md-6 col-12 app-content h-100 d-flex align-items-center justify-content-center">
                            <div className="w-75 width-100">
                                <h4>get it from the app store</h4>
                                <p>our regular android app will update you on time and will help you to get appointed</p>
                                <div>
                                    <button><FontAwesomeIcon icon={faAppStoreIos}/> apple</button>
                                    <button><FontAwesomeIcon icon={faGooglePlay}/> google</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <img src={phoneImg} alt="phone"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Android;