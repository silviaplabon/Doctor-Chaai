import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../Home/Footer/Footer";
import NavBar from "../../Home/NavBar/NavBar";
import SpecificDoctor from "./SpecificDoctor";
import "./SpecificDoctors.scss";

const SpecificDoctors = () => {
  const { department } = useParams();

  const [allDept, setAllDept] = useState([]);
  const [byDept, setByDept] = useState([]);

  useEffect(() => {
    axios
      .get("https://whispering-reef-28119.herokuapp.com/doctor/allDoctors")
      .then(function (response) {
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
    setByDept(deptDoctor);
  }, [allDept]);

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-3">
            <h2 className={`text-center mb-4 ${byDept.length !== 0?'':'text-danger mt-5 pt-5 pb-5 mb-5'}`} style={{ color: "#050545" }}>
              {byDept.length !== 0 ? 'Select One Doctor' : 'Doctors Not Available'}
            </h2>
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
