import React from 'react';
import './OurService.scss';
import Analysis from './SvgIcon/Analysis';
import Cardiology from './SvgIcon/Cardiology';
import Emergency from './SvgIcon/Emergency';
import MicroScope from './SvgIcon/MicroScope';
import Symptom from './SvgIcon/Symptom';
import Treatment from './SvgIcon/Treatment';

const OurService = () => {
    return (
        <div className="serviceBg">
            <div className="container text-center py-5">
                <div className="row py-2 serviceChild">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6 m-auto">
                        <div>
                            <h4>Our Services</h4>
                        </div>
                        <h2>Check Out Our Common Services</h2>
                    </div>
                </div>
                <div className="py-4">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-2">
                        <div className="col">
                            <div className="serviceCard">
                                <Cardiology/>
                                <h4>Cardio Monitoring</h4>
                                <p>These cases are perfectly simple and easy to distinguish a free hour when our power</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="serviceCard">
                                <Treatment/>
                                <h4>Medical Treatment</h4>
                                <p>These cases are perfectly simple and easy to distinguish a free hour when our power</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="serviceCard">
                                <Emergency/>
                                <h4>Emergency Help</h4>
                                <p>These cases are perfectly simple and easy to distinguish a free hour when our power</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="serviceCard">
                                <Symptom/>
                                <h4>Symptom Check</h4>
                                <p>These cases are perfectly simple and easy to distinguish a free hour when our power</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="serviceCard">
                                <MicroScope/>
                                <h4>Laboratory Test</h4>
                                <p>These cases are perfectly simple and easy to distinguish a free hour when our power</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="serviceCard">
                                <Analysis/>
                                <h4>General Analysis</h4>
                                <p>These cases are perfectly simple and easy to distinguish a free hour when our power</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurService;