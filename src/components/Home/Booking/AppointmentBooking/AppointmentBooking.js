import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import FAQ from '../FAQ/FAQ'
import './AppointmentBooking.scss'

const AppointmentBooking = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [selected, setSelected] = useState();

    const onSubmit = data => {
    }



    return (
        <div className="container">
            <div className="row mx-auto">
                <div className="col-md-6 col-sm-12 mt-5" style={{ backgroundColor: '#04043e', borderRadius: '0.80rem' }}>
                    <h4 className="mt-5 text-white text-center mb-2">Book an Appointment</h4>
                    <form onSubmit={handleSubmit(onSubmit)} className="">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 ">
                                <select class="form-select form-select-sm  mt-1 mb-1 text-white " aria-label=".form-select-lg example" ref={register} name="category" style={{ backgroundColor: '#02021f', color:'white'}}>
                                    <option selected>Select Departments</option>
                                    <option value="1">Outpatient Surgery</option>
                                    <option value="2">Cardiac Clinic</option>
                                    <option value="3">Ophthalmology Clinic</option>
                                    <option value="1">Outpatient Rehabilitation</option>
                                    <option value="2">Laryngological Clinic</option>
                                    <option value="3">Pediatric Clinic</option>
                                </select>
                            </div>
                            <div className="col-lg-6 col-sm-12 mt-1 mb-1  ps-lg-0 ">
                                <select class="form-select form-select-sm text-white " aria-label=".form-select-lg example" ref={register} name="category" style={{ backgroundColor: '#02021f' }} >
                                    <option selected>Select Doctors</option>
                                    <option value="Dr. Michael Lindon">Dr. Michael Lindon</option>
                                    <option value="Dr. Amy Adams">Dr. Amy Adams</option>
                                    <option value="Dr. Max Turner">Dr. Max Turner</option>
                                </select>
                            </div>
                        </div>

                        <div className="row ">
                            <div className="col-lg-6  mb-1  mt-1">
                                <input name="name" id="productName" className="form-control px-2 py-1 inputForm" placeholder="name" defaultValue="" ref={register}
                                 style={{ backgroundColor: '#02021f' }} />
                            </div>
                            <div className="col-lg-6 mt-1 mb-1 ps-lg-0">
                                <input name="phone" id="userPhone" className="form-control px-2 py-1 inputForm" placeholder="phone" defaultValue="" ref={register} style={{ backgroundColor: '#02021f' }} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 mt-1 mb-1">
                                <input name="email" id="userEmail" className="form-control px-2 py-1 inputForm" placeholder="email" defaultValue="" ref={register} style={{ backgroundColor: '#02021f' }}/>
                            </div>
                            <div className="col-lg-6 mt-1 mb-1 ps-lg-0  ">
                                <input name="date" type="date" id="userDate" className="form-control px-2 py-1 inputForm text-white " defaultValue="" placeholder="date" ref={register} style={{ backgroundColor: '#02021f' }}/>
                            </div>
                        </div>
                        <input type="submit" className="mt-4 btn mb-4 text-white " style={{ border: '1px solid white' }} value="Make Appointment" />
                    </form>
                </div>

                <div className="p-0 ps-md-4 col-md-6 col-sm-12 mt-5 mb-5">
                    <FAQ></FAQ>
                </div>
            </div>

        </div>
    );
};
export default AppointmentBooking;