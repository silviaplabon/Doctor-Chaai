import React, { useState, useEffect } from 'react';
import PendingDoctorShow from '../PendingDoctorShow/PendingDoctorShow';
import './PendingDoctors.scss'
import NavBar from '../../NavBar/NavBar'
const PendingDoctors = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://whispering-reef-28119.herokuapp.com/doctor/')
            .then(res => res.json())
            .then(data => {
                const datas = data.result.filter(doctor => doctor.status !== "pending");
                setData(datas)
            })
    }, [])
    const doctors = data?.slice(0, 8);
    return (
        <>
        <NavBar></NavBar>
        <div className="container mb-5" >
            <h2 className="ms-4 mt-5" style={{color:'#050546'}}>Approve your Doctor</h2>
            <h6 className="ms-4" >Today's doctor list<span className="ms-2" style={{color:'#ab3d23'}}>({data.length} pending)</span></h6>
            <div className="row row-cols-1  row-cols-md-2  row-cols-lg-3">
                {
                    doctors?.map(doctor => <PendingDoctorShow doctor={doctor}></PendingDoctorShow>)
                }
            </div>
        </div >
        </>
    );
};

export default PendingDoctors;