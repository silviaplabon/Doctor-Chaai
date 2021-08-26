import React from 'react';
import './UserAppointmentListShow.scss';

const UserAppoinmentListShow = ({ appointment }) => {

    return (
        <div className="col mt-5 px-5" >
            <div className="card p-3 shadow userAppointmentCard">
                <div className="d-flex justify-content-between">
                    <div>
                        <h3>{appointment.doctorDetails.name}</h3>
                        <p>{appointment.doctorDetails.specialization}</p>
                        <span>{appointment.schedule.startTime} - {appointment.schedule.endTime}</span>
                    </div>
                    <div className="text-end">
                        <div>{appointment.schedule.date}</div>
                        <img className="rounded-circle" src={appointment.doctorDetails.image} alt="doctor" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserAppoinmentListShow;