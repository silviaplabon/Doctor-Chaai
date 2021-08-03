import React from 'react';
// import MailchimpFormContainer from '../../MailchimpFormContainer/MailchimpFormContainer';
import About from '../About/About';
import Android from '../AndroidApp/Android';
import FAQ from '../Booking/FAQ/FAQ';
import Department from '../Department/Department';
import Features from '../Features/Features';
import FindDoctor from '../FindDoctor/FindDoctor';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import OurService from '../OurService/OurService';
import Subscribe from '../Subscribe/Subscribe';
import TakeAppointment from '../TakeAppointment/TakeAppointment';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <NavBar/>
            <Header/>
            <FindDoctor/>
            <Features />
            <FAQ></FAQ>
            <Department/>
            <About/>
            <OurService/>
            <TakeAppointment/>
            <Android/>
            <Testimonial/>
            <Subscribe />
            <Footer/>
        </div>
    );
};

export default Home;