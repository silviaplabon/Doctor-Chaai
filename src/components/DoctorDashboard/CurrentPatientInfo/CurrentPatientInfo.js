import React, { useState } from "react";
import CurrentPatientInfoShow from '../CurrentPatientInfoShow/CurrentPatientInfoShow';
import AllPatientShow from '../AllPatientSchedule/AllPatientSchedule.js'
import './CurrentPatientInfo.scss'
const CurrentPatientInfo = () => {
    const [patientShow, setPatientShow] = useState(0)
    const patients = [
        {
            name: 'Silvia Satoar Plabon',
            image: 'https:i.ibb.co/KFrGj1F/dr-male-75x85.jpg',
            dateOfBirth: '10 january 1998',
            bloodGroup:'0+',
            address:'Chittagong,bangladesh'
        },
        {
            name: 'Pori Rasel',
            image: 'https:i.ibb.co/KFrGj1F/dr-male-75x85.jpg',
            dateOfBirth: '10 january 1998',
            bloodGroup:'0+',
            address:'Chittagong,bangladesh'
        },
        {
            name: 'Riyan Hasan Rakib',
            image: 'https:i.ibb.co/KFrGj1F/dr-male-75x85.jpg',
            dateOfBirth: '10 january 1998',
            bloodGroup:'0+',
            address:'Chittagong,bangladesh'
        },
        {
            name: 'Tahmid Pro',
            image: 'https:i.ibb.co/KFrGj1F/dr-male-75x85.jpg',
            dateOfBirth: '10 january 1998',
            bloodGroup:'0+',
            address:'Chittagong,bangladesh'
        },
        
        {
            name: 'Farhan UX',
            image: 'https:i.ibb.co/KFrGj1F/dr-male-75x85.jpg',
            dateOfBirth: '10 january 1998',
            bloodGroup:'0+',
            address:'Chittagong,bangladesh'
        }

    ]
    const handlePatientShowNext = () => {
        const newPatient = patientShow + 1;
        if (newPatient < patients.length) {
            setPatientShow(newPatient);
        }
    }
    const handlePatientShowPrev = () => {
        const newPatient = patientShow - 1;
        if (newPatient > -1 && newPatient < patients.length) {
            setPatientShow(newPatient);
        }
    }

    return (
        <div className="container">
            <h4 className="text-center">
                Dear Patients of Dr. Sokina Alamghir, Please wait.<span className="text-primary">Current Patient Name is:  {patients[`${patientShow}`].name}</span>
            </h4>
            {
                (patientShow < patients.length) &&(patientShow>-1)?
                <CurrentPatientInfoShow patient={patients[`${patientShow}`]}></CurrentPatientInfoShow>:<h1>No Patient Available</h1>
            }
            <div className="col-12 col-lg-6 mt-5">
                <div className="d-flex  justify-content-between align-items-between me-2">
                        {
                            (patientShow < patients.length) ?<> <button  className="prevNextButton p-2 text-white" onClick={() => handlePatientShowPrev()}>Previous Patient</button>
                             <button className="prevNextButton p-2 text-white" onClick={() => handlePatientShowNext()}>Next Patient</button></>: <h1>No Doctor Available</h1>
                        }       
                </div>
            </div>
            <div className="row">
                {
                    patients?.map(patient=><AllPatientShow patient={patient}></AllPatientShow>)
                }
            </div>


        </div>
    )
};

export default CurrentPatientInfo;
