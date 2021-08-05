import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import './AddDoctor.scss'
const axios = require('axios').default;


const AddDoctor = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);
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

        fetch(`http://localhost:4300/doctor/addDoctor`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(doctorData)
        })
    }
    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '1d22a6a9a642db8bb464e6064c6a0852');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
            });
    }
    return (
        <div className="addDoctorSection">
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)} className=" formStyle" >
                    <h5 className="">Basic Information</h5>
                    <div className="row d-flex p-3 sectionDoctorBg">
                        <div className="col-md-6  mt-2">
                            <label for="username" className="fw-bold">Name</label>
                            <input name="name" id="username" className="form-control " defaultValue="" placeholder="name" ref={register({ required: true })} />
                        </div>
                        <div className="col-md-6  mt-2">
                            <label for="phone" className="fw-bold">Phone</label>
                            <input name="phone" id="email" className="form-control " defaultValue="" placeholder="phone" ref={register({ required: true })} />
                        </div>
                        <div className="col-md-6  mt-2">
                            <label for="address" className="fw-bold">Address</label>
                            <input name="address" id="address" className="form-control " defaultValue="" placeholder="address" ref={register({ required: true })} />
                        </div>
                        <div className="col-md-6 mt-2">
                            <label for="experience" className="fw-bold">Experience</label><br />
                            <select ref={register} name="experience" className="form-select">
                                <option value="Junior">Junior</option>
                                <option value="Senior">Senior</option>
                            </select>
                        </div>
                    </div>
                    <div className="row d-flex  p-3 mt-5 sectionDoctorBg">
                        <div className="col-md-12 mt-2">
                            <label for="about" className="fw-bold">About</label>
                            <textarea name="about" className=" form-control " id="about" rows="3" placeholder="please tell yourself" defaultValue="" ref={register({ required: true })} />
                        </div>
                        <div className="col-md-6  mt-2 ms-0">
                            <label for="photo" className="fw-bold">Photo</label>
                            <input name="photo" type="file" id="photo" className="form-control " onChange={handleImageUpload} ref={register({ required: true })} />
                        </div>
                        <div className="col-md-6  mt-2 ms-0">
                            <label for="education" className="fw-bold">Education</label>
                            <input name="education" id="education" className="form-control" placeholder="education" ref={register({ required: true })} />
                        </div>
                        </div>
                        <div className="row d-flex p-3 mt-5  sectionDoctorBg">
                        <div className="col-md-6 mt-2">
                            <label for="specialization" className="fw-bold">Specialization</label>
                            <select ref={register} name="specialization" className="form-select" >
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
                            <input name="consultation" id="" className="form-control " defaultValue="" placeholder="consultation fee" ref={register({ required: true })} />
                        </div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <input type="submit" className="mt-3 btn btn-primary " value="Save" />
                    </div>
                </form>
            </div>
        </div>
    );
};
export default AddDoctor;