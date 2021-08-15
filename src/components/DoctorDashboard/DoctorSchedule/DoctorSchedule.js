import React from 'react';
import './DoctorSchedule.scss';
import { InlineWidget } from "react-calendly";
import { openPopupWidget } from "react-calendly";



const DoctorSchedule = () => {
    
    
    const CustomButton = ({ url, prefill, pageSettings, utm }) => {
        const onClick = () => openPopupWidget({ url, prefill, pageSettings, utm });
      
        return <button onClick={onClick}>Custom Button</button>;
      };
    return (
        <div className="doctorDashboardData w-100 SubParentDesign">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <h2>This is schedule list</h2>
                </div>
                <div className="col-md-6 mx-auto">
                    <div className="App">
                        <InlineWidget url="https://calendly.com/doctorschaai" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorSchedule;