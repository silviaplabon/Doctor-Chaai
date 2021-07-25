import React from 'react';
import './FindDoctor.scss';

const FindDoctor = () => {
    return (
        <div className="container-sm py-4 find-doctor-section">
            <div className="row row-cols-1 row-cols-sm-2 g-4">
                <div className="cols p-4" >
                    <div className="findImg">
                        <img src="https://i.ibb.co/YXR0G01/portrait-doctor1.jpg" alt="find doctor"/>
                        <div className="findImgBg"></div>
                    </div>
                </div>
                <div className="cols d-flex align-items-center">
                    <div className="p-4">
                        <h2 className="titleDesign1 my-3">Your Nearest Doctor</h2>
                        <p className="text-muted mt-3">Select preferred doctor and time slot to book an in-clinic or video consultation. Its very easy and simple process to booking.</p>
                        <button className="btn rounded-pill btnDesign1 mt-3">Find Doctor Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindDoctor;