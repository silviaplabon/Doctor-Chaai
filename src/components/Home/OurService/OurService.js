import React from 'react';
import './OurService.scss';

const OurService = () => {
    return (
        <div className="serviceBg">
            <div className="container-sm text-center py-5 serviceChild">
                <div className="row py-2">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6 m-auto">
                        <h2>Our Services</h2>
                        <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae</p>
                    </div>
                </div>
                <div className="py-4">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 serviceCard g-5">
                        <div className="col text-white">
                            <img src="https://i.ibb.co/ccBctkd/cardiology.png" alt="cardiology icon" />
                            <h3>Cardio Monitoring</h3>
                            <p>These cases are perfectly simple and easy to distinguish a free hour when our power</p>
                        </div>
                        <div className="col text-white">
                            <img src="https://i.ibb.co/Nm8P0TL/medical-Treatment.png" alt="medical treatment icon" />
                            <h3>Medical Treatment</h3>
                            <p>These cases are perfectly simple and easy to distinguish a free hour when our power</p>
                        </div>
                        <div className="col text-white">
                            <img src="https://i.ibb.co/zXZ2XKj/emergency.png" alt="emergency icon" />
                            <h3>Emergency Help</h3>
                            <p>These cases are perfectly simple and easy to distinguish a free hour when our power</p>
                        </div>
                        <div className="col text-white">
                            <img src="https://i.ibb.co/ZzDjScs/symptom.png" alt="symptom icon" />
                            <h3>Symptom Check</h3>
                            <p>These cases are perfectly simple and easy to distinguish a free hour when our power</p>
                        </div>
                        <div className="col text-white">
                            <img src="https://i.ibb.co/FbfTmFy/laboratory.png" alt="laboratory icon" />
                            <h3>Laboratory Test</h3>
                            <p>These cases are perfectly simple and easy to distinguish a free hour when our power</p>
                        </div>
                        <div className="col text-white">
                            <img src="https://i.ibb.co/Bf3n9Vm/analysis.png" alt="analysis icon" />
                            <h3>General Analysis</h3>
                            <p>These cases are perfectly simple and easy to distinguish a free hour when our power</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurService;