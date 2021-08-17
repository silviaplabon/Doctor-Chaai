import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../Home/Footer/Footer';
import NavBar from '../../Home/NavBar/NavBar';
import SpecificDoctor from './SpecificDoctor';

const SpecificDoctors = () => {
  const { department } = useParams();
  console.log(department);

  const [allDept, setAllDept] = useState([]);
  const [byDept, setByDept] = useState([]);

  useEffect(() => {
    axios
      .get('https://whispering-reef-28119.herokuapp.com/doctor/allDoctors')
      .then(function (response) {
        console.log(response?.data?.result);
        setAllDept(response?.data?.result);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }, [department]);

  useEffect(() => {
    const deptDoctor = allDept.filter(
      (dept) => dept.specialization === department
    );
    console.log(deptDoctor, 'use');
    setByDept(deptDoctor);
  }, [allDept]);

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {byDept.map((dept) => (
                <SpecificDoctor dept={dept} key={dept._id}></SpecificDoctor>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SpecificDoctors;
