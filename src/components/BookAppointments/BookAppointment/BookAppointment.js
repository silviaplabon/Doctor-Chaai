import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { db } from "../../../DataBase/FirebaseInitialize/firebase.config";
import Footer from "../../Home/Footer/Footer";
import NavBar from "../../Home/NavBar/NavBar";
import ErrorModal from "../../Modal/ErrorModal/ErrorModal";
import SuccessModal from "../../Modal/SuccessModal/SuccessModal";
import "./BookAppointment.scss";
import ScheduleList from "./ScheduleList";

const BookAppointment = () => {
  const { id } = useParams();
  console.log('doctor id',id);
  const [selectSchedule, setSelectSchedule] = useState({});
  const [isScheduleSelect, setIsScheduleSelect] = useState(false);
  const [allAvailableSchedule, setAllAvailableSchedule] = useState([]);
  const [doctorDetails, setDoctorDetails] = useState({});
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  // UseHistory for route changing
  let history = useHistory();

  useEffect(()=>{
    fetch(`https://whispering-reef-28119.herokuapp.com/doctor/allDoctors/${id}`)
    .then(res=>res.json())
    .then(data => setDoctorDetails(data.result[0]))
  },[])

  useEffect(() => {
    if (Object.keys(selectSchedule).length !== 0) {
      setIsScheduleSelect(false);
    } else {
      setIsScheduleSelect(true);
    }
  }, [selectSchedule]);

  const availableCollection = db.collection("availableSchedule");
  const email = "test2@gmail.com";

  //Get Doctor Schedule
  const availableScheduleGet = async () => {
    let doctorID;
    const snapshot = await availableCollection
      .where("email", "==", email)
      .get();
    // check the doctors finded or not find
    if (!snapshot.empty) {
      snapshot.forEach((doc) => {
        doctorID = doc.id;
      });
    }

    const data = await availableCollection
      .doc(doctorID)
      .collection("schedule")
      .get();
    let tempAllSchedule = [];
    data.forEach((doc) => {
      tempAllSchedule.push(doc.data().scheduleData);
    });
    setAllAvailableSchedule(tempAllSchedule);
  };
  useEffect(() => availableScheduleGet(), []);

  // Form Data submit
  const onSubmit = (data) => {
    data.schedule = selectSchedule;
    data.doctorDetails={name:doctorDetails.name,specialization:doctorDetails.specialization,doctorID:doctorDetails._id}
    if (Object.keys(data.schedule).length !== 0) {
      console.log(data);
    }
    // fetch(
    //   "https://whispering-reef-28119.herokuapp.com/appointment/doctorAppointment",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${localStorage.getItem("Authorization")}`,
    //     },
    //     body: JSON.stringify(data),
    //   }
    // )
    //   .then((res) => res.json())
    //   .then((result) => {
    //     console.log(result);
    //     if (result.status === true) {
    //       setSuccessModal(true);
    //       setTimeout(() => {
    //         history.replace("/");
    //       }, 3000);
    //     } else if (result.status === false) {
    //       setErrorModal(true);
    //     }
    //   });
  };

  return (
    <div>
      <NavBar />
      <SuccessModal
        modalContent={[
          successModal,
          setSuccessModal,
          "Appointment Booking Successfull",
        ]}
      />
      <ErrorModal
        modalContent={[errorModal, setErrorModal, "Email Already Used"]}
      />
      {/* Modal End */}

      <div className="container">
        <div className="appointmentChild">
          <h2 className="my-2">Book Your Appointment</h2>
          <div>
            <div className="appointmentBook">
              <div className="m-auto">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="d-flex p-0 px-5"
                >
                  <div className="w-100 px-xl-5 py-4 m-3 scheduleParent">
                    <div>
                      <h2 className="pt-1 pb-0 mb-1">Available Schedule</h2>
                      <h5
                        className="text-center mb-3 fw-bold"
                        style={{
                          color: `${isScheduleSelect ? "#dc3545" : "#00cccc"}`,
                        }}
                      >
                        {isScheduleSelect
                          ? "Please select one Schedule"
                          : "You Selected One Schedule"}
                      </h5>
                      {allAvailableSchedule.map((data, index) => (
                        <ScheduleList
                          key={index}
                          schedule={[selectSchedule, setSelectSchedule]}
                          data={{ data, index }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="w-100 px-xl-5 m-3 scheduleParent">
                    <h2 className="pt-1 pb-0 mb-4 mt-4">
                      Please fill out the form
                    </h2>
                    <div>
                      <input
                        type="text"
                        className="appointmentInput form-control rounded-pill w-100"
                        placeholder="Enter Your Name"
                        name="name"
                        ref={register({ required: true })}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="appointmentInput form-control rounded-pill w-100"
                        placeholder="Enter Your Phone Number"
                        name="phone"
                        ref={register({ required: true })}
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="appointmentInput form-control rounded-pill w-100"
                        placeholder="Enter Your Email"
                        name="email"
                        ref={register({ required: true })}
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        className="appointmentInput form-control rounded-pill w-100"
                        placeholder="Enter Your Age"
                        name="age"
                        ref={register({ required: true })}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="appointmentInput form-control rounded-pill w-100"
                        placeholder="Select Your Blood Group"
                        name="bloodgroup"
                        ref={register({ required: true })}
                      />
                    </div>
                    <div className="w-100">
                      {(errors.name ||
                        errors.phone ||
                        errors.email ||
                        errors.age ||
                        errors.bloodgroup) && (
                        <p className="text-center text-danger mt-2 mb-0">
                          Please Provide Your Valid Data
                        </p>
                      )}
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="my-4 appointmentSubmit rounded-pill px-4"
                      >
                        Send Booking
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Appointment page main code end  */}
      <Footer />
    </div>
  );
};

export default BookAppointment;
