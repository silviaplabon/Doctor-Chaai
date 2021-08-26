import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Footer from "../../Footer/Footer";
import NavBar from "../../NavBar/NavBar";
import "./AddDoctor.scss";

const AddDoctor = () => {
  const { register, handleSubmit } = useForm();
  const [imageURL, setImageURL] = useState(null);
  const history = useHistory();

  const DepartmentsData = [
    {
      id: 1,
      name: "Allergists",
    },
    {
      id: 2,
      name: "Cardiologists",
    },
    {
      id: 3,
      name: "Radiologists",
    },
    {
      id: 4,
      name: "Urologists",
    },
    {
      id: 5,
      name: "Dermatologists",
    },
    {
      id: 6,
      name: "Endocrinologists",
    },
    {
      id: 7,
      name: "Physiatrists",
    },
    {
      id: 8,
      name: "Gastroenterologists",
    },
    {
      id: 9,
      name: "Pathologists",
    },
    {
      id: 10,
      name: "Hematologists",
    },
    {
      id: 11,
      name: "Medical Geneticists",
    },
    {
      id: 12,
      name: "Neurologists",
    },
    {
      id: 13,
      name: "Gynecologists",
    },
    {
      id: 14,
      name: "Ophthalmologists",
    },
    {
      id: 15,
      name: "Medicine Specialists",
    },
  ];

  const onSubmit = (data) => {
    if (imageURL !== null) {
      data.photo = imageURL;
      console.log(data);
      fetch(`https://whispering-reef-28119.herokuapp.com/doctor/addDoctor`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result.message);
          alert(result.message);
          // history.push("/home");
        })
        .catch((err) => console.log(err));
    } else {
      alert("Please Upload Image");
    }
  };
  const handleImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "1d22a6a9a642db8bb464e6064c6a0852");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
        console.log(imageURL);
      })
      .catch(function (error) {});
  };
  return (
      <>
    <NavBar></NavBar>
    <div className="addDoctorSection">
      <div className="container pt-5 ">
        <form onSubmit={handleSubmit(onSubmit)} className=" addDoctorFormStyle">
          <h2 className="">Basic Information</h2>
          <div className="row d-flex p-3  pb-5 sectionDoctorBg shadow">
            <div className="col-md-6  mt-2">
              <label for="username" className="fw-bold">
                Name
              </label>
              <input
                name="name"
                id="username"
                className="form-control  formControlAddDoctor"
                defaultValue=""
                placeholder="name"
                ref={register({ required: true })}
              />
            </div>
            <div className="col-md-6  mt-2">
              <label for="phone" className="fw-bold">
                Phone
              </label>
              <input
                name="phone"
                id="phone"
                className="form-control formControlAddDoctor"
                defaultValue=""
                placeholder="phone"
                ref={register({ required: true })}
              />
            </div>
            <div className="col-md-6  mt-2">
              <label for="address" className="fw-bold">
                Address
              </label>
              <input
                name="address"
                id="address"
                className="form-control formControlAddDoctor"
                defaultValue=""
                placeholder="address"
                ref={register({ required: true })}
              />
            </div>
            <div className="col-md-6 mt-2">
              <label for="experience" className="fw-bold">
                Experience
              </label>
              <select
                ref={register}
                name="experience"
                className="form-select formSelectAddDoctor"
              >
                <option value="Junior">Junior</option>
                <option value="Senior">Senior</option>
              </select>
            </div>
            <div className="col-md-6  mt-2">
              <label for="email" className="fw-bold">
                Email
              </label>
              <input
                name="email"
                id="email"
                className="form-control formControlAddDoctor"
                defaultValue=""
                placeholder="Email"
                ref={register({ required: true })}
              />
            </div>
            <div className="col-md-6  mt-2 passwordField">
              <label for="password" className="fw-bold">
                Pasword
              </label>
              <input
                name="password"
                id="password"
                className="form-control  formControlAddDoctor"
                type="password"
                placeholder="password"
                ref={register({ required: true })}
              />
            </div>
          </div>
          <div className="row d-flex  p-3 mt-5 pb-5 sectionDoctorBg shadow">
            <div className="col-md-12 mt-2">
              <label for="about" className="fw-bold">
                About
              </label>
              <textarea
                name="about"
                className=" form-control  formControlAddDoctor"
                id="about"
                rows="3"
                placeholder="please tell yourself"
                defaultValue=""
                ref={register({ required: true })}
              />
            </div>
            <div className="col-md-6  mt-2 ms-0">
              <label for="photo" className="fw-bold">
                Photo
              </label>
              <input
                name="photo"
                type="file"
                id="photo"
                className="form-control  formControlAddDoctor "
                onChange={handleImageUpload}
                ref={register({ required: true })}
              />
            </div>
            <div className="col-md-6  mt-2 ms-0">
              <label for="education" className="fw-bold">
                Education
              </label>
              <input
                name="education"
                id="education"
                className="form-control  formControlAddDoctor "
                placeholder="education"
                ref={register({ required: true })}
              />
            </div>
          </div>
          <div className="row d-flex p-3 mt-5  pb-5 sectionDoctorBg shadow">
            <div className="col-md-6 mt-2">
              <label for="specialization" className="fw-bold">
                Specialization
              </label>
              <select
                ref={register({ required: true })}
                name="specialization"
                className=" form-select formSelectAddDoctor"
              >
                <option value='' selected>Select Your department</option>
                {DepartmentsData.map((data) => (
                  <option key={data.id} value={`${data.name}`}>{data.name}</option>
                ))}
              </select>
            </div>
            <div className="col-md-6 mt-2">
              <label for="username" className="fw-bold">
                Consultation
              </label>
              <input
                name="consultation"
                id=""
                className="form-control  formControlAddDoctor"
                defaultValue=""
                placeholder="consultation fee"
                ref={register({ required: true })}
              />
            </div>
          </div>
          <div className="d-flex justify-content-end ">
            <input
              type="submit"
              className="btn  text-white registerDoctorButton p-0 mb-5"
              value="Register"
            />
          </div>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
};
export default AddDoctor;
