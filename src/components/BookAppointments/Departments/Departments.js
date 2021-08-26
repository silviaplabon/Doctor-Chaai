import React from "react";
import departmentImg from "../../../images/department.png";
import Footer from "../../Home/Footer/Footer";
import NavBar from "../../Home/NavBar/NavBar";
import Department from "./Department";
import "./Departments.scss";

const Departments = () => {
  const DepartmentsData = [
    {
      id: 1,
      name: "Allergists",
      img: departmentImg,
    },
    {
      id: 2,
      name: "Cardiologists",
      img: departmentImg,
    },
    {
      id: 3,
      name: "Radiologists",
      img: departmentImg,
    },
    {
      id: 4,
      name: "Urologists",
      img: departmentImg,
    },
    {
      id: 5,
      name: "Dermatologists",
      img: departmentImg,
    },
    {
      id: 6,
      name: "Endocrinologists",
      img: departmentImg,
    },
    {
      id: 7,
      name: "Physiatrists",
      img: departmentImg,
    },
    {
      id: 8,
      name: "Gastroenterologists",
      img: departmentImg,
    },
    {
      id: 9,
      name: "Pathologists",
      img: departmentImg,
    },
    {
      id: 10,
      name: "Hematologists",
      img: departmentImg,
    },
    {
      id: 11,
      name: "Medical Geneticists",
      img: departmentImg,
    },
    {
      id: 12,
      name: "Neurologists",
      img: departmentImg,
    },
    {
      id: 13,
      name: "Gynecologists",
      img: departmentImg,
    },
    {
      id: 14,
      name: "Ophthalmologists",
      img: departmentImg,
    },
    {
      id: 15,
      name: "Medicine Specialists",
      img: departmentImg,
    },
  ];

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-12 mb-5">
            <h2 className="text-center mt-3 mb-5" style={{ color: "#050545" }}>
              Select One Doctor
            </h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {DepartmentsData.map((department) => (
                <Department key={department.id} department={department} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Departments;
