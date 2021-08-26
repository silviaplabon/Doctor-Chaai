import React, { useState } from "react";
import './CurrentPatientInfoShow.scss'
import CurrentPatientInfo from './../CurrentPatientInfo/CurrentPatientInfo';
const CurrentPatientInfoShow = (props) => {
    const { name, image, dateOfBirth, bloodGroup, address } = props.patient;

    return (

        <div className="row mt-5 " >
            <div className="col-12 col-md-6 mt-3">
                <img
                    src="https://thumbs.dreamstime.com/b/senior-woman-waiting-doctor-consultation-hospital-senior-women-waiting-doctor-consultation-hospital-wearing-face-207307422.jpg"
                    className="img-fluid h-100 w-100" />
            </div>
            <div className="col-12 col-md-6 mt-3">
                <div className="card p-2 shadow">
                    <div class="row g-0">
                        <div class="col-4">
                            <img src={image} class=" doctorImageAppointment img-fluid w-100 h-100" alt="..." />
                        </div>
                        <div class="col-8">
                            <div className="text-start mb-2">
                                <h3 className="fw-bold m-0 mb-2">{name}</h3>
                                <h6 className="m-0 ">{dateOfBirth}</h6>
                            </div>
                            <p className="m-0 mt-4"><span className="me-1">Blood Group: </span>{bloodGroup}</p>
                            <p className="mt-2"><span className="me-1">Address: </span>{address}</p>
                            <button className="btn btn-primary">Checked</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default CurrentPatientInfoShow;
