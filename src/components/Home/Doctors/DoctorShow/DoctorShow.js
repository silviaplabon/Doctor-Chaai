import React from 'react';
import './DoctorShow.scss';
const DoctorShow = ({ doctor }) => {
    const { name, photo,specialization,experience} = doctor;
    return (
        <div className="col mt-4">
            <div className="doctorShowContainer pb-5 mt-4">
                <div className="card shadow cardContainerDoctors">
                    <div className="doctorProfileImageContainer d-flex justify-content-center align-items-center">
                        <img src={photo} className="card-img-top doctorProfileImage" alt="..." />
                    </div>
                    <div className="card-body d-flex-column justify-content-center align-items-center">
                        <h5 className="text-center">{name}</h5>
                        <p className="text-center m-0">{specialization}</p>
                        <p className="text-center m-0">{experience}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorShow;