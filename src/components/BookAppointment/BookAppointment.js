import React from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import appointmentImg from '../../images/appointment.png';
import Footer from "../Home/Footer/Footer";
import NavBar from "../Home/NavBar/NavBar";
import "./BookAppointment.scss";


const BookAppointment = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" }};
    // Form Data
    const onSubmit = data => {
      fetch('https://whispering-reef-28119.herokuapp.com/appointment/doctorAppointment',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          'Authorization':`Bearer ${localStorage.getItem('Authorization')}`
      },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        alert("Appointment Booking Successfull");
        history.replace(from);
      })
      .catch(err => console.log(err))
    };


  return (
    <div>
      <NavBar />
      {/* Appointment page main code start  */}
      <div className="container">
        <div className="appointmentChild">
          <h2 className="my-2">Book Your Appointment</h2>
          <div>
            <div className="row px-sm-5 pt-5 appointmentBook">
              <div className="col-sm-6 AppointmentImgCol px-lg-5 d-flex align-items-end">
                <img className="w-100" src={appointmentImg} alt="appointment" />
              </div>
              <div className="col-md-6 d-flex align-items-center m-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="row row-cols-lg-auto g-4 align-items-center">
                  <div className="col-12">
                    <input
                        type="text"
                        className="appointmentInput form-control rounded-pill px-3 py-2"
                        placeholder="Patient name..."
                        name="name"
                        ref={register({ required: true })}
                      />
                    {errors.name && <p className="text-center text-danger mt-2 mb-0">Name is required.</p>}
                  </div>
                  <div className="col-12">
                    <input
                        type="number"
                        className="appointmentInput form-control rounded-pill px-3 py-2"
                        placeholder="Phone Number..."
                        name="phone"
                        ref={register({ required: false })}
                      />
                    {errors.phone && <p className="text-center text-danger mt-2 mb-0">Phone Number is required.</p>}
                  </div>
                  <div className="col-12">
                    <select className="form-select appointmentInput rounded-pill px-3 py-2" name="department"
                        ref={register({ required: true })} >
                      <option value="" selected>Select department</option>
                      <option value="Endocrinologist">Endocrinologist</option>
                      <option value="Pediatrician">Pediatrician</option>
                      <option value="Neurologist">Neurologist</option>
                      <option value="Rheumatologist">Rheumatologist</option>
                      <option value="Nephrologist">Nephrologist</option>
                    </select>
                    {errors.department && <p className="text-center text-danger mt-2 mb-0">Please select the department.</p>}
                  </div>
                  <div className="col-12">
                    <select className="form-select appointmentInput rounded-pill px-3 py-2" name="doctor"
                        ref={register({ required: true })} >
                      <option value="" selected>Select doctor</option>
                      <option value="Dr Pullen">Dr Pullen</option>
                      <option value="Dr Fillmore">Dr Fillmore</option>
                      <option value="Dr Ken Hurt">Dr Ken Hurt</option>
                      <option value="Dr Hurt">Dr Hurt</option>
                      <option value="Dr Borer">Dr Borer</option>
                    </select>
                    {errors.doctor && <p className="text-center text-danger mt-2 mb-0">Please select the doctor.</p>}
                  </div>
                  <div className="col-12 text-center">
                    <button type="submit" className="my-4 appointmentSubmit rounded-pill px-4">
                      Send Booking
                    </button>
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
