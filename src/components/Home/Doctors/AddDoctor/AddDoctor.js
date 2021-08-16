import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import NavBar from '../../NavBar/NavBar';
import './AddDoctor.scss'


const AddDoctor = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const history = useHistory()
    const onSubmit = data => {
        const doctorData = {
            name: data.name,
            phone: data.phone,
            address: data.address,
            experience: data.experience,
            about: data.about,
            photo: imageURL,
            education: data.education,
            specialization: data.specialization,
            consultation: data.consultation,
        };

        fetch(`https://whispering-reef-28119.herokuapp.com/doctor/addDoctor`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(doctorData)
        })
            .then(res => {
                alert('Doctor Entered Successfully');
                history.push('/home');
            })
    }
    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '1d22a6a9a642db8bb464e6064c6a0852');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
                console.log(imageURL)
            })
            .catch(function (error) {
            });
    }
    return (
        <div className="addDoctorSection">
            <NavBar></NavBar>
            <div className="container mt-5 ">
                <form onSubmit={handleSubmit(onSubmit)} className=" addDoctorFormStyle" >
                    <h2 className="">Basic Information</h2>
                    <div className="row d-flex p-3  pb-5 sectionDoctorBg shadow">
                        <div className="col-md-6  mt-2">
                            <label for="username" className="fw-bold">Name</label>
                            <input name="name" id="username" className="form-control  formControlAddDoctor" defaultValue="" placeholder="name" ref={register({ required: true })} />
                        </div>
                        <div className="col-md-6  mt-2">
                            <label for="phone" className="fw-bold">Phone</label>
                            <input name="phone" id="email" className="form-control formControlAddDoctor" defaultValue="" placeholder="phone" ref={register({ required: true })} />
                        </div>
                        <div className="col-md-6  mt-2">
                            <label for="address" className="fw-bold">Address</label>
                            <input name="address" id="address" className="form-control formControlAddDoctor" defaultValue="" placeholder="address" ref={register({ required: true })} />
                        </div>
                        <div className="col-md-6 mt-2">
                            <label for="experience" className="fw-bold">Experience</label>
                            <select ref={register} name="experience" className="form-select formSelectAddDoctor">
                                <option value="Junior">Junior</option>
                                <option value="Senior">Senior</option>
                            </select>
                        </div>
                    </div>
                    <div className="row d-flex  p-3 mt-5 pb-5 sectionDoctorBg shadow">
                        <div className="col-md-12 mt-2">
                            <label for="about" className="fw-bold">About</label>
                            <textarea name="about" className=" form-control  formControlAddDoctor" id="about" rows="3" placeholder="please tell yourself" defaultValue="" ref={register({ required: true })} />
                        </div>
                        <div className="col-md-6  mt-2 ms-0">
                            <label for="photo" className="fw-bold">Photo</label>
                            <input name="photo" type="file" id="photo" className="form-control  formControlAddDoctor " onChange={handleImageUpload} ref={register({ required: true })} />
                        </div>
                        <div className="col-md-6  mt-2 ms-0">
                            <label for="education" className="fw-bold">Education</label>
                            <input name="education" id="education" className="form-control  formControlAddDoctor " placeholder="education" ref={register({ required: true })} />
                        </div>
                    </div>
                    <div className="row d-flex p-3 mt-5  pb-5 sectionDoctorBg shadow">
                        <div className="col-md-6 mt-2">
                            <label for="specialization" className="fw-bold">Specialization</label>
                            <select ref={register} name="specialization" className=" form-select formSelectAddDoctor" >
                                <option value="Allergists">Allergists</option>
                                <option value="Dermatologists">Dermatologists</option>
                                <option value="Ophthalmologists">Ophthalmologists</option>
                                <option value="Gynecologists">Gynecologists</option>
                                <option value="Cardiologists">Cardiologists</option>
                                <option value="Endocrinologists">Endocrinologists</option>
                                <option value="Gastroenterologists">Gastroenterologists</option>
                                <option value="Urologists">Urologists</option>
                                <option value="Pulmonologists">Pulmonologists</option>
                                <option value="Neurologists">Neurologists</option>
                                <option value="Psychiatrists">Psychiatrists</option>
                                <option value="General surgeons">General surgeons</option>
                                <option value="Cardiac surgeons">Cardiac surgeons</option>
                            </select>
                        </div>
                        <div className="col-md-6 mt-2">
                            <label for="username" className="fw-bold">Consultation</label>
                            <input name="consultation" id="" className="form-control  formControlAddDoctor" defaultValue="" placeholder="consultation fee" ref={register({ required: true })} />
                        </div>
                    </div>
                    <div className="d-flex justify-content-end ">
                        <input type="submit" className="btn  text-white registerDoctorButton p-0" value="Register" />
                    </div>
                </form>
            </div>
        </div>
    );
};
export default AddDoctor;