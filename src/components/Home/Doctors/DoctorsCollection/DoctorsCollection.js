import axios from "axios";
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import DoctorShow from '../DoctorShow/DoctorShow';
import './DoctorsCollection.scss';
const Doctors = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios
          .get("https://whispering-reef-28119.herokuapp.com/doctor/allDoctors",{
            headers:{
              'Authorization':`Bearer ${localStorage.getItem('Authorization')}`
            }
          })
          .then(function (response) {
            // setDoctorStatus(response.data.result);
            setData(response.data.result)
          })
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
            // always executed
          });
      }, []);
    




    const doctors = data?.slice(0, 8);
    const history = useHistory();
    const loadMore = () => {
        history.push('/allDoctorList')
    }

    return (
        <div className="container mb-5 mt-5 pb-5">
            <h6 className="text-center mb-1 mt-5" style={{ color: '#1dc0bf' }}>MEET OUR DOCTORS</h6>
            <h2 className="text-center mb-5" style={{ color: '#050546' }}>Top Rated Specialists</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                {
                    doctors?.map(doctor => <DoctorShow doctor={doctor}></DoctorShow>)
                }
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <button className="btn doctorMoreButton mt-4 mb-5  text-white" onClick={() => loadMore()}>Load More</button>
            </div>

        </div >
    );
};

export default Doctors;