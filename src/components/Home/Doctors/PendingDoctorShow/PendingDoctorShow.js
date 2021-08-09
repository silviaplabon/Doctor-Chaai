import React from 'react';
import './PendingDoctorShow.scss'
import { faDownload} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PendingDoctorShow = ({ doctor }) => {
    const { name, photo, specialization, experience } = doctor;
    return (
        <div className="col mt-3">
            <div className="doctorShowContainer ">
                <div className="card shadow cardContainerDoctors p-2" style={{ backgroundColor: '#f4fcff' }}>
                    <div className="h-50 row mt-1">
                        <div className=" col-4 pendingImageContainer pe-0">
                            <img src={photo} className="pendingDoctorImage" alt="..." />
                        </div>
                        <div className="col-8  ps-0">
                            <h6 className="text-start">{name}</h6>
                            <p className="text-start m-0">{experience}<span className="ms-1">
                                {specialization}   </span></p>
                        </div>
                    </div>
                    <div className=" h-50 card-body d-flex justify-content-center">
                    <button className="text-center btn pendingResumeBtn me-1"><FontAwesomeIcon icon={faDownload} />
Resume</button>
                     <button className="text-white btn pendingApproveBtn">Approve</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PendingDoctorShow;