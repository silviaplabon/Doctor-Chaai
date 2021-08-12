import React, { useState, useEffect } from 'react';
import NavBar from '../../NavBar/NavBar';
import DoctorShow from '../DoctorShow/DoctorShow';
import './AllDoctorCollection.scss'

const AllDoctorsCollection = () => {
    let [data, setData] = useState([])
    let [categoryData, setCategoryData] = useState([])
    let [searchData, setSearchData] = useState([])
    const [dept, setDept] = useState('')
    const [exp, setExp] = useState('')
    const [state, setState] = useState(true)
//loading data from server
    useEffect(() => {
        fetch('https://whispering-reef-28119.herokuapp.com/doctor')
            .then(res => res.json())
            .then(data => {
                const datas = data.result.filter(doctor => doctor.status !== "pending");
                setData(datas)
            })
    }, [])
//category data handle
    const handleChangeDept = (event) => {
        setDept(event.target.value);
        setExp('')
        setState(false);
        categoryDataCollection(data)
    }

    const handleChangeExp = (event) => {
        setExp(event.target.value)
        setDept('')
        setState(false)
        categoryDataCollection(data)
    }

    const categoryDataCollection = (data) => {
        dept ? setCategoryData(data?.filter(doctor => doctor.specialization == dept)) : setCategoryData(data?.filter(doctor => doctor.specialization == exp))
    }

    const handleSearch = (event) => {
        setState(true)
        fetch(`https://whispering-reef-28119.herokuapp.com/doctor/searchDoctor/${event.target.value}`)
            .then(res => res.json())
            .then(data => {
                setSearchData(data.result)
                console.log(searchData, "searchfatatahscsdjcjefc");
            })
    }




    return (
        <>
            <NavBar></NavBar>
            <div className="container mb-5" style={{ marginTop: '120px' }}>
                <div className="row mx-3 mb-5">
                    <div className="col-md-5 col-lg-7">
                        <input class="form-control searchDoctorInput me-5 text-center " onChange={(event) => handleSearch(event)} type="search" placeholder="Search your Doctor" aria-label="Search" />
                    </div>
                    <div className="col-md-7  col-lg-5 ">
                        <div className="row row-cols-2   justify-content-end align-items-end">
                            <div className="col ">
                                <select class="form-select selectDropdownDoctor" aria-label="Default select example" onChange={(event) => handleChangeDept(event)} >
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
                                <select class="form-select  rounded-lg selectDropdownDoctor" aria-label="Default select example" onChange={(event) => handleChangeExp(event)}>
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
                        state == true ? (data?.map(doctor => <DoctorShow doctor={doctor}></DoctorShow>)): (searchData?.map(doctor => <DoctorShow doctor={doctor}></DoctorShow>))
                    }
                    {
                        state == false && (categoryData?.map(doctor => <DoctorShow doctor={doctor}></DoctorShow>))
                    }
                </div>
            </div >
        </>
    );
};

export default AllDoctorsCollection;