import React, { useState, useEffect } from 'react';
import NavBar from '../../NavBar/NavBar';
import DoctorShow from '../DoctorShow/DoctorShow';
// import './DoctorsCollection.scss'
const AllDoctorsCollection = () => {
    let [data, setData] = useState([])
    const [dept,setDept]=useState('')
    useEffect(() => {
        fetch('http://localhost:4300/doctor')
            .then(res => res.json())
            .then(data => {
                setData(data.result)
            })
    }, [])
    const handleChangeDept=(event)=>{
        console.log(event.target.value)
            setDept(event.target.value)
           
    }
    useEffect(() => {
      const newData=data?.find(doctor=>doctor.specialization==dept);
      data=newData;
    }, [dept])



    return (
        <>
            <NavBar></NavBar>
            <div className="container mb-5" style={{ marginTop: '120px' }}>
                <div className="row row-cols-2">
                    <div className="col">
                        <input class="form-control me-5 text-center" type="search" placeholder="Search your Doctor" aria-label="Search" />
                    </div>
                    <div className="col ">
                        <div className="row row-cols-2 ">
                            <div className="col">
                                <select class="form-select" aria-label="Default select example" onChange={(event)=>handleChangeDept(event)} >
                                    <option selected>By Dept</option>
                                    <option value="Allergists">Allergists</option>
                                    <option value="Dermatologists">Dermatologists</option>
                                    <option value="Ophthalmologists">Ophthalmologists</option>
                                    <option value="Gynecologists">Gynecologists</option>
                                    <option value="Cardiologists">Cardiologists</option>
                                    <option value="Endocrinologists">Endocrinologists</option>
                                    <option value="Gastroenterologists">Gastroenterologists</option>
                                    <option value="Urologists">Urologists</option>
                                    <option value="Pulmonologists">Pulmonologists</option>
                                    <option value="Neurologists">Neurologists</option>
                                    <option value="Psychiatrists">Psychiatrists</option>
                                    <option value="General surgeons">General surgeons</option>
                                    <option value="Cardiac surgeons">Cardiac surgeons</option>
                                </select>
                            </div>
                            <div className="col">
                                <select class="form-select  rounded-lg" aria-label="Default select example">
                                    <option selected>By Expert</option>
                                    <option value="Junior">Junior</option>
                                    <option value="Senior">Senior</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                    {
                        data?.map(doctor => <DoctorShow doctor={doctor}></DoctorShow>)
                    }
                </div>
            </div >
        </>
    );
};

export default AllDoctorsCollection;