import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import UserAppoinmentListShow from './../UserAppointmentListShow/UserAppointmentListShow';

const UserAppointmentList = () => {
    const [appointmentList, setAppointmentList] = useState([]);
    const [loggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https:whispering-reef-28119.herokuapp.com/appointment', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('Authorization')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setAppointmentList(data.result.filter(data=>data.userEmail === loggedInUser.email));
            })
    }, [loggedInUser.email])
    
    return (
        <div className="w-100 SubParentDesign" >
            <div className="row row-cols-1 row-cols-md-1  row-cols-lg-2 row-cols-xxl-3">
                {
                    appointmentList?.map(appointment => <UserAppoinmentListShow appointment={appointment} />)
                }
            </div>
        </div>
    );
};

export default UserAppointmentList;
