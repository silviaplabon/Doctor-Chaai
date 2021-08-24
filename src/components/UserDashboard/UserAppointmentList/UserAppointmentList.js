import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../../App";
import UserAppoinmentListShow from './../UserAppointmentListShow/UserAppointmentListShow';

const UserAppointmentList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [appointmentList, setAppointmentList] = useState([])
    const appointmentData = [
        {
            doctor: 'Dr. Ruby Perrin',
            image: 'https:i.ibb.co/KFrGj1F/dr-male-75x85.jpg',
            department: 'dental',
            appDate: '14 Nov 2019',
            bookingDate: '12 Nov 2019',
            amount: '1000',
            status: 'Confirm'
        },
        {
            doctor: 'Dr. Ruby Perrin',
            image: 'https:i.ibb.co/KFrGj1F/dr-male-75x85.jpg',
            department: 'dental',
            appDate: '14 Nov 2019',
            bookingDate: '12 Nov 2019',
            amount: '1000',
            status: 'Confirm'
        },
        {
            doctor: 'Dr. Ruby Perrin',
            image: 'https:i.ibb.co/KFrGj1F/dr-male-75x85.jpg',
            department: 'dental',
            appDate: '14 Nov 2019',
            bookingDate: '12 Nov 2019',
            amount: '1000',
            status: 'Confirm'
        },
        {
            doctor: 'Dr. Ruby Perrin',
            image: 'https:i.ibb.co/KFrGj1F/dr-male-75x85.jpg',
            department: 'dental',
            appDate: '14 Nov 2019',
            bookingDate: '12 Nov 2019',
            amount: '1000',
            status: 'Confirm'
        }
    ]

    useEffect(() => {
        fetch('https:whispering-reef-28119.herokuapp.com/appointment', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('Authorization')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setAppointmentList(data.result);
                console.log(data.result);
            })
    }, [])
    
    return (
        <div className="w-100 SubParentDesign" >
            <div className="row row-cols-1 row-cols-md-1  row-cols-lg-2 row-cols-xxl-3">
                {
                    appointmentData?.map(appointment => <UserAppoinmentListShow appointment={appointment} />)
                }
            </div>
        </div>
    );
};

export default UserAppointmentList;
