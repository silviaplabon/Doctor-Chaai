import React from 'react';
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
import TalentedStaff from '../TalentedStaff/TalentedStaff';

const Home = () => {
    return (
        <div>
            <NavBar/>
            <Header/>
            <FindDoctor/>
            <Features />
            <TakeAppointment/>
            <FAQ></FAQ>
            <Department/>
            <TalentedStaff />
            <OurService/>
            <Subscribe />
            <Footer/>
        </div>
    );
};

export default Home;