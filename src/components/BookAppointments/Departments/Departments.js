import React from "react";
import departmentImg from "../../../images/department.png";
import departmentImg1 from "../../../images/department1.png";
import departmentImg2 from "../../../images/department2.png";
import departmentImg3 from "../../../images/department3.png";
import departmentImg4 from "../../../images/department4.png";
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
      name: "Anesthesiologists",
      img: departmentImg1,
    },
    {
      id: 3,
      name: "Cardiologists",
      img: departmentImg2,
    },
    {
      id: 4,
      name: "Radiologists",
      img: departmentImg3,
    },
    {
      id: 5,
      name: "Urologists",
      img: departmentImg1,
    },
    {
      id: 6,
      name: "Dermatologists",
      img: departmentImg,
    },
    {
      id: 7,
      name: "Endocrinologists",
      img: departmentImg1,
    },
    {
      id: 8,
      name: "Psychiatrists",
      img: departmentImg2,
    },
    {
      id: 9,
      name: "Physiatrists",
      img: departmentImg4,
    },
    {
      id: 10,
      name: "Gastroenterologists",
      img: departmentImg2,
    },
    {
      id: 11,
      name: "Pathologists",
      img: departmentImg1,
    },
    {
      id: 12,
      name: "Hematologists",
      img: departmentImg1,
    },
    {
      id: 13,
      name: "Internists",
      img: departmentImg2,
    },
    {
      id: 14,
      name: "Medical Geneticists",
      img: departmentImg3,
    },
    {
      id: 15,
      name: "Nephrologists",
      img: departmentImg4,
    },
    {
      id: 16,
      name: "Neurologists",
      img: departmentImg2,
    },
    {
      id: 17,
      name: "Gynecologists",
      img: departmentImg1,
    },
    {
      id: 18,
      name: "Oncologists",
      img: departmentImg,
    },
    {
      id: 19,
      name: "Ophthalmologists",
      img: departmentImg3,
    },
    {
      id: 20,
      name: "Medicine Specialists",
      img: departmentImg1,
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
