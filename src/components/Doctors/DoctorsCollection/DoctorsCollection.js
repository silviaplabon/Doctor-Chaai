import React, { useState,useEffect} from 'react';
import DoctorShow from '../DoctorShow/DoctorShow';

const Doctors = () => {
    const [data,setData]=useState([])
    useEffect(() => {
        fetch('http://localhost:4300/doctorlist')
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])

    return (
        <div className="container mb-5" style={{marginTop:'120px'}}>
            <h6 className="text-center mb-1 mt-5" style={{ color: '#1dc0bf' }}>MEET OUR DOCTORSe</h6>
            <h2 className="text-center mb-5" style={{ color: '#050546' }}>Top Rated Specialists</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                {
                    data.map(doctor => <DoctorShow doctor={doctor}></DoctorShow>)
                }
            </div>

        </div >
    );
};

export default Doctors;