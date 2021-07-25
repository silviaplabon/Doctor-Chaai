import React from 'react';
import './TakeAppointment.scss';

const TakeAppointment = () => {
    return (
        <div className="container-sm py-4">
            <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="cols order-1 d-flex align-items-center">
                    <div className="p-4">
                        <h2 className="titleDesign1 my-3">Urgent Online Care</h2>
                        <p className="text-muted mt-3">Tell us your health concern and we will assign you a top doctor in 2 minute.</p>
                        <button className="btn rounded-pill btnDesign1 mt-3">Take Appointment</button>
                    </div>
                </div>
                <div className="cols order-0 order-md-2 p-4" >
                    <div className="appointmentImg">
                        <img src="https://i.ibb.co/nLN9MfX/doctor-work1.jpg" alt="find doctor"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TakeAppointment;