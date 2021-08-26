import React from 'react';

const AllPatientScheduleShow = ({patient}) => {
    const { name,image,address}=patient;
    return (
        <div className="card w-75 m-auto">
            <div className="row">
                <div className="col-4">
                      <img src={image} alt="patient"></img>
                </div>
                <div className="col-4">
                <p>{name}</p>
                </div>
                <div className="col-4">
                <p>{address}</p>
                </div>
            </div>
        </div>
    );
};

export default AllPatientScheduleShow;