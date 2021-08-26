import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import appointmentImg from '../../../images/appointment.png';
import Footer from '../../Home/Footer/Footer';
import NavBar from '../../Home/NavBar/NavBar';
import ErrorModal from '../../Modal/ErrorModal/ErrorModal';
import SuccessModal from '../../Modal/SuccessModal/SuccessModal';
import './BookAppointment.scss';
import ProcessPayment from '../../ProcessPayment/ProcessPayment'
const BookAppointmentUpdate = () => {
    // Store all Doctor Data
    const [allDoctor, setAllDoctor] = useState([]);
    const [paymentIDNumber, setPaymentIDNumber] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [successModal, setSuccessModal] = useState(false);
    const [errorModal, setErrorModal] = useState(false);
    // UseHistory for route changing
    let history = useHistory();
    //Load all Doctor
    useEffect(() => {
        fetch('https://whispering-reef-28119.herokuapp.com/doctor', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('Authorization')}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setAllDoctor(data.result);
            });
    }, []);
   
    // Saving all value by using state
    const [name, setName] = useState('');
    const [phone,setPhone]=useState('')
    const [department,setDepartment]=useState('');
    const [doctor,setDoctor]=useState('')
    const handleName = (event) => {
        setName(event.target.value);
    }
    const handlePhone = (event) => {
        setPhone(event.target.value);
    }
    const handleDepartment = (event) => {
        setDepartment(event.target.value);
    }
    const handleDoctor = (event) => {
        setDoctor(event.target.value); 
    }

    //   adding handlePaymentSuccess option
    const handlePaymentSuccess = paymentId => {
        const newData = {
            name:name,
            phone:phone,
            department:department,
            doctor:doctor,
            paymentId,
        };
        console.log(newData)
        fetch(
            'https://whispering-reef-28119.herokuapp.com/appointment/doctorAppointment',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('Authorization')}`,
                },
                body: JSON.stringify(newData),
            }
        )
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                if (result.status === true) {
                    setSuccessModal(true);
                    setTimeout(() => {
                        history.replace('/');
                    }, 3000);
                } else if (result.status === false) {
                    setErrorModal(true);
                }
            });
    }

    return (
        <div>
            <NavBar />
            <SuccessModal
                modalContent={[
                    successModal,
                    setSuccessModal,
                    'Appointment Booking Successfull',
                ]}
            />
            <ErrorModal
                modalContent={[errorModal, setErrorModal, 'Email Already Used']}
            />
            {/* Modal End */}

            <div className="container">
                <div className="appointmentChild">
                    <h2 className="my-2">Book Your Appointment</h2>
                    <div>
                        <div className="row px-sm-5 pt-5 appointmentBook">
                            <div className="col-sm-6 AppointmentImgCol px-lg-5 d-flex align-items-end">
                                <img className="w-75" src={appointmentImg} alt="appointment" />
                            </div>
                            <div className="col-md-6 d-flex align-items-center m-auto">
                                <form
                                    className="row row-cols-lg-auto g-4 align-items-center"
                                >
                                    <div className="col-12">
                                        <input
                                            type="text"
                                            className="appointmentInput form-control rounded-pill px-3 m-0 py-0"
                                            placeholder="Patient name..."
                                            name="name"
                                            onChange={(event) => handleName(event)}
                                            ref={register({ required: true })}
                                        />
                                        {errors.name && (
                                            <p className="text-center text-danger mt-2 mb-0">
                                                Name is required.
                                            </p>
                                        )}
                                    </div>
                                    <div className="col-12">
                                        <input
                                            type="text"
                                            className="appointmentInput form-control rounded-pill px-3 m-0 py-0"
                                            placeholder="Phone Number..."
                                            name="phone"
                                            onChange={(event)=>handlePhone(event)}
                                            ref={register({ required: true })}
                                        />
                                        {errors.phone && (
                                            <p className="text-center text-danger mt-2 mb-0">
                                                Phone Number is required.
                                            </p>
                                        )}
                                    </div>
                                    <div className="col-12">
                                        <select
                                            className="form-select appointmentInput rounded-pill px-3 py-2"
                                            name="department"
                                            onChange={(event)=>handleDepartment(event)}
                                            ref={register({ required: true })}
                                        >
                                            <option value="" selected>
                                                Select department
                                            </option>
                                            <option value="Endocrinologist">Endocrinologist</option>
                                            <option value="Pediatrician">Pediatrician</option>
                                            <option value="Neurologist">Neurologist</option>
                                            <option value="Rheumatologist">Rheumatologist</option>
                                            <option value="Nephrologist">Nephrologist</option>
                                        </select>
                                        {errors.department && (
                                            <p className="text-center text-danger mt-2 mb-0">
                                                Please select the department.
                                            </p>
                                        )}
                                    </div>
                                    <div className="col-12">
                                        <select
                                            className="form-select appointmentInput rounded-pill px-3 py-2"
                                            name="doctor"
                                            onChange={(event)=>handleDoctor(event)}
                                            ref={register({ required: true })}
                                        >
                                            <option value="" selected>
                                                Select doctor
                                            </option>
                                            <option value="Dr Pullen">Dr Pullen</option>
                                            <option value="Dr Fillmore">Dr Fillmore</option>
                                            <option value="Dr Ken Hurt">Dr Ken Hurt</option>
                                            <option value="Dr Hurt">Dr Hurt</option>
                                            <option value="Dr Borer">Dr Borer</option>
                                        </select>
                                        {errors.doctor && (
                                            <p className="text-center text-danger mt-2 mb-0">
                                                Please select the doctor.
                                            </p>
                                        )}
                                    </div>
                                    {/* payment adding */}
                                    <div className="col-12  pt-0 mt-4">
                                        <ProcessPayment handlePayment={handlePaymentSuccess} ></ProcessPayment>
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

export default BookAppointmentUpdate;
