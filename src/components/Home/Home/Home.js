import React from 'react';
import AppointmentBooking from '../Booking/AppointmentBooking/AppointmentBooking';
import FindDoctor from '../FindDoctor/FindDoctor';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import TakeAppointment from '../TakeAppointment/TakeAppointment';

const Home = () => {
    return (
        <div>
            <NavBar/>
            <FindDoctor/>
            <TakeAppointment/>
            <AppointmentBooking></AppointmentBooking>
            <Footer/>
        </div>
    );
};

export default Home;