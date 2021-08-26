import React, { useState,useEffect} from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import { db } from "../../../DataBase/FirebaseInitialize/firebase.config";
import Footer from "../../Home/Footer/Footer";
import NavBar from "../../Home/NavBar/NavBar";
import ErrorModal from "../../Modal/ErrorModal/ErrorModal";
import SuccessModal from "../../Modal/SuccessModal/SuccessModal";
import "./BookAppointment.scss";
import ScheduleList from "./ScheduleList";

const BookAppointment = () => {
  const { id } = useParams();
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

  useEffect(() => {
    fetch(`https://whispering-reef-28119.herokuapp.com/doctor/allDoctors/${id}`)
      .then((res) => res.json())
      .then((data) => setDoctorDetails(data.result[0]));
  }, [id]);

  useEffect(() => {
    if (Object.keys(selectSchedule).length !== 0) {
      setIsScheduleSelect(false);
    } else {
      setIsScheduleSelect(true);
    }
  }, [selectSchedule]);

  const availableCollection = db.collection("availableSchedule");
  let email = doctorDetails?.email || "";

  useEffect(() => {
    //Get Doctor Schedule
    const availableScheduleGet = async () => {
      if (email !== "") {
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
      }
    };
    availableScheduleGet();
  }, [email,availableCollection]);

  // Form Data submit
  const onSubmit = (data) => {
    data.schedule = selectSchedule;
    data.doctorDetails = {
      name: doctorDetails.name,
      specialization: doctorDetails.specialization,
      email: doctorDetails.email,
      doctorID: doctorDetails._id,
    };
    if (Object.keys(data.schedule).length !== 0) {
      fetch(
        "https://whispering-reef-28119.herokuapp.com/appointment/doctorAppointment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("Authorization")}`,
          },
          body: JSON.stringify(data),
        }
      )
        .then((res) => res.json())
        .then((result) => {
          if (result.status === true) {
            setSuccessModal(true);
            setTimeout(() => {
              history.replace("/");
            }, 3000);
          } else if (result.status === false) {
            setErrorModal(true);
          }
        });
    }
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
                  className="d-lg-flex p-0 px-2 px-lg-5 px-xl-5"
                >
                  <div className="w-100 px-3 px-xl-5 py-4 mx-lg-3 my-3 scheduleParent">
                    <div>
                      <h2 className="pt-1 pb-0 mb-1">Available Schedule</h2>
                      <h5
                        className="text-center mb-3 fw-bold"
                        style={{
                          color: `${isScheduleSelect ? "#dc3545" : "#00cccc"}`,
                        }}
                      >
                        {allAvailableSchedule.length !== 0
                          ? isScheduleSelect
                            ? "Please select one Schedule"
                            : "You Selected One Schedule"
                          : "Schedule Not Available"}
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
                  <div className="w-100 px-3 px-xl-5 mx-lg-3 my-3 scheduleParent">
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
                        name="userEmail"
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
                        name="bloodGroup"
                        ref={register({ required: true })}
                      />
                    </div>
                    <div className="w-100">
                      {(errors.name ||
                        errors.phone ||
                        errors.userEmail ||
                        errors.age ||
                        errors.bloodGroup) && (
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
