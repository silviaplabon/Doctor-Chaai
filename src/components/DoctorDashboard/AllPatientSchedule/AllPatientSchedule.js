import React from 'react';
import AllPatientScheduleShow from '../AllPatientScheduleShow/AllPatientScheduleShow';

const AllPatientSchedule= () => {
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

    return (
        <div className="container">
            <h1 className="text-center mb-5">Dear Patients, please wait! Current Patient Name is Silvia</h1>
            {
                patients.map(patient=><AllPatientScheduleShow patient={patient}></AllPatientScheduleShow>)
            }
        </div>
    );
};

export default AllPatientSchedule;