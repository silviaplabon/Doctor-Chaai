import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import './DoctorAppointments.scss';

const DoctorAppointments = () => {
    const [appointment, setAppointment] = useState([]);
    const [loggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://whispering-reef-28119.herokuapp.com/appointment', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('Authorization')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setAppointment(data.result.filter(data=>data.doctorDetails.email === loggedInUser.email))
            })
    },[loggedInUser.email])

    return (
        <div className="w-100 SubParentDesign">
            <div className="row px-xl-5">
                <div className="col-md-10 appoint-header">
                    <h3>Doctor's Available Appointments</h3>
                </div>
                <div className="appointments mt-3">
                    <div className="w-100 d-flex align-items-center justify-content-between mb-2">
                        <h6 className="text-center w-25">Patient Name</h6>
                        <h6 className="text-center w-25">Department</h6>
                        <h6 className="text-center w-25">Doctor Name</h6>
                        <h6 className="text-center w-25">Phone</h6>
                        <h6 className="text-center w-25">Date</h6>
                    </div>
                    {
                        appointment.map((d) => {
                            return <div className="card text-white appointment-details mb-3">
                                <div className=" w-100 d-sm-flex align-items-center justify-content-between">
                                    <div className="text-center w-25">
                                        <h5 className="card-title">{d.name}</h5>
                                    </div>
                                    <div className="text-center mt-2 w-25">
                                        <p>{d.doctorDetails.specialization}</p>
                                    </div>
                                    <div className="text-center mt-2 w-25">
                                        <p>{d.doctorDetails.name}</p>
                                    </div>
                                    <div className=" text-center mt-2 w-25">
                                        <p>{d.phone}</p>
                                    </div>
                                    <div className=" text-center w-25">
                                        <p className="card-text">{(new Date(d.date).toDateString('dd/MM/YYYY'))}</p>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default DoctorAppointments;