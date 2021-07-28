import React from 'react';
import About from '../About/About';
import AppointmentBooking from '../Booking/AppointmentBooking/AppointmentBooking';
import Department from '../Department/Department';
import Features from '../Features/Features';
import FindDoctor from '../FindDoctor/FindDoctor';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import OurService from '../OurService/OurService';
import TakeAppointment from '../TakeAppointment/TakeAppointment';
import TalentedStaff from '../TalentedStaff/TalentedStaff';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <NavBar/>
            <Header/>
            <FindDoctor/>
            <Features />
            <TakeAppointment/>
            <AppointmentBooking/>
            <Department/>
            <TalentedStaff />
            <About/>
            <OurService/>
            <Testimonial/>
            <Footer/>
        </div>
    );
};

export default Home;