import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import './UserDashboardData.scss';
const UserDashboardData = () => {
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
            email: data.email
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
            <div className="container mt-5 ">
                <form onSubmit={handleSubmit(onSubmit)} className=" addDoctorFormStyle pt-5" >
                    <div className="row d-flex p-3  pb-5 sectionDoctorBg shadow">
                        <div className="col-6  mt-2">
                            <label for="username" className="fw-bold">Name</label>
                            <input name="name" id="username" className="form-control  formControlAddDoctor" defaultValue="" placeholder="name" ref={register({ required: true })} />
                        </div>
                        <div className="col-6  mt-2">
                            <label for="phone" className="fw-bold">Date Of Birth</label>
                            <input name="birthDate" id="birthDate" className="form-control formControlAddDoctor" defaultValue="" placeholder="phone" ref={register({ required: true })} />
                        </div>
                        <div className="col-6  mt-2">
                            <label for="address" className="fw-bold">Blood Group</label>
                            <input name="bloodGroup" id="address" className="form-control formControlAddDoctor" defaultValue="" placeholder="address" ref={register({ required: true })} />
                        </div>

                        <div className="col-6  mt-2">
                            <label for="email" className="fw-bold">Email ID</label>
                            <input name="email" id="email" className="form-control formControlAddDoctor" defaultValue="" placeholder="Email" ref={register({ required: true })} disabled />
                        </div>
                        <div className="col-6  mt-2">
                            <label for="email" className="fw-bold">Mobile</label>
                            <input name="mobile" id="email" className="form-control formControlAddDoctor" defaultValue="" placeholder="Email" ref={register({ required: true })} />
                        </div>
                        <div className="col-6 mt-2 ms-0">
                                <label for="photo" className="fw-bold">Photo</label>
                                <input name="photo" type="file" id="photo" className="form-control  formControlAddDoctor" onChange={handleImageUpload} ref={register({ required: true })} />
                        </div>

                        <div className="col-12 mt-2">
                            <label for="address" className="fw-bold">Address</label>
                            <textarea name="address"  className=" form-control h-100 formControlAddDoctor textAreaAddress" id="about" placeholder="please tell yourself" defaultValue="" ref={register({ required: true })} />
                        </div>
                        <div className="col-6  mt-2 ms-0">
                            <label for="city" className="fw-bold">City</label>
                            <input name="city" id="city" className="form-control  formControlAddDoctor " placeholder="education" ref={register({ required: true })} />
                        </div>
                        <div className="col-6  mt-2 ms-0">
                            <label for="state" className="fw-bold">State</label>
                            <input name="state" id="education" className="form-control  formControlAddDoctor " placeholder="education" ref={register({ required: true })} />
                        </div>

                        <div className="col-6 mt-2">
                            <label for="zipcode" className="fw-bold">Zip Code</label>
                            <input name="zipCode" id="" className="form-control  formControlAddDoctor" defaultValue="" placeholder="consultation fee" ref={register({ required: true })} />
                        </div>

                        <div className="d-flex justify-content-end ">
                            <input type="submit" className="btn  text-white registerDoctorButton p-0" value="Register" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default UserDashboardData;