import React from 'react';
import './UserAppointmentListShow.scss'

const UserAppoinmentListShow = ({ appointment }) => {
    console.log(appointment)
    const { amount, appDate, bookingDate, department, doctor, image, status } = appointment
    return (

        <div className="col mt-5" >
            <div className="card p-2 shadow">
                <div class="row g-0">
                    <div class="col-4">
                        <img src={image} class=" doctorImageAppointment img-fluid w-100 h-100" alt="..." />
                    </div>
                    <div class="col-8">
                    <div className="text-start">
                        <p className="fw-bold m-0">{doctor}</p>
                        <p  className="m-0 ">{department}</p>
                    </div>
                        <p className="m-0 mt-1"><span className="me-1">Appointment Date: </span>{appDate}</p>
                        <p className="m-0"><span className="me-1">Booking Date: </span>{bookingDate}</p>
                        <div className="d-flex justify-content-between align-items-between ">
                           
                            <h5 className="mt-2">{amount} </h5>
                            <button className="mt-2 btn appointmentStatusButton text-white" >{status}</button>
                        </div>

                    </div>
                </div>
            </div>

            {/*  <div className="h-50 d-flex justify-content-between align-items-between">
                    <img src={image} className="img-fluid" alt="..." />
                  

                </div>
                <div className=" h-50">
                   
                </div>
            </div> */}
        </div>
    );
};

export default UserAppoinmentListShow;