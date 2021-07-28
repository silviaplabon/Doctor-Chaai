import React from 'react';
import './TakeAppointment.scss';

const TakeAppointment = () => {

    const handleClick = () => {
        console.log('do something')
    }

    return (

        <div className="container-sm takeAppointmentDiv">
            <div className="row row-cols-lg-1 row-cols-md-2 g-4">
                <div className="col order-1 flexdiv d-flex justify-content-around align-items-center">
                    <div className="pe-4">
                        <h2 className="py-5">Quick Appointment</h2>
                        <h1>HAVEN'T BOOKED YET? </h1>
                        <p>Hospital Management System or HMS Software is mainly a system that can help to maintain any hospital activities properly and easily. Moreover, </p>
                        <button onClick={handleClick} className="btn rounded-pill btnDesign1 mt-3 px-5 py-4">Appoint Your Doctor</button>
                    </div>
                    <div className="col appointmentImg">
                        <img src='https://i.ibb.co/nny0MK7/national-cancer-institute-NFvd-KIhx-Yl-U-unsplash.jpg' alt="take appointment" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TakeAppointment;